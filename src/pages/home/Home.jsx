import React from 'react'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'

import "./Home.css"

const Home = () => {
    return (
        <div id='home' className='home-wrapper'>
            <Navbar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
