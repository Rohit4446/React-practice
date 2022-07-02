import React from "react";

const Logical = () => {
  const messages = ["React", "Re: React", "Re:Re: React"];
  let count = 5;

  return (
    <>
      <h1>Hello</h1>
      {messages.length > 0 ? (
        <h2>you have {messages.length} Unread massages</h2>
      ) : (
        "NO unraede masseges"
      )}
      <p>{count > 0 ? `massage: ${count}` : " "}</p>
      {count && <h1>Messages: {count}</h1>}
    </>
  );
};

export default Logical;
