import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Contact from "../contact/Contact";

// import { Carousel } from 'bootstrap';
import { HomeBtn, ContactBtn } from "../Context";

const Home = () => {
    const [contact, setContact] = useState(false);
    const [home, setHome] = useState(true);
    return (
        <>
            <HomeBtn.Provider value={[home, setHome]} >
                <ContactBtn.Provider value={[contact, setContact]} >
                    {/* code for navbar */}
                    <Navbar />

                    <Dashboard />

                    <Contact />

                    {/* code for footer */}
                    <Footer />
                </ContactBtn.Provider>
            </HomeBtn.Provider>
        </>
    )
}

export default Home;