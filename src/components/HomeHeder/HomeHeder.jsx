import React from "react";
import "./HomeHeder.css";
import banner from "../../assets/images/jakob-owens-qkQwDvRqQY8-unsplash-removebg-preview.png";
import banner2 from "../../assets/images/charles-gaudreault-xXofYCc3hqc-unsplash-removebg-preview (1).png";
import { NavLink } from "react-router-dom";
import { CgGym } from "react-icons/cg";

const HomeHeder = () => (
    <div className="header-home row " >
        <div className="box-left col-lg-6">
            <div className="box">
                <div className="logo col-2">
                    <a href="">
                        <CgGym />
                    </a>
                </div>
                <ul className="col-4">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <a href="#exercises">exercises</a>
                    </li>
                </ul>
            </div>
            <div className="info ">
                <h4>fitness club</h4>
                <h2>
                    sweat,smile <br /> and repeat
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button>export exercises</button>
            </div>
        </div>
        <div className="box-right col-lg-6 d-none d-lg-block">
            <div className="box-img">
                <img src={banner} alt="" />
            </div>
        </div>
    </div>
);

export default HomeHeder;
