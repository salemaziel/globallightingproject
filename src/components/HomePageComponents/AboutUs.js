import React from 'react'

import LiveOneImage from '../../images/lives-one.png'
import LiveTwoImage from '../../images/lives-two.png'
import LiveThreeImage from '../../images/lives-three.png'

import '../../css/HomePageCss/aboutUs.css'

const AboutUs = () => (
    <section className="section-two">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 cx_left">
                    <div className="row">
                        <div className="col-6"><img src={LiveOneImage} alt="Live-one" className="img-fluid" /></div>
                        <div className="col-6"><img src={LiveTwoImage} alt="Live-two" className="img-fluid" /></div>
                        <div className="col-12"><img src={LiveThreeImage} alt="Live-three" className="img-fluid" /></div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 cx_right">
                    <h2>
                        ABOUT OUR COMPANY
                </h2>
                    <h3>
                        About Us<br /> Header
                </h3>
                    <p>
                        The advances in science and technology over the past couple of centuries have contributed significantly towards making our lives simple and comfortable. Electricity is one of these countless inventions, which has today become an integral part of our living. In fact, most of us fail to imagine life without this essential commodity. Therefore the fact that there are still millions of people, who still live a life completely devoid of this basic facility, often comes as a surprise. We at Global Lighting Project, work towards reducing the number of such people by providing lighting solution to them.
                </p>
                    <a href="/about">Read More</a>
                </div>
            </div>
        </div>
    </section>
)

export default AboutUs
