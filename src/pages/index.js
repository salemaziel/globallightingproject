import React from "react"
import Layout from "../components/layout"

import Hero from '../components/HomePageComponents/Hero'
import AboutUs from '../components/HomePageComponents/AboutUs'
import OurProducts from '../components/HomePageComponents/OurProducts'
import ActionComponent from '../components/HomePageComponents/ActionComponent'
import WhatWeDo from '../components/HomePageComponents/WhatWeDo'
import NewFromBlog from '../components/HomePageComponents/NewFromBlog'
import OurWork from '../components/HomePageComponents/OurWork'
import NewsLetter from '../components/HomePageComponents/NewsLetter'

const IndexPage = () => (
 <div>
  <Layout>
    <Hero />
    <AboutUs />
    <OurProducts />
    <ActionComponent />
    <WhatWeDo />
    <NewFromBlog />
    <OurWork />
    <NewsLetter />
  </Layout>
  </div> 
)

export default IndexPage
