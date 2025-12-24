import { motion } from 'framer-motion'
import './Home.css'
import Menu from '../Menu/Menu'
import About from '../About/About'
import Reservation from '../Reservation/Reservation'
import Contact from '../Contact/Contact'

const containerVariants = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: { staggerChildren: 0.12, duration: 0.6, ease: 'easeOut' }
	}
}

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Home() {
	return (
		<main className="home">
			{/* Hero Section */}
			<motion.section
				id="home"
				className="hero"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="hero__content">
					<motion.h1 className="hero__title" variants={itemVariants}>
						Welcome to <span className="gradient-text">Fork & Fire</span>
					</motion.h1>
					<motion.p className="hero__subtitle" variants={itemVariants}>
						Where culinary passion meets exceptional flavors. Experience dining redefined.
					</motion.p>
					<motion.div className="hero__buttons" variants={itemVariants}>
						<a href="#menu" className="btn btn-primary">Explore Menu</a>
						<a href="#reservations" className="btn btn-secondary">Reserve Table</a>
					</motion.div>
				</div>
				<div className="hero__decorative">
					<div className="decorative-circle decorative-circle--1"></div>
					<div className="decorative-circle decorative-circle--2"></div>
					<div className="decorative-circle decorative-circle--3"></div>
				</div>
			</motion.section>

			{/* Include other page sections */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				<Menu />
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				<About />
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				<Reservation />
			</motion.div>
			
			{/* Gallery Section */}
			<motion.section
				id="gallery"
				className="page-section gallery-section"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="container">
					<motion.h2 className="section-title" variants={itemVariants}>Our Ambiance</motion.h2>
					<motion.p className="section-subtitle" variants={itemVariants}>Experience the perfect dining atmosphere</motion.p>
					
					<div className="gallery-grid">
						{[
							{ icon: '🍽️', label: 'Elegant Dining' },
							{ icon: '👨‍🍳', label: 'Expert Chefs' },
							{ icon: '🥂', label: 'Fine Drinks' },
							{ icon: '🌟', label: 'Premium Service' }
						].map((item) => (
							<motion.div key={item.label} className="gallery-item" variants={itemVariants}>
								<div className="gallery-placeholder">
									<span>{item.icon}</span>
									<p>{item.label}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
			
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				<Contact />
			</motion.div>
		</main>
	)
}
