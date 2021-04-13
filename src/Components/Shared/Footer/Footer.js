import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';


const Footer = () => {

    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]

    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]

    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]

    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]

    return (
        <footer className="footer-area mt-3">
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} ></FooterCol>
                    <FooterCol key={2} menuTitle={"Services"} menuItems={services} ></FooterCol>
                    <FooterCol key={3} menuTitle={"OralHealth"} menuItems={oralHealth} ></FooterCol>
                    <FooterCol key={4} menuTitle={"OurAddress"} menuItems={ourAddress} ></FooterCol>
                </div>
            </div>
            <div className="text-center copyRight" >
                <div className="social-media">
                <Link to="/facebook.con"><FontAwesomeIcon className="icon " icon={faFacebookSquare} >con</FontAwesomeIcon></Link>
                <Link to="/facebook.con"><FontAwesomeIcon className="icon mx-2" icon={faGooglePlusG} >con</FontAwesomeIcon></Link>
                <Link to="/facebook.con"><FontAwesomeIcon className="icon" icon={faTwitter} >con</FontAwesomeIcon></Link>
                </div>
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;