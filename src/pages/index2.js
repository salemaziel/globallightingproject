import React from 'react'
import Layout from '../components/layout'

import Hero from '../components/HomePageComponents/Hero'
import AboutUs from '../components/HomePageComponents/AboutUs'
import OurProducts from '../components/HomePageComponents/OurProducts'
import ActionComponent from '../components/HomePageComponents/ActionComponent'
import WhatWeDo from '../components/HomePageComponents/WhatWeDo'
import NewFromBlog from '../components/HomePageComponents/NewFromBlog'
import OurWork from '../components/HomePageComponents/OurWork'
import NewsLetter from '../components/HomePageComponents/NewsLetter'


const Index2 = () => (
<div>    
    <Layout>
        <Hero />
        <AboutUs />
        <NewsLetter />
    </Layout>
</div>  
)

export default Index2