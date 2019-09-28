import React from 'react'

import YellowDotsImage from '../../images/yellow-dots.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import '../../css/HomePageCss/actionComponent.css'

const ActionComponent = () => (
    <section
        className="section-four"
        style={{
            backgroundImage: `url(${YellowDotsImage})`,
        }}
    >
	<div className="container">
    	<div className="row">
        	<div className="col-md-7">
            	<div className="cx_left">
                	<h2>
                    	One Action Can <br />Make a World of Difference.
                    </h2>
                </div>
            </div>
            <div className="col-md-5">
            	<div className="cx_right">
                	<div className="row">
                    	<div className="col-lg-6">
                        	<a href="#" className="involve">
                                Donate now
                                <span style={{
                                        position:'absolute',
                                        right:'15px',
                                        lineHeight:'50px'
                                    }}>
                                <FontAwesomeIcon
                                    icon={faAngleRight}

                                />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
)

export default ActionComponent
