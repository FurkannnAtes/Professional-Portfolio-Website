import React from 'react'

import "./Contact.css"

const Contact = () => {
    return (
        <section className='position-relative' id='contact'>
            <img className='position-absolute d-none d-xl-block ' src="/images/contact-img.svg" alt="" />
            <form className='form-contact'>
                <h1>Get In Touch</h1>
                <div className='mb-2'><input type="text" placeholder='First Name' /> <input type="text" placeholder='Last Name' /></div>
                <div className='mb-2'><input type="text" placeholder='Email adress' /> <input type="text" placeholder='Phone No' /></div>
                <div className=''><textarea placeholder='Message' rows="30" cols="50" type="text" /></div>
                <button className='btn btn-lg btn-light mt-3' type='submit' >Send</button>
            </form>
        </section>
    )
}

export default Contact
