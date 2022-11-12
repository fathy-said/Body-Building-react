import React from "react";
import { HomePage, ExerciseDetails } from "./index";
import { FooterOverlay, GoUp } from "../components";
import Test from "./test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AllPages = () => {
    return (
        <>
            <BrowserRouter>
                <span id="up"></span>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/exerciseDetail/:type"
                        element={<ExerciseDetails />}
                    />
                </Routes>
                <GoUp />
                <FooterOverlay />
            </BrowserRouter>
        </>
    );
};

export default AllPages;
