import React, { useEffect, useState } from "react";
import { BiRun, BiBody } from "react-icons/bi";
import { FaBiking } from "react-icons/fa";
import { options, SearchAxios } from "../../constants/data";
import { useParams } from "react-router-dom";
import "./ExerciseDetailBox.css";
const ExerciseDetailBox = () => {
    let param = useParams();
    const [getDetails, setDetails] = useState("");
    let detailAxios = async (e) => {
        let res = await SearchAxios(
            `https://exercisedb.p.rapidapi.com/exercises/exercise/0001`,
            options
        );
        setDetails(res);
    };
    useEffect(() => {
        // detailAxios(param.type);
        // console.log(getDetails);
    });

    return (
        <>
            <div className="exercise-detail row gap-4 gap-md-0">
                <div className="box-img col-md-6">
                    <img src={getDetails} alt="" />
                </div>

                <div className="box-left col-md-6">
                    <h2>back and forth step </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente tenetur itaque odio dolore eum qui ut maxime
                        officia, ali
                    </p>
                    <div className="box-icon">
                        <div>
                            <span>
                                <FaBiking />
                            </span>
                            <h5>cardio</h5>
                        </div>
                        <div>
                            <span>
                                <BiRun />
                            </span>

                            <h5>cardio</h5>
                        </div>
                        <div>
                            <span>
                                <BiBody />
                            </span>

                            <h5>cardio</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExerciseDetailBox;
