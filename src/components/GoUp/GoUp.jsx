import React, { useEffect, useState } from 'react';
import "./GoUp.css"
import { ImArrowUp2 } from "react-icons/im";
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';

const GoUp = () => {
  const scrollY = useScrollYPosition();
  if (scrollY >= "1000") {
    document.querySelector('.go-up').classList.add("active")
  }
  else {
    if (document.querySelector('.go-up')) {
      if (document.querySelector('.go-up').classList.contains("active")) {
        document.querySelector('.go-up').classList.remove("active")
      }
    }


  }
  return (
    <a href='#' className='go-up'>
      <ImArrowUp2 />
    </a>
  );
}

export default GoUp;
