import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
//import Button from '../components/button'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const Question = () => (
  <p>Can i do this? </p>
)

const Button2 = styled.a`
  color:#FFF;
  background:#000;
  text-align:center;
  padding:20px;
  display: block;
  margin: 0.5em 0;
  font-family:Montserrat;
  &:hover {
    text-decoration:none;
    color: orange;
  }
`

const Excerpt = styled.p`
  margin: 0;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1> Hi from the second page </h1>
    <p>Welcome to page 2</p>
    <Button as={Link} href="/FAQ" prefetch primary>Test Primary Button</Button>
    <Button as={Link} href="/donate" color="primary">Test Primary Button</Button>

    <Button donateblk>Donate black button</Button>
    <Link to="/index">Go back to the homepage</Link>
    <Button2 href="/faq" prefetch>button 2 </Button2>
    <Question />
  </Layout>
)

export default SecondPage
