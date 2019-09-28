import React from 'react'

import WhatWeDoImage from '../../images/what-we-do.jpg'
import IconOne from '../../images/icon-one.jpg'
import IconTwo from '../../images/icon-two.jpg'
import IconThree from '../../images/icon-three.jpg'
import IconFour from '../../images/work-four.png'

import '../../css/HomePageCss/whatWeDo.css'

const WhatWeDo = () => (
    <section className="section-five">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="cx_left"><img alt="what-we" src={WhatWeDoImage} className="img-fluid" /></div>
                </div>
                <div className="col-md-6">
                    <div className="cx_right">
                        <h2>OUR Mission</h2>
                        <h3>What We Do</h3>
                        <div className="cx_list">
                            <div className="cx_icon"><img alt="what-we" src={IconOne} className="img-fluid" /></div>
                            <h4>title Here</h4>
                            <p>
                                Lorem Ipesum  Lorem Ipesum Lorem Ipesum Lorem Ipesum
                                Lorem Ipesum  Lorem
                        </p>
                        </div>
                        <div className="cx_list">
                            <div className="cx_icon"><img alt="what-we" src={IconTwo} className="img-fluid" /></div>
                            <h4>title Here</h4>
                            <p>
                                Lorem Ipesum  Lorem Ipesum Lorem Ipesum Lorem Ipesum
                                Lorem Ipesum  Lorem
                        </p>
                        </div>
                        <div className="cx_list">
                            <div className="cx_icon"><img alt="what-we" src={IconThree} className="img-fluid" /></div>
                            <h4>title Here</h4>
                            <p>
                                Lorem Ipesum  Lorem Ipesum Lorem Ipesum Lorem Ipesum
                                Lorem Ipesum  Lorem
                        </p>
                        </div>
                        <div className="cx_list">
                            <div className="cx_icon"><img alt="what-we" src={IconFour} className="img-fluid" /></div>
                            <h4>title Here</h4>
                            <p>
                                Lorem Ipesum  Lorem Ipesum Lorem Ipesum Lorem Ipesum
                                Lorem Ipesum  Lorem
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)

export default WhatWeDo
