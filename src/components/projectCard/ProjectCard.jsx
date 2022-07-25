import React from 'react'

import "./ProjectCard.css"

const ProjectCard = ({ imgUrl, title, description }) => {

    return (
        <div >
            <div className="projectCard ">
                <img className='w-100' src={imgUrl} alt="" />
                <div className="projectCard-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard
