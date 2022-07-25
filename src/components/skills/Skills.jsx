import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Skills.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Skills = () => {
    return (
        <section id='skills' className='skills-wrapper '>
            <div className="skills-container p-5">
                <h1 className='text-center text-white'>Skills</h1>
                <h6 className='skills-subTitle text-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum, illo qui alias quisquam quia!</h6>
                <Carousel responsive={responsive}>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Web Developent
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Frontend Devoloper
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        React.js
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Javascript
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Bootstrap
                    </div>



                </Carousel>
            </div>
        </section>
    )
}

export default Skills
