import React, { useEffect, useContext } from "react";
import { HomeBtn, ContactBtn } from "../Context";

const Navbar = () => {
    const utilityFunction = () => {
        document.querySelector('.containerNavBtn').addEventListener('click', () => {
            document.querySelector('.containerNavBtn').classList.toggle('change');
        })
    }
    useEffect(() => {
        utilityFunction()
    }, [])

    const [home, setHome] = useContext(HomeBtn);
    const [contact, setContact] = useContext(ContactBtn);

    const fetchTab = (e) => {
        if (e === 'home') {
            setHome(true)
            setContact(false)
        }
        else if (e === 'about') {
            // setHome(false)
            // setContact(false)
        }
        else if (e === 'contact') {
            setHome(false)
            setContact(true)
        }
        else if (e === 'gallery') {
            // setHome(false)
            // setContact(false)
        }
        document.querySelector('.navbar-collapse').classList.remove('show');
        document.querySelector('.containerNavBtn').classList.remove('change');
    }
    return (
        <>
            <nav id="my-navbar" className="navbar navbar-expand-sm navbar-dark fixed-top">
                <div className="container-fluid navbar-background nav-bg-1">
                    <a className="navbar-brand txt-1">Lalit Chahal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="">
                            <div className="containerNavBtn container">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav w-100 justify-content-around">
                            <li className="nav-item">
                                <a className="nav-link txt-1" aria-current="page" href="#" onClick={() => { fetchTab('home'); }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1" href="#" onClick={() => { fetchTab('about'); }}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1" href="#" onClick={() => { fetchTab('contact'); }}>Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1" href="#" onClick={() => { fetchTab('gallery'); }}>Gallery</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;