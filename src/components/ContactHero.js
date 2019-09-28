import React from 'react'
import ContactHeroBanner from '../images/aboutbanner.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import '../css/contactHero.css'

const ContactHero = () => (
    <section className="section-contact" style={{
        backgroundImage: `url(${ContactHeroBanner})`,
    }}>
        <div className="container cx_inner">
            <div className="row">
                <div className="col-lg-3">
                </div>
                <div class="col-lg-6">
                    <h1>
                        Get in touch
                    </h1>
                </div>
                <div class="col-lg-4">
                </div>
            </div>
        </div>
    </section>
)

export default ContactHero
