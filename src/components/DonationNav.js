import React from 'react';

import Logo from '../images/logo.png';
import '../css/main.css';
import '../css/donate.css';


const DonationNav = () => (
    <section class="emptynav">
        <div class="cx_top_bar">
	        <div class="container">
    	        <div class="row">
                    <div class="col-md-9">
                        <div class="cx_contact"></div>
                    </div>
                </div>
            </div>
        </div>    
                <div class="row cx_row_reverse">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class="logo-site">
                            <div class="inner"> <a href="index.html"><img src={Logo} class="img-fluid" alt="" /></a></div>
                        </div>
                    </div>    
                    <div class="col-lg-4>"></div>    
                </div>
    </section>
)

export default DonationNav