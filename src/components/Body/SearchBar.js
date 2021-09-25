import React, { useState } from "react";

const SearchBar = ({ data, setData }) => {
  const searchBarHandler = (value) => {
    console.log(data);
    value = value.trimStart();
    var searchResult = data.filter(
      (element) =>
        element.title.toLowerCase().includes(value.toLowerCase()) ||
        element.subtitle.toLowerCase().includes(value.toLowerCase())
    );
    setData(searchResult);
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search here"
        onChange={(value) => searchBarHandler(value.target.value)}
      />
    </div>
  );
};

export default SearchBar;
