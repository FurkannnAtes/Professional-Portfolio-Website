import React from 'react'

import "./Banner.css"

const Banner = () => {
    var Text = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    Text.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-words');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new Text(elements[i], JSON.parse(toRotate), period);
            }
        }
    };
    return (
        <div className='banner text-white ' >
            <div className="banner-content text-center text-md-start">
                <button className='banner-btn-header mb-3'>
                    Welcome to my Portfolio
                </button>
                <h1 className='animation_text'>Hi! I'm Furkan Ateş <span className="typewrite"
                    data-period="2000"
                    data-words='[" UI/UX Designer", " Frontend Devoloper"]'>
                </span> <span className='animation-text-enter'>I</span> </h1>
                <p className='banner-content-text '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid laboriosam quasi, voluptates facilis ducimus ipsum labore libero cupiditate tempore minus nesciunt laborum eligendi hic totam, fugit molestiae aut sint saepe.</p>
                <button className='banner-btn-footer btn text-white px-0'>Let's Connect <i className="bi bi-arrow-right-circle ms-md-2"></i></button>
            </div>
            <div className="banner-astronout d-none d-lg-block ">
                <img className='img-fluid' src="/images/astronout.png" alt="" />
            </div>
        </div>
    )
}

export default Banner
