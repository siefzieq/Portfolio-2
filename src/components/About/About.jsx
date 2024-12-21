import React from 'react';
import Education from '../Education/Education.jsx';
import Experience from '../Experience/Experience.jsx';
import {assets} from "../../assets/assets.js";
import Badge from 'react-bootstrap/Badge';


const About = () => {
    return(
        <>
            <section id= "about-section" className="about-section mb-5">
                <div className="container pt-5 mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 pt-5">
                            <p className="mb-2 mx-2" style={{ fontSize: "25px", fontWeight: "350" }}>Hello, I am</p>
                            <h1 className="mb-4 mx-1" style={{ fontSize: "70px", fontWeight: "600" }}><b>Hasif Zikry</b></h1>
                            <p className="mb-4 mx-3" style={{ fontSize: "20px", fontWeight: "400" }}>
                                <b>Junior Software Developer</b> with a passion for problem-solving and creating innovative solutions.
                                Eager to <b>learn</b>, <b>collaborate</b>, and <b>grow</b> in the world of technology.

                            </p>
                            <p className="mx-3" style={{ fontSize: "18px" }}>
                                <Badge className='py-2 px-3' style={{ fontSize: "15px" }} bg="dark">Coding</Badge> + <Badge className='py-2 px-3' style={{ fontSize: "15px" }} bg="dark">Coffee</Badge> + <Badge className='py-2 px-3' style={{ fontSize: "15px" }} bg="dark">Enhypen Playlist</Badge>
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src={assets.favicon}
                                alt="About Me"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Education />
                        </div>
                        <div className="col-lg-6 bg-dark" style={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px",backgroundImage: "url('https://i.pinimg.com/736x/65/55/ec/6555ec497af29ade2c3e6585501c273b.jpg')", backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)" }}>
                            <Experience />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;