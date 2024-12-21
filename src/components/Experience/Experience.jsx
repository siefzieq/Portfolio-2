import React from 'react'
import { Carousel, Card, Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

const Experience = () => {
  return (
    <>
        <section className="pt-4 pb-4 mt-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 text-center">
                    <i className="fas fa-briefcase pb-3 pe-2" style={{color:'white', fontSize:"40px"}}></i>
                    <h1 className="mb-4" style={{ fontSize: "3rem", fontWeight: "500" }}>
                    <b style={{color:'white'}}>Experience</b>
                    </h1>
                    <Carousel indicators={true} controls={true} interval={3000}>
                    {/* First Card Item */}
                    <Carousel.Item>
                        <Card className="mb-3 p-3 text-start mx-auto wider-card" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', width: '100%'  }}>
                        <Card.Body>
                            <img
                            className="pt-2 pb-4"
                            src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/14865248-fermion-logo-1180x207.png"
                            width={'20%'}
                            alt="Fermion Merimen Logo"
                            />
                            <Card.Title className="pb-2" style={{ fontSize: "2rem" }}>
                            <b>Junior Software Developer</b>
                            </Card.Title>
                            <Card.Subtitle className="pb-3 text-muted">
                            Fermion Merimen • Nov 2024 - Present
                            </Card.Subtitle>
                            <Card.Text style={{ fontSize: "1rem" }}>
                            <ul>
                                <li className="pb-2">
                                Received intensive training in Adobe ColdFusion to familiarize with the company’s framework and development processes.
                                </li>
                                <li className="pb-2">
                                Engaged in learning sessions and practice projects to build a solid foundation for upcoming software development tasks.
                                </li>
                                <li className="pb-2">
                                Preparing to contribute to mini projects aimed at supporting the company’s operations.
                                </li>
                            </ul>
                            </Card.Text>
                            <Card.Text className="pt-2" style={{ fontSize: "1rem" }}>
                            <Badge className="mt-1 py-2 px-3" style={{ fontSize: "15px" }} bg="dark">Coldfusion</Badge>&nbsp;
                            <Badge className="mt-1 py-2 px-3" style={{ fontSize: "15px" }} bg="dark">SQL Server</Badge>&nbsp;
                            <Badge className="mt-1 py-2 px-3" style={{ fontSize: "15px" }} bg="dark">Bootstrap</Badge>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Carousel.Item>

                    {/* Second Card Item */}
                    <Carousel.Item>
                        <Card className="p-3 text-start wider-card" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', width: '100%'  }}>
                        <Card.Body>
                            <img
                            className="pb-2"
                            style={{ marginLeft: '-5%' }}
                            src="https://www.petronas.com/pgb/sites/default/files/media/PETRONAS%20Logo.jpg"
                            width={'30%'}
                            alt="Petronas Logo"
                            />
                            <Card.Title className="pb-2" style={{ fontSize: "2rem" }}>
                            <b>Software Engineer Intern</b>
                            </Card.Title>
                            <Card.Subtitle className="pb-3 text-muted">
                            Petronas Digital Sdn Bhd • Jul 2023 - Sept 2023
                            </Card.Subtitle>
                            <Card.Text style={{ fontSize: "1rem" }}>
                            <ul>
                                <li className="pb-2">
                                Developed a Microsoft PowerApps booking system, automating 80% of manual processes across PETRONAS Departments.
                                </li>
                                <li className="pb-2">
                                Designed two user interface drafts, getting feedback from supervisor for a user-centered approach.
                                </li>
                                <li>
                                Led user testing session with over 10 participants, gathering feedback for system’s enhancement.
                                </li>
                            </ul>
                            </Card.Text>
                            <Card.Text className="pt-2" style={{ fontSize: "1rem" }}>
                            <Badge className="mt-1 py-2 px-3" style={{ fontSize: "15px" }} bg="dark">Power Apps</Badge>&nbsp;
                            <Badge className="mt-1 py-2 px-3" style={{ fontSize: "15px" }} bg="dark">Power Automate</Badge>&nbsp;
                            <Badge className="mt-1 py-2 px-3" style={{ fontSize: "15px" }} bg="dark">Sharepoint</Badge>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Carousel.Item>
                    </Carousel>
                </div>
                </div>
            </div>
        </section>  
    </>
  )
}

export default Experience;