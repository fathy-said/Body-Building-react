import React from "react";
import "./BoxExercis.css";
const BoxExercis = ({ Img, target, bodyPart, Name }) => {
    return (
        <>
            <div className="box-exercise">
                <img src={Img} alt="" />
                <div className="box-bt">
                    <span> {bodyPart}</span>
                    <span> {target}</span>
                </div>
                <h5>{Name}</h5>
            </div>
        </>
    );
};

export default BoxExercis;
