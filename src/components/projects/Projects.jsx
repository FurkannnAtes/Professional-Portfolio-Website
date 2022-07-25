import React from 'react'
import ProjectCard from '../projectCard/ProjectCard'

import "./Projects.css"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "/images/project-img3.png",
        },
        {
            id: 2,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "/images/project-img2.png",
        },
        {
            id: 3,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "/images/project-img1.png",
        },
        {
            id: 4,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "/images/project-img1.png",
        },
        {
            id: 5,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "/images/project-img2.png",
        },
        {
            id: 6,
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "/images/project-img3.png",
        },
    ];
    return (
        <section id='projects-container' className='py-3' >
            <h1 className='text-white text-center mb-3 mt-3'>Projects</h1>
            <p className='text-center text-secondary w-75 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, cupiditate! Molestiae placeat architecto nihil obcaecati illum minima incidunt dolores? Officia consectetur optio non totam cum eos soluta ipsa et quod.</p>
            <ul className="nav nav-pills  justify-content-center   my-5 ">
                <li className="nav-item  ">
                    <button id='Tproject' className="nav-link  w-100 active" aria-current="page" data-bs-toggle="tab" data-bs-target="#project-container" >Project</button>
                </li>
                <li className="nav-item">
                    <button id='Ttext1' className="nav-link  w-100 " aria-current="page" data-bs-toggle="tab" data-bs-target="#text1" >Text-1</button>
                </li>
                <li className="nav-item">
                    <button id='Ttext2' className="nav-link  w-100  " aria-current="page" data-bs-toggle="tab" data-bs-target="#text2" >Text-2</button>
                </li>

            </ul>
            <div className="tab-content">
                <div id='project-container' className="tab-pane fade show active">
                    <div className="row p-lg-5 gy-5">
                        {projects.map((item) => (
                            <div className='col-md-6 col-lg-4' key={item.id}>
                                <ProjectCard

                                    title={item.title}
                                    description={item.description}
                                    imgUrl={item.imgUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div id='text1' className="tab-pane fade  text-center text-white py-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
                </div>
                <div id='text2' className="tab-pane fade  text-center text-white py-5 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque porro quasi dolorum facere tempore maxime nemo quia nulla blanditiis doloribus, dolore, voluptas aspernatur harum facilis cumque magni soluta sapiente.
                </div>
            </div>
        </section>
    )
}

export default Projects
