import React from 'react'

import "./Navbar.css"
const Navbar = () => {
    /*Scroll navbar  backgraund*/
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("mainNavContainer").style.backgroundColor = "#000";

        } else {
            document.getElementById("mainNavContainer").style.backgroundColor = "rgba(0, 0, 0, 0)";

        }
    }
    /* Mobile nav  click link close */

    /* Mobile nav click link close */

    const closeCanvas = () => {
        if (window.innerWidth < 992) {
            document.querySelector('[data-bs-toggle="collapse"]').click();
        }
    };

    return (
        <nav id='mainNavContainer' className="navbar navbar-expand-lg navbar-dark position-fixed top-0 start-0 w-100  px-lg-5">

            <div className="container-fluid ">
                <a onClick={() => closeCanvas()} className="navbar-brand text-white" href="#home">Ofenos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 d-lg-flex align-items-lg-center ms-lg-auto">
                        <li className="nav-item">
                            <a onClick={() => closeCanvas()} className="nav-link text-white active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => closeCanvas()} className="nav-link text-white" href="#skills">Skills</a>
                        </li>

                        <li className="nav-item">
                            <a onClick={() => closeCanvas()} className="nav-link text-white" href="#projects-container" >Projects</a>
                        </li>
                        <li className="nav-item d-flex">
                            <a onClick={() => closeCanvas()} className="nav-link social text-white  " href="https://twitter.com/Ofenos_lol" ><i className="bi bi-twitter"></i></a>
                            <a onClick={() => closeCanvas()} className="nav-link social text-white" href="https://www.instagram.com/furkan_ates_rv/" ><i className="bi bi-instagram"></i></a>
                            <a onClick={() => closeCanvas()} className="nav-link social text-white" href="https://github.com/FurkannnAtes" ><i className="bi bi-github"></i></a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => closeCanvas()} className="nav-link start-btn  text-white hover-none btn btn-lg btn-outline-light " href="/" >Let's Connect</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
