import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
	const [activeSection, setActiveSection] = useState('home')
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)

			// Scroll spy: pick the last section whose top is above the threshold
			const sections = ['home', 'menu', 'about', 'reservations', 'gallery', 'contact']
			const threshold = 140
			let current = 'home'

			sections.forEach((id) => {
				const el = document.getElementById(id)
				if (!el) return
				const top = el.getBoundingClientRect().top
				if (top <= threshold) current = id
			})

			setActiveSection(current)
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleNavClick = (e, sectionId) => {
		e.preventDefault()
		const section = document.getElementById(sectionId)
		if (section) {
			const offset = 80
			const elementPosition = section.offsetTop - offset
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth'
			})
		}
		setActiveSection(sectionId)
		setIsMobileMenuOpen(false)
	}

	const navLinks = [
		{ id: 'home', label: 'Home' },
		{ id: 'menu', label: 'Menu' },
		{ id: 'about', label: 'About' },
		{ id: 'reservations', label: 'Reservations' },
		{ id: 'gallery', label: 'Gallery' },
		{ id: 'contact', label: 'Contact' }
	]

	return (
		<header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
			<div className="navbar__container">
				<div className="navbar__brand">
					<span className="brand-text">Fork & Fire</span>
				</div>

				<nav className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
					{navLinks.map((link, index) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
							onClick={(e) => handleNavClick(e, link.id)}
							style={{ '--delay': `${index * 0.1}s` }}
						>
							{link.label}
						</a>
					))}
				</nav>

				<button 
					className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	)
}
