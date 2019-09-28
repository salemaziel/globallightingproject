import React from 'react'

import FooterLogo from '../images/footer-logo.png'
import CallLogo from '../images/call.png'
import EnvelopLogo from '../images/envelope.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import '../css/footer.css'

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="cx_box_one">
                        <a href="#"><img alt="footer-" src={FooterLogo} className="img-fluid" /></a>
                        <h2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </h2>
                        <p>FOLLOW US</p>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cx_box_two">
                        <h2>Services</h2>
                        <ul>
                            <li><a href="#">GL8 solar-flash light Lantern-SOS </a></li>
                            <li><a href="#">Self contained solar indoor-Outdoor </a></li>
                            <li><a href="#">Self contained solar wall </a></li>
                            <li><a href="#">Self contained solar street </a></li>
                            <li><a href="#">Solar MICROlite</a></li>
                            <li><a href="#">Self contained solar lantern</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="cx_box_two">
                        <h2>Userful & Helpful Links</h2>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Our History</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Volunteer</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Site map</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cx_box_three">
                        <h2>Contact Detail</h2>
                        <p>
                            Global Lighting Project.<br />
                            San Diego, CA
                    </p>
                        <ul>
                            <li><a href="tel:001 760 489 8067"><img alt="footer-" src={CallLogo} className="img-fluid" /> +1 760 489 8067</a></li>
                            <li><a href="mailto:jack@globallightingproject.com"><img alt="footer-" src={EnvelopLogo} className="img-fluid" /> <span>jack@globallightingproject.com</span></a></li>
                        </ul>
                        <a href="#" className="involve">
                            get involved
                            <span style={{
                                position: 'absolute',
                                right: '15px',
                                lineHeight: '50px'
                            }}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12"><p className="copy-right">All rights reserved copyright 2019 </p></div>
            </div>
        </div>
    </footer>
)

export default Footer
