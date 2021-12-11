import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { bg1 } from './bg';
import Title from "./Title";

import { Carousel } from 'bootstrap';
import { UserContext } from "../Context";

import pic1 from '../../media/Photo/Manali/p1.jpg';
import pic2 from '../../media/Photo/Manali/p2.jpg';
import pic3 from '../../media/Photo/Manali/p3.jpg';
import pic4 from '../../media/Photo/Manali/p4.jpg';
import pic5 from '../../media/Photo/Manali/p5.jpg';
import pic6 from '../../media/Photo/Manali/p6.jpg';
import pic7 from '../../media/Photo/Manali/p7.jpg';
import pic8 from '../../media/Photo/Manali/p8.jpg';

const Home = () => {
    return (
        <>
            {/* code for navbar */}
            <Navbar />

            <div className="bg-dark h-75 w-100 position-relative">
                {bg1}
            </div>

            <Title />

            {/* code for footer */}
            <Footer />
        </>
    )
}

export default Home;