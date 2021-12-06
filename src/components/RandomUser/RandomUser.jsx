import React, { useState } from "react";
import { useQuery } from "react-query";
import { StyledRandomUser } from "./StyledRandomUser";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaUserAlt, FaPeopleArrows } from "react-icons/fa";

function RandomUser() {
  const [rndNum, setRndNum] = useState(0);
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");

  const { data, isLoading, isError } = useQuery(
    "user" + rndNum,
    async () =>
      await fetch("https://randomuser.me/api/").then((res) => res.json()),
    {
      staleTime: 10000,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      onSuccess(data) {
        console.log(data.results[0]);
        const {
          cell,
          email,
          gender,
          location: { city, country, state, postcode },
          name: { first, last, title },
          login: { uuid },
          picture: { large },
        } = data.results[0];
        let name = title + " " + first + " " + last;
        let id = uuid;
        let img = large;
        let location = city + " " + country + " " + state + " " + postcode;
        setUser({
          cell,
          email,
          gender,
          location,
          img,
          id,
          name,
        });

        setTitle("name");
        setInfo(name);
      },
    },
  );

  const [user, setUser] = useState({
    cell: "",
    email: "",
    gender: "",
    location: "",
    img: "",
    id: "",
    name: "",
  });

  function onChange(e) {
    // console.log(e.target.className.split(" ")[0]);
    setTitle(e.target.className.split(" ")[0].trim());
    setInfo(user[e.target.className]);
  }
  console.log(data);
  return (
    <StyledRandomUser className="container">
      <div className="back-img"></div>
      <div className="img-container">
        <img
          src={user.img || "https://randomuser.me/api/portraits/women/97.jpg"}
          alt={user.name}
        />
      </div>
      <div className="info">
        <h2>{title || "name"}</h2>
        <h1>{info || "Title Info"}</h1>
      </div>
      <div className="action-container">
        <button
          title="cell"
          className={"cell" === title ? "cell active" : "cell"}
          onClick={onChange}
        >
          <AiFillPhone />
        </button>
        <button
          title="location"
          className={"location" === title ? "location active" : "location"}
          onClick={onChange}
        >
          <MdLocationOn />
        </button>
        <button
          title="email"
          className={"email" === title ? "email active" : "email"}
          onClick={onChange}
        >
          <MdEmail />
        </button>
        <button
          title="name"
          className={"name" === title ? "name active" : "name"}
          onClick={onChange}
        >
          <FaUserAlt />
        </button>
        <button
          title="gender"
          className={"gender" === title ? "gender active" : "gender"}
          onClick={onChange}
        >
          <FaPeopleArrows />
        </button>
      </div>
      <button
        title="Random User"
        className="rnd-user-btn"
        onClick={() => {
          const rnd = Math.floor(Math.random() * 50);
          setRndNum(rnd);
        }}
        disabled={isLoading ? true : false}
      >
        {(isLoading && "Loading...") || "Random User"}
      </button>
    </StyledRandomUser>
  );
}

export default RandomUser;
