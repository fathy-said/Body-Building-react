import React, { useEffect, useState } from 'react';
import "./SimilarExercises.css"
import { ExerciseBox } from "../index"
import { exerciseData } from '../../constants/data';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from 'react-router-dom';
import "@splidejs/react-splide/css";
import Fade from 'react-reveal/Fade';

const SimilarExercises = ({ nameExercise, title }) => {
  const [getData, setData] = useState();
  let similarData = async () => {
    if (title === "equipment") {
      let res = await exerciseData.slice(0, 7);
      setData(await res)
    }
    else {
      let res = await exerciseData.filter((Part) => Part.target === nameExercise);
      setData(await res.slice(0, 7))
    }

  };
  useEffect(() => {
    similarData()
  }, [nameExercise]);



  return (
    <div className=' similar'>
      <div className="box-title">

        <h2>similar <span>{title}</span>exercise</h2>
      </div>
      <div className="box">
        <Fade bottom>

          <Splide
            options={{
              perPage: 3,

              arrows: false,
              pagination: false,
              drag: "free",
              gap: "40px",
              focus: "center",

              breakpoints: {
                992: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            {
              getData ? (getData.map((ex) => {
                return (
                  <SplideSlide key={ex.id}>
                    <Link to={"/exerciseDetail/" + ex.id}>
                      <ExerciseBox Img={ex.gifUrl} target={ex.target} bodyPart={ex.bodyPart}
                        Name={ex.name}
                      /> </Link>
                  </SplideSlide>
                )

              })) : null

            }
          </Splide>
        </Fade>

      </div>
    </div>
  );
}

export default SimilarExercises;
