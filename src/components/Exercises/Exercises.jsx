import React from "react";
import { useState, useEffect, useContext } from "react";
import "./Exercises.css";
import { ExerciseBox } from "..";
import { options, SearchAxios } from "../../constants/data";
import { contextID } from "../../constants/Contextapi";
import { Link } from "react-router-dom";
const Exercises = () => {
    let { dataContext } = useContext(contextID);
    const [getExercise, setExercise] = useState();
    let dataMenu = async () => {
        if (dataContext === "all") {
            let res = await SearchAxios(
                `https://exercisedb.p.rapidapi.com/exercises`,
                options
            );
            setExercise(res);
        } else {
            let res = await SearchAxios(
                `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${dataContext}`,
                options
            );
            setExercise(res);
        }
    };
    useEffect(() => {
        // dataMenu();
    }, [dataContext]);
    return (
        <div className="container-exercises">
            <div className="title-box">showing results</div>
            <div className="all-exercises">
                {getExercise ? (
                    getExercise.map((ex) => {
                        return (
                            <Link to={"/exerciseDetail/" + ex.id} key={ex.id}>
                                <ExerciseBox
                                    Img={ex.gifUrl}
                                    Name={ex.name}
                                    bodyPart={ex.bodyPart}
                                    target={ex.target}
                                />
                            </Link>
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
