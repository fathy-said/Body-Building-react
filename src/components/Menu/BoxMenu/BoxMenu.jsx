import React from "react";
import Icon from "../../../assets/icons/gym.png";
import "./BoxMenu.css";
import { useContext } from "react";
import { contextID } from "../../../constants/Contextapi";
const BoxMenu = ({ name, Id }) => {

    // change contextID
    let { setDataContext } = useContext(contextID);

    //
    let setActive = (e) => {
        // in case target = img ||span
        if (
            e.target.tagName === "IMG" ||
            e.target.tagName === "SPAN"
        ) {


            e.target.parentElement.parentElement
                .parentElement.querySelector('.active').classList.remove("active")
            e.target.parentElement.classList.add("active")

            setDataContext(e.target.parentElement.id);
        }

        // ==
        // in case target = box
        if (e.target.classList.contains("box")) {
            e.stopPropagation()
            e.target.parentElement.parentElement
                .querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            setDataContext(e.target.id);

        }

    };
    let checkTarget = (e) => {
        if (Id === "all") {
            e.target.parentElement.classList.add("active")
        }

    }
    return (
        <>
            <div
                className="box"
                id={Id}
                onLoad={(e) => { checkTarget(e) }}
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
