import React, { useState } from "react";
import LikeButton from "./LikeButton";
const SongsList = ({ data, setData, setAllData }) => {
  const deleteSongHandler = (id) => {
    setData(data.filter((eachData) => eachData.id !== id));
    setAllData(data.filter((eachData) => eachData.id !== id));
  };

  return (
    <div>
      {data.map(eachData => (
        <div key={eachData.id}>
          <div className="song">
            <div className="divSong">
              <LikeButton data={eachData} />
              <div className="titleDiv">
                <h3 className="title">{eachData.title}</h3>
                <h5 className="subtitle">{eachData.subtitle}</h5>
              </div>

              <audio
                controls
                src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
                type="audio/mp3"
              />
            </div>

            <button
              className="btn"
              onClick={() => deleteSongHandler(eachData.id)}
            >
              delete
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SongsList;
