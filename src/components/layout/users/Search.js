import React, { useState } from "react";

const Search = ({ searchUsers, setAlert }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        name="text"
        value={text}
        onChange={onChange}
        placeholder="Input Search text"
      />
      <input type="submit" value="Search" className="btn btn-dark btn-block" />
    </form>
  );
};

export default Search;
