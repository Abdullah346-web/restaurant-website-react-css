import './About.css'

export default function About() {
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				{/* Main Heading */}
				<div className="about-header">
					<h2 className="section-title">About <span className="gradient-text">Fork & Fire</span></h2>
					<div className="about-accent-line"></div>
				</div>

				{/* Two-Column Layout */}
				<div className="about-content">
					{/* Left Column - Text Content */}
					<div className="about-left">
						<div className="about-card glass-card">
							<h2 className="about-subtitle">Our Story</h2>
							<p className="about-paragraph">
								Founded in 2020, Fork & Fire has been serving exceptional cuisine 
								with a warm, inviting atmosphere. Our commitment to quality ingredients 
								and innovative cooking techniques sets us apart in the culinary world.
							</p>
							<p className="about-paragraph">
								Every dish is crafted with passion, bringing together traditional 
								methods and modern culinary artistry to create unforgettable dining experiences 
								for our valued guests.
							</p>
						</div>

						<div className="about-card glass-card">
							<h2 className="about-subtitle">Our Philosophy</h2>
							<p className="about-paragraph">
								Fork & Fire is a modern restaurant dedicated to delivering quality food, 
								bold flavors, and a premium dining experience. We believe that great food 
								transcends the plate—it creates memories, sparks conversations, and brings 
								people together. Our kitchen celebrates seasonal ingredients, innovative techniques, 
								and the artistry of culinary excellence. Every visit to Fork & Fire is an invitation 
								to experience gastronomic creativity at its finest, in an atmosphere that is both 
								elegant and welcoming.
							</p>
						</div>
					</div>

					{/* Right Column - Statistics */}
					<div className="about-right">
						<div className="stats-container">
							<div className="stat-card hover-lift">
								<div className="stat-content">
									<span className="stat-number">5+</span>
									<span className="stat-label">Years of Excellence</span>
								</div>
								<div className="stat-accent"></div>
							</div>

							<div className="stat-card hover-lift">
								<div className="stat-content">
									<span className="stat-number">50+</span>
									<span className="stat-label">Signature Dishes</span>
								</div>
								<div className="stat-accent"></div>
							</div>

							<div className="stat-card hover-lift">
								<div className="stat-content">
									<span className="stat-number">1000+</span>
									<span className="stat-label">Happy Customers</span>
								</div>
								<div className="stat-accent"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
