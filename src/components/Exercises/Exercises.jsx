import React from "react";
import { useState, useEffect, useContext } from "react";
import "./Exercises.css";
import { ExerciseBox } from "..";
import { exerciseData } from "../../constants/data";
import { contextID } from "../../constants/Contextapi";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Exercises = () => {
    let { dataContext, getSearchContext } = useContext(contextID);

    const [getExercise, setExercise] = useState();
    let dataMenu = async () => {
        if (dataContext === "all") {
            let res = await exerciseData;

            setExercise(await res);
        } else {
            let res = exerciseData.filter(
                (Part) => Part.bodyPart === dataContext
            );
            setExercise(await res);
        }
    };
    let getSearchData = async () => {
        if (getSearchContext !== undefined) {
            let res = await exerciseData.filter(
                (Part) => Part.equipment === getSearchContext
            );
            setExercise(await res);
            if (res.length <= 0) {
                setExercise(await exerciseData);
            }

        }

    };

    useEffect(() => {
        dataMenu();
    }, [dataContext]);

    useEffect(() => {
        getSearchData();
    }, [getSearchContext]);
    return (
        <div className="container-exercises" id="exercises">
            <div className="title-box">showing results</div>
            <div className="all-exercises">
                {getExercise ? (
                    getExercise.map((ex) => {
                        return (
                            <Fade bottom key={ex.id}>
                                <Link to={"/exerciseDetail/" + ex.id} >
                                    <ExerciseBox
                                        Img={ex.gifUrl}
                                        Name={ex.name}
                                        bodyPart={ex.bodyPart}
                                        target={ex.target}
                                    />
                                </Link>
                            </Fade>
                        );
                    })
                ) : (
                    <h2>not found data</h2>
                )}
            </div>
        </div>
    );
};

export default Exercises;
