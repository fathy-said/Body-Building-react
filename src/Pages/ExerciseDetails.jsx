import React from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components";

import { ExerciseDetailBox } from "../components/index";
const ExerciseDetails = () => {
    let param = useParams();
    return (
        <>
            <Navbar />

            <ExerciseDetailBox />
        </>
    );
};

export default ExerciseDetails;
