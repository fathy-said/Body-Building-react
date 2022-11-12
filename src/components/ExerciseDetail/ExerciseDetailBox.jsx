import React, { useEffect, useState } from "react";
import { BiRun, BiBody } from "react-icons/bi";
import { FaBiking } from "react-icons/fa";
import { exerciseData } from "../../constants/data";
import "./ExerciseDetailBox.css";
import { useParams } from "react-router-dom";
import { SimilarExercises } from "../index"

const ExerciseDetailBox = () => {
    let param = useParams();
    const [getDetails, setDetails] = useState();
    let detailAxios = async () => {

        let res = await exerciseData.filter((Part) => Part.id === param.type);
        setDetails(res);

    };
    useEffect(() => {
        detailAxios()
    }, [param.type]);




    return (
        <>
            <div className="exercise-detail row gap-4 gap-md-0">
                <div className="box-img col-md-6">
                    <img src={getDetails ? getDetails[0].gifUrl : null} alt="" />
                </div>

                <div className="box-left col-md-6">
                    <h2>{getDetails ? getDetails[0].name : null}</h2>

                    <div className="box-icon">
                        <div>
                            <span>
                                <FaBiking />
                            </span>
                            <h5>{getDetails ? getDetails[0].equipment : null}</h5>
                        </div>
                        <div>
                            <span>
                                <BiRun />
                            </span>

                            <h5>{getDetails ? getDetails[0].bodyPart : null}</h5>
                        </div>
                        <div>
                            <span>
                                <BiBody />
                            </span>

                            <h5>{getDetails ? getDetails[0].target : null}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarExercises nameExercise={getDetails ? getDetails[0].target : null} title={"target muscle"} />


            <SimilarExercises title={"equipment"} />
        </>
    );
};

export default ExerciseDetailBox;
