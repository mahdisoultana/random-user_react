import React from "react";
function Li({ info }) {
  return (
    <li>
      <p>{info}</p>
    </li>
  );
}

function List(props) {
  return (
    props.dataU?.map((info, i) => (
      <List key={Math.random() * new Date().getTime()} info={info} />
    )) || ""
  );
}

export default List;
