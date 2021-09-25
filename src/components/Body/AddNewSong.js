import React, { useState } from "react";

const AddNewSong = ({ setData }) => {
  const [id, setId] = useState(5);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [addNewSong, setAddNewSong] = useState(false);

  const titleInputHandler = (title) => {
    title = title.trimStart();
    setTitle(title);
  };

  const subtitleInputHandler = (subtitle) => {
    subtitle = subtitle.trimStart();
    setSubtitle(subtitle);
    return <alert>Hi</alert>;
  };

  const ResetInputValuesHandler = () => {
    setTitle("");
    setSubtitle("");
  };

  const addSongHandler = () => {
    setId(id + 1);
    var song = {
      like: "3",
      id: JSON.stringify(id),
      title: title.trim(),
      subtitle: subtitle.trim(),
    };
    setData(song);
    ResetInputValuesHandler();
  };

  const addSongInputsJSX = (
    <div>
      <button className="btn" onClick={() => ResetInputValuesHandler()}>
        Clear
      </button>
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
  );

  return addNewSong ? (
    <div>
      <button className="btn" onClick={() => setAddNewSong(!addNewSong)}>
        Close
      </button>
      {addSongInputsJSX}
    </div>
  ) : (
    <button className="btn" onClick={() => setAddNewSong(!addNewSong)}>
      Add New Song
    </button>
  );
};

export default AddNewSong;
