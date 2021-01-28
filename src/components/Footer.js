import React from 'react';
import {Github, Twitter} from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <div className='row'>
            <div className='mx-auto'>
                <a href='https://github.com/dylut2000' target='_blank' rel="noopener noreferrer">
                    <Github color="#5e5e5e" size={20} className="m-2" />
                </a>
                <a href='https://twitter.com/dylut2000' target='_blank' rel="noopener noreferrer">
                    <Twitter color="#5e5e5e" size={20} className="m-2" />
                </a>
            </div>
        </div>
    )
}

export default Footer;
