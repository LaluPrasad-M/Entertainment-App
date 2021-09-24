import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import "./Body.css";
import ExternalData from "../resources/data";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");

  const [like, setLike] = useState([]);
  const [data, setData] = useState([
    { id: "", like: "", title: "", subtitle: "" },
  ]);
  const [allData, setAllData] = useState([
    { id: "", like: "", title: "", subtitle: "" },
  ]);

  const [id, setId] = useState(5);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const searchHandler = (search) => {
    search = search.trimStart();
    var _data = allData.filter(
      (element) =>
        element.id.toLowerCase().includes(search.toLowerCase()) ||
        element.title.toLowerCase().includes(search.toLowerCase()) ||
        element.subtitle.toLowerCase().includes(search.toLowerCase())
    );
    setSearchValue(search);
    setData(_data);
  };

  const [addnewSong, setAddnewSong] = useState(false);

  const likeHandler = (id) => {
    var _like = like.filter((eachId) => eachId.id === id);
    var __like = like.filter((eachId) => eachId.id !== id);
    var _data = data.filter((eachData) => eachData.id === id);
    var __data = data.filter((eachData) => eachData.id !== id);

    if (_like.length === 0) {
      _data[0].like = JSON.stringify(parseInt(_data[0].like) + 1);
      setLike([...like, { id: id, like: true }]);
      //   console.log("1st fn");
    } else {
      if (_like[0].like === false) {
        _like[0].like = true;
        _data[0].like = JSON.stringify(parseInt(_data[0].like) + 1);
      } else {
        _like[0].like = false;
        _data[0].like = JSON.stringify(parseInt(_data[0].like) - 1);
      }
      setLike([..._like, ...__like]);
    }

    setData(
      [..._data, ...__data].sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() && 1) || -1
      )
    );

    setAllData(
      [..._data, ...__data].sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() && 1) || -1
      )
    );
  };

  const toggleAddNewSong = () => {
    setAddnewSong(!addnewSong);
  };

  const titleInputHandler = (title) => {
    title = title.trim();
    setTitle(title);
  };

  const subtitleInputHandler = (subtitle) => {
    subtitle = subtitle.trim();
    setSubtitle(subtitle);
  };

  const addSongHandler = () => {
    setId(id + 1);
    var song = {
      like: "3",
      id: JSON.stringify(id),
      title,
      subtitle,
    };

    setData(
      [...data, song].sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() && 1) || -1
      )
    );

    setAllData(
      [...data, song].sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() && 1) || -1
      )
    );

    setTitle("");
    setSubtitle("");
  };

  const deleteHandler = (id) => {
    setData(data.filter((eachData) => eachData.id !== id));
    setAllData(data.filter((eachData) => eachData.id !== id));
  };

  const isliked = (id) => {
    var likingData = like.filter((eachLike) => eachLike.id === id);
    if (likingData.length === 0) {
      return false;
    } else {
      return likingData[0].like;
    }
  };
  React.useEffect(() => {
    setData(
      ExternalData.sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() && 1) || -1
      )
    );

    setAllData(
      ExternalData.sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() && 1) || -1
      )
    );
  }, []);

  return (
    <div className="main-body">
      <input
        className="search"
        type="text"
        placeholder="Search here"
        value={searchValue}
        onChange={(value) => searchHandler(value.target.value)}
      />
      <hr />

      {data.map((eachData, index) => (
        <div key={index}>
          <div className="song">
            <div className="divSong">
              <button className="like" onClick={() => likeHandler(eachData.id)}>
                <div style={{ color: "black" }}> {eachData.like}</div>
                {isliked(eachData.id) ? (
                  <FcLike style={{ fontSize: "1.5rem" }} />
                ) : (
                  <FcLikePlaceholder style={{ fontSize: "1.5rem" }} />
                )}
              </button>
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

            <button className="btn" onClick={() => deleteHandler(eachData.id)}>
              delete
            </button>
          </div>
          <hr />
        </div>
      ))}

      {addnewSong ? (
        <div>
          <div>
            <button className="btn" onClick={() => toggleAddNewSong()}>
              Close
            </button>
          </div>
          <input
            type="text"
            value={title}
            placeholder="title"
            onChange={(value) => titleInputHandler(value.target.value)}
          />
          <input
            type="text"
            placeholder="subtitle"
            value={subtitle}
            onChange={(value) => subtitleInputHandler(value.target.value)}
          />
          <button className="btn" onClick={() => addSongHandler()}>
            Submit
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <button className="btn" onClick={() => toggleAddNewSong()}>
            Add New Song
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
