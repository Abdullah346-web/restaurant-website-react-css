import './Footer.css'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="footer" role="contentinfo">
			<div className="footer__inner">
				{/* Top accent border is handled in CSS */}

				<div className="footer__grid">
					{/* Brand / About */}
					<div className="footer__col footer__brand hover-lift animate-in" aria-label="About Fork & Fire">
						<a href="#home" className="footer__logo" aria-label="Fork & Fire home">
							<span className="footer__logoText">Fork & Fire</span>
						</a>
						<p className="footer__tagline">Where passion meets flavor</p>

						<div className="footer__social" aria-label="Social links">
							<a className="footer__social-link" href="#" aria-label="Instagram">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-.25a1 1 0 110 2 1 1 0 010-2z"/>
								</svg>
							</a>
							<a className="footer__social-link" href="#" aria-label="Facebook">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M13 22v-8h3l1-4h-4V7.5A1.5 1.5 0 0114.5 6H17V2h-3.5A4.5 4.5 0 009 6.5V10H6v4h3v8h4z"/>
								</svg>
							</a>
							<a className="footer__social-link" href="#" aria-label="Twitter">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.19 4.19 0 001.84-2.31 8.38 8.38 0 01-2.65 1.02 4.18 4.18 0 00-7.12 3.81A11.87 11.87 0 013 4.9a4.18 4.18 0 001.29 5.59 4.14 4.14 0 01-1.89-.52v.05a4.18 4.18 0 003.35 4.1 4.2 4.2 0 01-1.89.07 4.18 4.18 0 003.9 2.9A8.39 8.39 0 012 19.54 11.85 11.85 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.34 8.34 0 0022.46 6z"/>
								</svg>
							</a>
						</div>

						<a href="#reservations" className="footer__cta" aria-label="Reserve a table">Reserve Table</a>
					</div>

					{/* Quick Links */}
					<nav className="footer__col footer__links hover-lift animate-in" aria-label="Quick Links">
						<h4 className="footer__heading">Quick Links</h4>
						<ul className="footer__list">
							<li><a href="#home">Home</a></li>
							<li><a href="#menu">Menu</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#contact">Contact</a></li>
							<li><a href="#reservations">Reservations</a></li>
						</ul>
					</nav>

					{/* Opening Hours */}
					<div className="footer__col footer__hours hover-lift animate-in">
						<h4 className="footer__heading">Opening Hours</h4>
						<ul className="footer__list footer__hoursList">
							<li><span>Mon – Fri</span><span>11:00 – 23:00</span></li>
							<li><span>Sat – Sun</span><span>10:00 – 24:00</span></li>
						</ul>
					</div>

					{/* Contact / Location (matches Contact page) */}
					<address className="footer__col footer__contact hover-lift animate-in" aria-label="Contact and Location">
						<h4 className="footer__heading">Contact</h4>
						<p className="footer__text">PECHS, Block B<br/>Karachi, Pakistan</p>
						<a className="footer__link" href="tel:+15551234567">+1 (555) 123-4567</a>
						<a className="footer__link" href="mailto:hello@forkandfire.com">hello@forkandfire.com</a>
						<a className="footer__link" href="mailto:reservations@forkandfire.com">reservations@forkandfire.com</a>
					</address>
				</div>

				<div className="footer__divider" aria-hidden="true" />

				{/* Bottom bar */}
				<div className="footer__bottom">
					<p>© {year} Fork & Fire. All rights reserved.</p>
					<ul className="footer__bottomLinks" aria-label="Footer links">
						<li><a href="#menu">Menu</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
