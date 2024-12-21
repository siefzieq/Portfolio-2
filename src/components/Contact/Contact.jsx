import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <>
        <section id= "contact-section" className="contact-section mb-5 pt-5">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6" style={{ borderTopRightRadius: "25px", borderBottomRightRadius: "25px",backgroundImage: "url('https://i.pinimg.com/736x/d8/29/84/d829847021ec1663804b1edc552dc336.jpg')", backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)" }}>
                        <h1 className="mt-4 text-center" style={{ fontSize: "3rem", fontWeight: "600",color:"white" }}>
                            <b>Contact Info</b>
                        </h1>
                        <p className='text-center mb-4' style={{color:'white'}}>Let's Build Something Together</p>
                        </div>

                        <div className="col-lg-6 ">
                        <div className="d-flex justify-content-center gap-4 pt-4">
                        {/* WhatsApp Icon */}
                        <a
                        href="https://wa.me/601155021303"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-container"
                        >
                        <i className="fab fa-whatsapp icon"></i>
                        </a>
                        {/* Email Icon */}
                        <a
                            href="mailto:muhdhasifzikry02@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-container"
                        >
                            <i className="fas fa-envelope icon"></i>
                        </a>

                        {/* LinkedIn Icon */}
                        <a
                            href="https://www.linkedin.com/in/muhammad-hasif-zikry-mohd-ridzwan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-container"
                        >
                            <i className="fab fa-linkedin-in icon"></i>
                        </a>

                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/siefzieq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-container"
                        >
                            <i className="fab fa-github icon"></i>
                        </a>
                        </div>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="text-center">
                        <p className="mt-5" style={{paddingTop:'20px'}}>&copy; {new Date().getFullYear()} Hasif Zikry. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Contact;