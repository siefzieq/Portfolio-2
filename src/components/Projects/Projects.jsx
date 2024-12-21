import React from 'react';
import Badge from 'react-bootstrap/Badge';
import "./Projects.css";

const Projects= () => {
  return (
    <>
        <section class="pt-5 pb-4 mt-5">
            <div id= "project-section" class="project-section container">
                    <p class="text-dark">Projects</p>
                <hr></hr>
                <div className="project-container">
                    <div className="row align-items-center project-item">
                        <div className="col-8 pt-3 text-center">
                            <h1 className="display-1">ECOSEL</h1>
                        </div>
                        <div className="col-4">
                            <p className="fs-5 text-secondary fw-light">Final Year Project</p>
                            <p>
                                <Badge className="py-2 px-3 bg-transparent border border-dark text-dark fw-light" style={{ fontSize: "15px" }}>Laravel</Badge>&nbsp;
                                <Badge className="py-2 px-3 bg-transparent border border-dark text-dark fw-light" style={{ fontSize: "15px" }}>MySQL</Badge>&nbsp;
                                <Badge className="py-2 px-3 bg-transparent border border-dark text-dark fw-light" style={{ fontSize: "15px" }}>Bootstrap</Badge>&nbsp;
                            </p>
                        </div>
                        <div className="hover-overlay">
                            <button className="view-button" style={{ all: "unset", cursor: "pointer", color:"white" }}>
                                <a href="https://github.com/siefzieq/Ecomap-Selangor" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                    <i className="fas fa-arrow-right" style={{ transform: "rotate(-45deg)", fontSize: "40px" }}></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="project-container">
                    <div className="row align-items-center project-item">
                        <div class="col-8 pt-3 text-center">
                            <h1 class="display-1">GEMINI-CLONE</h1>
                        </div>
                        <div class="col-4">
                            <p class="fs-5 text-secondary fw-light">Personal Project</p>
                            <p>
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>React JS</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Gemini API</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Bootstrap</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Netlify</Badge>&nbsp;
                            </p>
                        </div>
                        <div className="hover-overlay">
                            <button className="view-button" style={{ all: "unset", cursor: "pointer", color:"white" }}>
                                <a href="https://gemini-clone-website1.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                    <i className="fas fa-arrow-right" style={{ transform: "rotate(-45deg)", fontSize: "40px" }}></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="project-container">
                    <div className="row align-items-center project-item">
                        <div class="col-8 pt-3 text-center">
                            <h1 class="display-1">DCM</h1>
                        </div>
                        <div class="col-4">
                            <p class="fs-5 text-secondary fw-light">Machine Learning Project</p>
                            <p>
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Python</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Numpy</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Pandas</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Jupyter</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Matplotlib</Badge>&nbsp;
                            </p>
                        </div>
                        <div className="hover-overlay">
                            <button className="view-button" style={{ all: "unset", cursor: "pointer", color:"white" }}>
                                <a href="https://github.com/siefzieq/Denver-Crime-Model" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                    <i className="fas fa-arrow-right" style={{ transform: "rotate(-45deg)", fontSize: "40px" }}></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="project-container">
                    <div class="row align-items-center project-item">
                        <div class="col-8 pt-3 text-center">
                            <h1 class="display-1">UIMS</h1>
                        </div>
                        <div class="col-4">
                            <p class="fs-5 text-secondary fw-light">Web Programming Project</p>
                            <p>
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Laravel</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Bootstrap</Badge>&nbsp;
                                <Badge className='mt-2 py-2 px-3 bg-transparent border border-dark text-dark fw-light' style={{ fontSize: "15px" }}>Javascript</Badge>&nbsp;
                            </p>
                        </div>
                        <div className="hover-overlay">
                            <button className="view-button" style={{ all: "unset", cursor: "pointer", color:"white" }}>
                                <a href="https://github.com/siefzieq/ITMS-Management-System" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                    <i className="fas fa-arrow-right" style={{ transform: "rotate(-45deg)", fontSize: "40px" }}></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            <hr></hr>
            </div>
        </section>
    </>
  )
}

export default Projects;