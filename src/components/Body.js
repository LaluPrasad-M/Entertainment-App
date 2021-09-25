import React, { useState } from "react";
import "./Body.css";
import ExternalData from "../resources/data";

import SearchBar from "./Body/SearchBar";
import SongsList from "./Body/SongsList";
import AddNewSong from "./Body/AddNewSong";

const Body = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  const sorted = (myList) => {
    myList.sort(
      (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() && 1) || -1
    );
    return myList;
  };
  const addNewSongHandler = (newSong) => {
    setData(sorted([...data, newSong]));
    setAllData(sorted([...data, newSong]));
  };

  React.useEffect(() => {
    setData(sorted(ExternalData));
    setAllData(sorted(ExternalData));
  }, []);

  return (
    <div className="main-body">
      <SearchBar data={allData} setData={setData} />
      <hr />
      <SongsList data={data} setData={setData} setAllData={setAllData} />
      <AddNewSong setData={addNewSongHandler} />
    </div>
  );
};

export default Body;
