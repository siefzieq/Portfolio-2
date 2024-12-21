import React from 'react'
import { Carousel, Card, Container } from "react-bootstrap";
import './Education.css'

const Education = () => {
  return (
    <>
        <section className="edu-section pt-5 pb-4 mt-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 text-center">
                        <i className="fas fa-graduation-cap fa-lg pe-2 pb-3" style={{ fontSize: "40px" }}></i>
                        <h1 className="mb-4" style={{ fontSize: "3rem", fontWeight: "600" }}>
                        <b>Education</b>
                        </h1>
                            <Card 
                                className="mb-4 p-3 text-start h-100" 
                                style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', width: '100%'}}
                            >
                                <Card.Body>
                                    <img
                                        className="pb-2"
                                        src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Universiti_Tenaga_Nasional_Logo.png"
                                        width={'20%'}
                                        alt="UNITEN Logo"
                                />
                                    <Card.Title className="pb-2" style={{ fontSize: "2rem" }}>
                                        <b>Bachelor of Computer Science</b>
                                    </Card.Title>
                                    <Card.Subtitle className="pb-3 text-muted">
                                        Universiti Tenaga Nasional • 2021-2024
                                    </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "1rem" }}>
                                        <ul>
                                            <li>Completed Degree majoring in Software Engineering with First Class Honors.</li>
                                        </ul>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card 
                                    className="p-3 text-start mx-auto wider-card h-100" 
                                    style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', width: '100%' }}
                                >
                                    <Card.Body>
                                        <img
                                            className="pb-2"
                                            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Universiti_Tenaga_Nasional_Logo.png"
                                            width={'20%'}
                                            alt="UNITEN Logo"
                                        />
                                    <Card.Title className="pb-2" style={{ fontSize: "2rem" }}>
                                        <b>Foundation in Computer Science</b>
                                    </Card.Title>
                                    <Card.Subtitle className="pb-3 text-muted">
                                        Universiti Tenaga Nasional • 2020-2021
                                    </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "1rem" }}>
                                        <ul>
                                            <li>Completed Foundation Degree with CGPA of 4.00</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Education;