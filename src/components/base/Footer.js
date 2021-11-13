import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import fbIcon from '../../media/Icons/facebook.svg';
import igIcon from '../../media/Icons/instagram.svg';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <div id="my-footer" className="container mt-5">
                <div className="scroll-to-top">
                    {isVisible && (
                        <div onClick={handleGoTop}>
                            <FontAwesomeIcon icon={faChevronCircleUp} size={'2x'} />
                        </div>
                    )}
                </div>
                <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a onClick={handleGoTop} className="ftxt-home mx-2 text-muted text-decoration-none lh-1">
                            Home
                        </a>
                        <span className="ftxt-company text-muted">© 2021 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/chahal.lalit007" ><img className="ffb-icon" src={fbIcon} alt="FB" /></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/chahal.lalit007" ><img className="fig-icon" src={igIcon} alt="IG" /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}
export default Footer;