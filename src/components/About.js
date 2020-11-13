import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
function About() {
    return (
        <>
                <h2>About Us</h2>
                <p>
                Virtual Reality Inc is a social enterprise committed to providing startups and newly stablished companies with a way to fund their VR projects.  We connect you with Funders from all over the globe who, like you, believe the Future is within virtual reach.
                </p>
                <p>
                As a <span>Fundraiser</span>, you can create projects and start fundraising to help your dreams come true.  Showcase yourself!  Tell the world about your vision... Make them excited about new technology.  The sky is virtually the limit!
                </p>
                <p>
                As a <span>Funder</span>, you are able to browse projects and see what's out there.  You can fund many projects, ensuring they are one step closer to completion.  Be the person that helps make these dreams a virtual reality!  Get in on the ground floow... The sky is the virtual limit!
                </p>
                <p>
                Virtual Reality Inc supports community building by promoting new ways to showcase your project. We are diverse pioneers that provide early access to technological resources for people of varying cultural, educational, and socioeconomic backgrounds. We strive to be inclusive as these bright minds come together and we help bring powerful high-quality products to the eXperimental realities landscape!
                </p>

                <h2>Our Team</h2>
                <div className="ourTeam">
                        <div className="member">
                                <img className="imgs" src="https://i.ibb.co/dWbrTJk/James.jpg" alt="James" border="0" />
                                <p>James Murphy <span>•</span> Unit 1</p>
                                </div>
                                <div className="member">
                                <img className="imgs" src="https://i.ibb.co/pxm00Rf/Johnny.jpg" alt="Johnny" border="0" />
                                <p>Johnny Murillo <span>•</span> Unit 1</p>
                        </div>
                        <div className="member">
                                <img className="imgs" src="https://i.ibb.co/0sQRLPm/John.jpg" alt="John" border="0" />
                                <p>John Chamberlain <span>•</span> Unit 2</p>
                                </div>
                                <div className="member">
                                <img className="imgs" src="https://i.ibb.co/FkrpGSM/Kenneth.jpg" alt="Kenneth" border="0" />
                                <p>Kenneth H <span>•</span> Unit 2</p>
                        </div>
                        <div className="member">
                                <img className="imgs" src="https://i.ibb.co/wytspj5/Fernando.jpg" alt="Fernando" border="0" />
                                <p>Fernando Chavez <span>•</span> Unit 3</p>
                        </div>
                        <div className="member">
                                <img className="imgs" src="https://i.ibb.co/nrn1zSK/Sam.jpg" alt="Sam" border="0" />   
                                <p>Sam Tarullo <span>•</span> Unit 4</p>
                                </div>
                                <div className="member">
                                <img className="imgs" src="https://i.ibb.co/F39CXT9/virginia.png" alt="virginia" border="0" />
                                <p>Virginia Scirrotto <span>•</span> Unit 4</p>
                        </div>
                </div>
        </>
    )
}

export default About;