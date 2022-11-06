import React from "react";
import { BoxMenu } from "./BoxMenu/BoxMenu.jsx";
import "./Menu.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState, useEffect } from "react";
import { SearchAxios, options } from "../../constants/data.js";

const Menu = () => {
    const [getSearch, setSearch] = useState();
    const [getMenu, setMenu] = useState();
    // get search data from api
    let dataSearch = async () => {
        if (getSearch) {
            let resSearch = await SearchAxios(
                `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${getSearch}`,
                options
            );

            console.log(resSearch);
        }
    };
    // get menu data from api
    let dataMenu = async () => {
        let resMenu = await SearchAxios(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
            options
        );
        setMenu(["all", ...resMenu]);
    };

    useEffect(() => {
        dataMenu();
    }, []);
    return (
        <div className="menu">
            <div className="box-title">
                <h1>
                    awesome exercises you <br /> should know{" "}
                </h1>
            </div>

            <form action="">
                <input
                    type="text"
                    value={getSearch}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                    }}
                    placeholder="Search Exercises"
                />
                <input
                    type="submit"
                    value="Search"
                    onClick={(e) => {
                        e.preventDefault();
                        dataSearch();
                    }}
                />
            </form>
            <div className="menu-box d-flex">
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "2rem",
                        // type: "loop",
                        breakpoints: {
                            992: {
                                perPage: 2,
                            },
                        },
                    }}
                >
                    {getMenu ? (
                        getMenu.map((el, index) => {
                            return (
                                <SplideSlide key={index}>
                                    <BoxMenu name={el} Id={el} />
                                </SplideSlide>
                            );
                        })
                    ) : (
                        <h2>not found data</h2>
                    )}
                </Splide>
            </div>
        </div>
    );
};

export default Menu;
