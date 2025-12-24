import './Footer.css'

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="footer">
			<div className="footer__content">
				<div className="footer__brand">
					<h3 className="gradient-text">Fork & Fire</h3>
					<p>Where passion meets flavor</p>
				</div>
				
				<div className="footer__links">
					<div className="footer__column">
						<h4>Quick Links</h4>
						<a href="#home">Home</a>
						<a href="#menu">Menu</a>
						<a href="#about">About</a>
					</div>
					
					<div className="footer__column">
						<h4>Contact</h4>
						<p>123 Culinary Street</p>
						<p>+1 (555) 123-4567</p>
						<p>hello@forkandfire.com</p>
					</div>
					
					<div className="footer__column">
						<h4>Hours</h4>
						<p>Mon - Fri: 11AM - 11PM</p>
						<p>Sat - Sun: 10AM - 12AM</p>
					</div>
				</div>
			</div>
			
			<div className="footer__bottom">
				<p>© {year} Fork & Fire. All rights reserved.</p>
			</div>
		</footer>
	)
}
