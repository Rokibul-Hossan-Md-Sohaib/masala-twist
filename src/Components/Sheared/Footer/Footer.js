import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
     { name:"masala-twist", link:"/home"},
     { name:"BreakFast ", link:"/breakfast"},
     { name:"Lunch", link:"/lunch"},
     { name:"Dinner", link:"/dinner"},
     { name:"Others", link:"/"},
    ]

    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const complaines = [
        {name: "Any Kind Of complains" , link: "/emergency"},
        {name: "Check Reviews" , link: "/checkup"},
        {name: "Personal Openion" , link: "/personal-treatment"},
        {name: "Behaiviors" , link: "/tooth-extract"},
     
    ]
    const services = [
        {name: "HomeDelivery" , link: "/delivary"},
        {name: "Check Up Food" , link: "/checkup"},
        {name: "Respect Your Reviews" , link: "/review"},
        {name: "Any Kind Of Healty Foods" , link: "/food"},
        {name: "Best Cook" , link: "/checkup"},
        
    ]
    return (
        <footer className="footer footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Coplaines" menuItems={complaines}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
