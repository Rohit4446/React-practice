import React from "react";
//import "../styles.css";

const ListAndKeys = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const listItem = number.map((number, index) => (
    <li key={number + index}>{number}</li>
  ));

  return (
    <>
      <ul>{listItem}</ul>
    </>
  );
};

export default ListAndKeys;
