import React from "react";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    // const [isVisible, setIsVisible] = useState(false);

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // useEffect(() => {
    //     // Button is displayed after scrolling for 500 pixels
    //     const toggleVisibility = () => {
    //         if (window.pageYOffset > 500) {
    //             setIsVisible(true);
    //         } else {
    //             setIsVisible(false);
    //         }
    //     };

    //     window.addEventListener("scroll", toggleVisibility);

    //     return () => window.removeEventListener("scroll", toggleVisibility);
    // }, []);

    return (
        <>
            <div id="my-footer" className="container mx-0 my-0 px-0 py-0 fixed-bottom">
                {/* <div className="scroll-to-top">
                    {isVisible && (
                        <div onClick={handleGoTop}>
                            <FontAwesomeIcon icon={faChevronCircleUp} size={'2x'} />
                        </div>
                    )}
                </div> */}
                <hr className="my-0" style={{width: '200%'}} />
                <footer className="d-flex flex-wrap justify-content-center align-items-center py-2">
                    <div className="col-md-4 d-flex align-items-center">
                        <a onClick={handleGoTop} className="ftxt-home mx-2 text-muted text-decoration-none lh-1">
                            Home
                        </a>
                        <span className="ftxt-company text-muted">© by Lalit Chahal</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" rel="noreferrer" target='_blank' href={"https://www.facebook.com/chahal.lalit007"} ><img className="ffb-icon" src={"https://firebasestorage.googleapis.com/v0/b/lalit-blog99.appspot.com/o/Icons%2Ffacebook.06425ee2.svg?alt=media&token=5574ef76-af27-4c62-ac94-6b0d82451794"} alt="FB" /></a></li>
                        <li className="ms-3"><a className="text-muted" rel="noreferrer" target='_blank' href={"https://www.instagram.com/chahal.lalit007"} ><img className="fig-icon" src={"https://firebasestorage.googleapis.com/v0/b/lalit-blog99.appspot.com/o/Icons%2Finstagram.f4f05188.svg?alt=media&token=6ca41ba5-94cf-472e-831b-7112290d8738"} alt="IG" /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}
export default Footer;