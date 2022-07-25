import React from 'react'

import "./Footer.css"

const Footer = () => {
    return (
        <section id='footer' className='d-flex justify-content-between align-items-center px-md-5'>
            <div className="footer-brand">Ofenos</div>
            <div className="footer-social-media d-flex">
                <div className="footer-item">
                    <a href="https://www.instagram.com/furkan_ates_rv/">   <i className="bi bi-instagram"></i></a>
                </div>
                <div className="footer-item">
                    <a href="https://twitter.com/Ofenos_lol">  <i className="bi bi-twitter"></i></a>
                </div>
                <div className="footer-item">
                    <a href="https://github.com/FurkannnAtes">   <i className="bi bi-github"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Footer
