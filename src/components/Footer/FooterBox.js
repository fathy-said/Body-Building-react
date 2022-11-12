import React from "react";
import {
    FaCopyright,
    FaTwitter,
    FaFacebookF,
    FaGoogle,
    FaInstagram
} from "react-icons/fa";

const FooterBox = () => {
    return (
        <div className="footer">
            <div className="container">
                <h5>
                    copyright
                    <span>
                        <FaCopyright />
                    </span>
                    2022 Your Company | Design
                    <span>Fathy Said</span>
                </h5>
                <div className="box-icon">
                    <span>
                        <a href="#">
                            <FaTwitter />

                        </a>
                    </span>

                    <span>
                        <a href="#">
                            <FaFacebookF />

                        </a>
                    </span>

                    <span>
                        <a href="#">
                            <FaGoogle />

                        </a>
                    </span>

                    <span>
                        <a href="#">
                            <FaInstagram />

                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FooterBox;
