import React from 'react';
import NewsLetter from '../components/HomePageComponents/NewsLetter';
import Donations from '../components/Donations';
/*import BannerImage from '../images/banner.png';*/
import Layout from '../components/layout';

//import '../css/donate.css';

const DonatePage = () => (
        <Layout>
               <Donations />
            <NewsLetter />
        </Layout>   
)

export default DonatePage
