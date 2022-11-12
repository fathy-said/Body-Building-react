import React from "react";

import "./Navbar.css";
import { CgGym } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <div className="navbar" id="navbar">
        <div className="box">
            <div className="logo">
                <a href="#">
                    <CgGym />
                </a>
            </div>
            <ul className="">
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>

            </ul>
        </div>{" "}
    </div>
);

export default Navbar;
