import React from 'react';
import {FaWhatsapp, FaLinkedinIn} from 'react-icons/fa/index.js'
import './Counter.css';

export default function Counter() {

	return (
		<div className="page">
			<header className="header">
				<a className="icon-container" href="https://api.whatsapp.com/send?phone=+51900617146" title="WhatsApp" target="_blank" rel="noopener noreferrer">
					<FaWhatsapp className="icon" />
				</a>
				<a className="icon-container" href="https://www.linkedin.com/in/nisha-mistry-96371b13b/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
					<FaLinkedinIn className="icon" />
				</a>
			</header>

			<main className="content">
				<img className="logo" src="./images/ttp-square-logo.svg" alt="the therapy place uk logo" />
				<div className='copy'>
					<h1>the therapy place</h1>
					<p>Website coming soon. Please check back soon or email us to book a session today.</p>
				</div>
			</main>
			<a className="cta" href="mailto:nisha@thetherapyplaceuk.com">
				Send us an email
			</a>
		</div>
	);
}



