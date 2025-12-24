import './About.css'

export default function About() {
	return (
		<section id="about" className="page-section about-section">
			<div className="container">
				<h2 className="section-title">About Fork & Fire</h2>
				<p className="section-subtitle">Where passion meets flavor</p>
				
				<div className="about-content">
					<div className="about-text">
						<h3>Our Story</h3>
						<p>
							Founded in 2020, Fork & Fire has been serving exceptional cuisine 
							with a warm, inviting atmosphere. Our commitment to quality ingredients 
							and innovative cooking techniques sets us apart.
						</p>
						<p>
							Every dish is crafted with passion, bringing together traditional 
							methods and modern culinary artistry to create unforgettable dining experiences.
						</p>
					</div>
					<div className="about-stats">
						<div className="stat-item">
							<span className="stat-number">5+</span>
							<span className="stat-label">Years of Excellence</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">50+</span>
							<span className="stat-label">Signature Dishes</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">1000+</span>
							<span className="stat-label">Happy Customers</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
