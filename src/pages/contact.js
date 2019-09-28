import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import NewsLetter from '../components/HomePageComponents/NewsLetter';
import '../css/main.css';
import ContactUs from '../components/contact-us';
import "../css/contactHero.css";


const ContactPage = () => (
    <div>
        <Layout>
            <ContactUs />
            <NewsLetter />
        </Layout>
    </div>
)

export default ContactPage