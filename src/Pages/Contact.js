import React from 'react';
import './Contact.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';

function Contact() {
    return (
        <div className="contact">
            <p className="heading">Contact</p>
            <a href="mailto:venuswku@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-links">
                <EmailRoundedIcon fontSize="large" className="contact-link-icon" />Email: venuswku@gmail.com
            </a>
            <a href="https://github.com/venuswku" target="_blank" rel="noopener noreferrer" className="contact-links">
                <CodeRoundedIcon fontSize="large" className="contact-link-icon" />GitHub: venuswku
            </a>
        </div>
    );
}

export default Contact;
