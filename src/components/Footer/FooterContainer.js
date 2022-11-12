import React from "react";
import FooterBox from "./FooterBox";
import "./Footer.css";
import Fade from 'react-reveal/Fade';

const FooterContainer = () => {
    return (
        <>
            <Fade bottom>
                <FooterBox />
            </Fade>
        </>
    );
};

export default FooterContainer;
