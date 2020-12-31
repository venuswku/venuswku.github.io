import React from 'react';
import './Contact.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ReactComponent as Starfish } from '../Assets/Starfish.svg';

function Contact() {
    return (
        <div className="contact">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
            <Starfish className="starfishy" />
            <p className="heading contact-heading">Contact</p>
            <a href="mailto:venuswku@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-links">
                <EmailRoundedIcon fontSize="large" className="contact-link-icon" />Email: venuswku@gmail.com
            </a>
            <a href="https://github.com/venuswku" target="_blank" rel="noopener noreferrer" className="contact-links">
                <GitHubIcon fontSize="large" className="contact-link-icon" />GitHub: venuswku
            </a>
        </div>
    );
}

export default Contact;
