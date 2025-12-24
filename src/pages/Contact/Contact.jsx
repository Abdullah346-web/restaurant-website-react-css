import './Contact.css'

export default function Contact() {
	return (
		<section id="contact" className="page-section">
			<div className="container">
				<h2 className="section-title">Get In Touch</h2>
				<p className="section-subtitle">We'd love to hear from you</p>
				
				<div className="contact-content">
					<div className="contact-info">
						<div className="contact-card">
							<div className="contact-icon">📍</div>
							<h3>Location</h3>
							<p>123 Culinary Street<br/>Downtown, City 12345</p>
						</div>
						
						<div className="contact-card">
							<div className="contact-icon">📞</div>
							<h3>Phone</h3>
							<p>+1 (555) 123-4567<br/>Mon-Sun: 11AM - 11PM</p>
						</div>
						
						<div className="contact-card">
							<div className="contact-icon">✉️</div>
							<h3>Email</h3>
							<p>hello@forkandfire.com<br/>reservations@forkandfire.com</p>
						</div>
					</div>
					
					<form className="contact-form">
						<div className="form-group">
							<input type="text" placeholder="Your Name" />
						</div>
						<div className="form-group">
							<input type="email" placeholder="Your Email" />
						</div>
						<div className="form-group">
							<textarea rows="5" placeholder="Your Message"></textarea>
						</div>
						<button type="submit" className="btn btn-gradient">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	)
}
