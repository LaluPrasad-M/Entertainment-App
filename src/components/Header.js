import { GrMusic } from "react-icons/gr";
import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className = "main-header">
            <h1 className="icon"><GrMusic/></h1>
            <h1 className="main-heading">Music Player</h1>
        </div>
    );
};
export default Header;