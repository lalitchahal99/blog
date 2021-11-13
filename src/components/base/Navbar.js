import React, { useState } from "react";
import Contact from "../contact/Contact";

const Navbar = () => {
    const utilityFunction = () => {

    }
    useState(() => {
        utilityFunction()
    }, [])
    return (
        <>
            <nav id="my-navbar" className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand"><b>Lalit Chahal</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Places
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Manali</a></li>
                                    <li><a className="dropdown-item" href="#">Shimla</a></li>
                                    <li><a className="dropdown-item" href="#">Churdhar</a></li>
                                    <li><a className="dropdown-item" href="#">Kufri</a></li>
                                    <li><a className="dropdown-item" href="#">Amritsar</a></li>
                                    <li><a className="dropdown-item" href="#">Others</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;