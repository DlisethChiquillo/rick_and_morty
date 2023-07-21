import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./navBar.css"


export default function Nav ({onSearch, random }){
    return (
        <div className="nav-container">
         <div className="contaHome">
         <Link to="/about">About</Link>
         <Link to="/home">Home</Link>   
         <Link to="/favorites">Favs</Link>
         </div>   
            <SearchBar onSearch={onSearch} />

            <button className="random" onClick={random} > ADD RANDOM </button>

        </div>
    )

}
