import React from "react";
import { HomePage, ExerciseDetails } from "./index";
import { FooterOverlay } from "../components";
import Test from "./test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AllPages = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/text" element={<Test />} />
                    <Route
                        path="/exerciseDetail/:type"
                        element={<ExerciseDetails />}
                    />
                </Routes>
                {/* <FooterOverlay /> */}
            </BrowserRouter>
        </>
    );
};

export default AllPages;
