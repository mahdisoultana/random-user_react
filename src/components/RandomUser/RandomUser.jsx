import React from "react";
import { StyledRandomUser } from "./StyledRandomUser";

function RandomUser() {
  return (
    <StyledRandomUser className="container">
      <div className="back-img"></div>
      <div className="img-container">
        <img src="#" alt="name" />
      </div>
      <div className="info">
        <h2>name</h2>
        <h1>Title Info</h1>
      </div>
      <div className="action-container">
        <button>Icon</button>
        <button>Icon</button>
        <button>Icon</button>
        <button>Icon</button>
        <button>Icon</button>
        <button>Icon</button>
      </div>
      <button className="rnd-user-btn">Random User</button>
    </StyledRandomUser>
  );
}

export default RandomUser;
