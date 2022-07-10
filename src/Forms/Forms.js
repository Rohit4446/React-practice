import React, { useState } from "react";
import DisplayForm from "./DisplayForm";

const Forms = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = state;
    data.push(newData);

    setState("");
    // console.log(data);
  };

  const removeItem = (id) => {
    const finalData = data.filter((curEle, index) => {
      console.log(index);
      console.log(id);
      return index !== id;
    });
    console.log(finalData);
    setData(finalData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:
        <input type="text" value={state} onChange={handleChange} required />
        <button>Add</button>
      </form>
      {data.map((value, index) => {
        return (
          <DisplayForm
            remove={removeItem}
            id={index}
            key={value + index}
            data={value}
          />
        );
      })}
    </>
  );
};

export default Forms;
