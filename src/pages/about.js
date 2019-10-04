import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";


import About2 from '../components/About2';
import WhatWeDo from '../components/HomePageComponents/WhatWeDo';
import NewsLetter from '../components/HomePageComponents/NewsLetter';
import '../css/main.css';


const AboutPage = () => (
    <div>
     <Layout>
       <About2 />
       <WhatWeDo />
       <NewsLetter />
     </Layout>
     </div> 
   )
   
   export default AboutPage