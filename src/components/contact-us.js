import React from 'react'
import styled from 'styled-components'
//import { navigate } from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '../css/main.scss'
import '../css/main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const MainWrapper = styled.div`
  margin: 0;
`;

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = event => {
        //TODO testing for REPLACEMENT search Joplin for setState
        /* REPLACEMENT
          const handleChange = e => {
            setState({ ...state, [e.target.name]: e.target.value })
        }  
        */
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleCheckboxChange = event => {
        const { name } = event.target
        this.setState({ [name]: !this.state[name] })
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        console.log('fullname', this.state.fullname)
        this.setState({ 'firstname': this.state.fullname },
            () => {
                const formFields = this.state
                fetch('/.netlify/functions/mauticSubmission', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/html; charset=utf-8' },
                    body: JSON.stringify({
                        'form-name': form.getAttribute('name'),
                        formFields,
                    }),
                })
//                    .then(() => navigate(form.getAttribute('action')))
                    .catch((error) => alert(error))
            }
        )
    }

    render() {
        return (
            <div>
                <section className="section-contact">
                    <div className="container cx_inner">
                        <div className="row">
                            <div className="col-12">
                                <h1>Get in touch</h1>
                                <p className="p">Fill out the form below and a Global Lighting Project representative will contact you as soon as possible.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container py-5">
                        <div className="row pb-5 mb-5">
                            <div className="col-12 col-md-8">
                                <p className="chip mb-4 mb-md-3">REQUEST YOU TO FILL THE FORM</p>
                                {/* Form */}
                                <form name='contact' onSubmit={this.handleSubmit} className="contact__form" action="#" >
                                    <div className="row mt-5 mb-4">
                                        <div className="col-12 col-md-6">
                                            <input type="text" a id='fullname' name='fullname' placeholder="Your Name" onChange={this.handleChange} required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="email" id='email' name='email' placeholder="Your Email" onChange={this.handleChange} required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="tel" id='phone' name='phone' placeholder="Your Phone" onChange={this.handleChange} required />
                                        </div>
                                        <div className="col-12 mb-4 pb-2">
                                            <p className="u-weight-bld mb-4"></p>
                                            <div className="row">
                                                <div className="col-4">
                                                </div>
                                                <div className="col-4">
                                                </div>
                                                <div className="col-4">
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <textarea name='message' placeholder="Your Message" onChange={this.handleChange}></textarea>
                                        </div>
                                    
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" className="btn s d-inline-block">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                            <div className="col-12 col-md-4 mb-5 mb-md-0 mt-5 mt-md-0">
                                <aside className="contact__aside pb-md-5">
                                    <div className="contact__aside-intro">
                                        <p className="p--xhg u-font-titles">Nonprofit Office Contact Info. How we can help you?</p>
                                    </div>
                                    <h2 className="h2--lg u-weight-bld u-color-black"><a href="tel:#">760-555-5555</a></h2>
                                    <div className="contact__info my-5">
                                        <div className="contact__info-group">
                                            <p className="u-lh-sm"><i className="fas fa-fw fa-envelope u-color-primary-lgt"></i></p>
                                            <div className="contact__info-group-main">
                                                <p className="mb-2">Email</p>
                                                <p className="mb-2"><a href="mailto:jack@globallightingproject.com">jack@globallightingproject.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="u-weight-smb mb-4">Follow Us</h4>
                                    <div className="contact__social mb-md-5">
                                        <a href="https://twitter.com/code_staff">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/code-staff">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                        <a href="https://www.facebook.com/codestaff">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

