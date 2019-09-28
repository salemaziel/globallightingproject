import React from 'react'
import PinkDotsImage from '../../images/pink-dots.png'

import GlbImage from '../../images/glb.png'
import SolarImage from '../../images/soalr.png'
import LightsImage from '../../images/lightslight.png'
import StreetLightImage from '../../images/street-light.png'
import MicrolightImage from '../../images/microlight.png'
import ContainedSolarImage from '../../images/containedsolar.png'
// import ContainedSolarImage from '../../images/containedsolar.png'

import '../../css/HomePageCss/ourProducts.css'

const OurProducts = () => (
    <section className="section-three" style={{
        backgroundImage: `url(${PinkDotsImage})`,
    }}>
	<div className="container">
    	<div className="row">
        	<div className="col-lg-12">
            	<h2>
                	OUR products
                </h2>
                <h3>
                	The Technology That Makes it Possible
                </h3>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
        	<div className="col-lg-4 col-sm-6">
            	<div className="cx_product_box">
                	<img alt="glb-img" src={GlbImage} className="img-fluid" />
                    <div className="cx_bottom">
                    	<p>
                        	GL8 solar-flash light Lantern-SOS human body light
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
            	<div className="cx_product_box">
                	<img alt="glb-img" src={SolarImage} className="img-fluid" />
                    <div className="cx_bottom">
                    	<p>
                        	Self contained solar indoor-Outdoor Lighting
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
            	<div className="cx_product_box">
                	<img alt="glb-img" src={LightsImage} className="img-fluid" />
                    <div className="cx_bottom">
                    	<p>
                        	Self contained solar wall lightslight
                        </p>
                    </div>
                </div>
            </div>
        	<div className="col-lg-4 col-sm-6">
            	<div className="cx_product_box">
                	<img alt="glb-img" src={StreetLightImage} className="img-fluid" />
                    <div className="cx_bottom">
                    	<p>
                        	Self contained solar street lightslight
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
            	<div className="cx_product_box">
                	<img alt="glb-img" src={MicrolightImage} className="img-fluid" />
                    <div className="cx_bottom">
                    	<p>
                        	Solar MICROlite
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
            	<div className="cx_product_box">
                	<img alt="glb-img" src={ContainedSolarImage} className="img-fluid" />
                    <div className="cx_bottom">
                    	<p>
                        	Self contained solar lantern
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)

export default OurProducts
