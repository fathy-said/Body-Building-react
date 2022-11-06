import React from "react";
import Icon from "../../../assets/icons/gym.png";
import "./BoxMenu.css";
import { useState } from "react";
import { useContext } from "react";
import { contextID } from "../../../constants/Contextapi";
const BoxMenu = ({ name, Id }) => {
    const [getID, setID] = useState("all");

    // change contextID
    let { setDataContext } = useContext(contextID);
    setDataContext(getID);
    //
    let setActive = (e) => {
        // in case target = img ||span
        if (
            e.target.classList.contains("img") ||
            e.target.classList.contains("span")
        ) {
            e.target.parentElement.parentElement.parentElement
                .querySelectorAll(".active")
                .forEach((ea) => {
                    ea.classList.remove("active");
                });
            e.target.parentElement.classList.add("active");

            setID(e.target.parentElement.id);
        }
        // ==
        // in case target = box
        if (e.target.classList.contains("box")) {
            e.target.parentElement.parentElement
                .querySelectorAll(".active")
                .forEach((ea) => {
                    ea.classList.remove("active");
                });
            e.target.classList.add("active");
            setID(e.target.id);
        }
    };
    return (
        <>
            <div
                className="box"
                id={Id}
                onLoad={(e) => {
                    e.target.parentElement.id === "all"
                        ? e.target.parentElement.classList.add("active")
                        : null;
                }}
                onClick={(e) => {
                    setActive(e);
                }}
            >
                <img className="img" src={Icon} alt="" />
                <span className="span">{name}</span>
            </div>
        </>
    );
};

export { BoxMenu };
