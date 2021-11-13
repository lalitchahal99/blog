import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Carousel } from 'bootstrap';

import pic1 from '../../media/Photo/Manali/p1.jpg';
import pic2 from '../../media/Photo/Manali/p2.jpg';
import pic3 from '../../media/Photo/Manali/p3.jpg';
import pic4 from '../../media/Photo/Manali/p4.jpg';
import pic5 from '../../media/Photo/Manali/p5.jpg';
import pic6 from '../../media/Photo/Manali/p6.jpg';
import pic7 from '../../media/Photo/Manali/p7.jpg';
import pic8 from '../../media/Photo/Manali/p8.jpg';

import { UserContext } from "../Context";

const Home = () => {
    return (
        <>
            {/* code for navbar */}
            <Navbar />

            {/* code for home page */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval={false}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100" alt="Manali" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100" alt="Manali" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100" alt="Manali" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} className="d-block w-100" alt="Manali" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} className="d-block w-100" alt="Manali" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic6} className="d-block w-100" alt="Manali" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic7} className="d-block w-100" alt="Manali" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic8} className="d-block w-100" alt="Manali" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* code for cards */}

            <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
                <div className="col">
                    <div className="card">
                        <img src={pic1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lalit Chahal</h5>
                            {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={pic4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Solang Valley</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={pic3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mountain Top</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={pic7} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Solang River</h5>
                        </div>
                    </div>
                </div>
            </div>



            {/* code for footer */}
            <Footer />
        </>
    )
}

export default Home;