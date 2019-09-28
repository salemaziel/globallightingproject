import React from 'react'

import WhatWeDoImage from '../../images/what-we-do.jpg'

import '../../css/HomePageCss/newFromBlog.css'

const NewFromBlog = () => (
    <section>
        <section className="section-six">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>
                            RECENT NEWS
                        </h2>
                        <h3>
                            New From Blog
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

            </div>
        </section>
        <section className="section-post-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="cx_post_box">
                            <div className="cx_post_image">
                                <img src={WhatWeDoImage} alt="what-we-do" className="img-fluid" />
                                <div className="cx_date">MAY<br />29</div>
                            </div>
                            <div className="cx_post_text">
                                <h2>Blog Title Here</h2>
                                <div className="cx_name">
                                    <div className="cx_image"><img alt="what-we-do" src={WhatWeDoImage} className="img-fluid" /></div>
                                    Admin &nbsp; <span className="cx_tag">Tag: Creative, Environment </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <a href="#">Read More <span className="fa fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="cx_post_box">
                            <div className="cx_post_image">
                                <img src={WhatWeDoImage} alt="what-we-do" className="img-fluid" />
                                <div className="cx_date">MAY<br />29</div>
                            </div>
                            <div className="cx_post_text">
                                <h2>Blog Title Here</h2>
                                <div className="cx_name">
                                    <div className="cx_image"><img alt="what-we-do" src={WhatWeDoImage} className="img-fluid" /></div>
                                    Admin &nbsp; <span className="cx_tag">Tag: Creative, Environment </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <a href="#">Read More <span className="fa fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="cx_post_box">
                            <div className="cx_post_image">
                                <img src={WhatWeDoImage} alt="what-we-do" className="img-fluid" />
                                <div className="cx_date">MAY<br />29</div>
                            </div>
                            <div className="cx_post_text">
                                <h2>Blog Title Here</h2>
                                <div className="cx_name">
                                    <div className="cx_image"><img alt="what-we-do" src={WhatWeDoImage} className="img-fluid" /></div>
                                    Admin &nbsp; <span className="cx_tag">Tag: Creative, Environment </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <a href="#">Read More <span className="fa fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
)

export default NewFromBlog
