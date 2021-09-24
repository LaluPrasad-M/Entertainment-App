import { MdExitToApp, MdMusicNote, MdLibraryMusic } from "react-icons/md";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <h1 className="icon">
        <MdLibraryMusic />
      </h1>
      <h1 className="main-heading">Music Player</h1>
      <h1 className="exit">
        <MdExitToApp />
      </h1>
    </div>
  );
};
export default Header;
