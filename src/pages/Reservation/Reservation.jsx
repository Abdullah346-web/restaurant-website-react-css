import { useState, useEffect } from 'react'
import './Reservation.css'

export default function Reservation() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		date: '',
		time: '',
		guests: '2 Guests',
		message: ''
	})

	const [reservationCode, setReservationCode] = useState('')
	const [showCode, setShowCode] = useState(false)
	const [searchCode, setSearchCode] = useState('')
	const [foundReservation, setFoundReservation] = useState(null)
	const [error, setError] = useState('')
	const [copySuccess, setCopySuccess] = useState(false)

	// Load reservations from localStorage
	const getReservations = () => {
		const stored = localStorage.getItem('fork_fire_reservations')
		return stored ? JSON.parse(stored) : {}
	}

	// Save reservation to localStorage
	const saveReservation = (code, data) => {
		const reservations = getReservations()
		reservations[code] = data
		localStorage.setItem('fork_fire_reservations', JSON.stringify(reservations))
	}

	// Generate unique 6-digit reservation code
	const generateReservationCode = () => {
		return Math.floor(100000 + Math.random() * 900000).toString()
	}

	// Handle form submit
	const handleSubmit = (e) => {
		e.preventDefault()
		
		// Validate form
		if (!formData.name || !formData.email || !formData.date || !formData.time) {
			alert('Please fill in all required fields')
			return
		}

		// Generate code and save
		const code = generateReservationCode()
		const reservationData = {
			...formData,
			code,
			timestamp: new Date().toISOString()
		}

		saveReservation(code, reservationData)
		setReservationCode(code)
		setShowCode(true)

		// Auto-hide code after 10 seconds
		setTimeout(() => {
			setShowCode(false)
		}, 10000)

		// Reset form
		setFormData({
			name: '',
			email: '',
			date: '',
			time: '',
			guests: '2 Guests',
			message: ''
		})
	}

	// Handle input changes
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}

	// Copy code to clipboard
	const copyToClipboard = () => {
		navigator.clipboard.writeText(reservationCode)
		setCopySuccess(true)
		setTimeout(() => setCopySuccess(false), 2000)
	}

	// Find reservation by code
	const handleFindReservation = (e) => {
		e.preventDefault()
		setError('')
		setFoundReservation(null)

		if (!searchCode.trim()) {
			setError('Please enter a reservation code')
			return
		}

		const reservations = getReservations()
		const found = reservations[searchCode]

		if (found) {
			setFoundReservation(found)
		} else {
			setError('Reservation not found. Please check your code.')
		}
	}

	// Download reservation as text file
	const downloadReservation = () => {
		if (!foundReservation) return

		const content = `
========================================
FORK & FIRE - RESERVATION CONFIRMATION
========================================

Reservation Code: ${foundReservation.code}

Guest Details:
--------------
Name: ${foundReservation.name}
Email: ${foundReservation.email}

Reservation Details:
--------------------
Date: ${new Date(foundReservation.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
Time: ${foundReservation.time}
Number of Guests: ${foundReservation.guests}

${foundReservation.message ? `Special Requests:\n${foundReservation.message}\n` : ''}
========================================
Fork & Fire Restaurant
Thank you for choosing us!
========================================
		`.trim()

		const blob = new Blob([content], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = `fork-fire-reservation-${foundReservation.code}.txt`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		URL.revokeObjectURL(url)
	}

	return (
		<section id="reservations" className="reservation-section">
			<div className="reservation-container">
				{/* Header */}
				<div className="reservation-header">
					<h2 className="section-title">Make a <span className="gradient-text">Reservation</span></h2>
					<p className="section-subtitle">Book your table for an unforgettable experience</p>
				</div>

				{/* Two Column Layout */}
				<div className="reservation-grid">
					{/* Left Column - Reservation Form */}
					<div className="reservation-left">
						<div className="glass-card">
							<h3 className="card-title">Reserve Your Table</h3>
							<form className="reservation-form" onSubmit={handleSubmit}>
								<div className="form-row">
									<div className="form-group">
										<label htmlFor="name">Full Name *</label>
										<input
											type="text"
											id="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="John Doe"
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email *</label>
										<input
											type="email"
											id="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="john@example.com"
											required
										/>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group">
										<label htmlFor="date">Date *</label>
										<input
											type="date"
											id="date"
											value={formData.date}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="time">Time *</label>
										<input
											type="time"
											id="time"
											value={formData.time}
											onChange={handleChange}
											required
										/>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="guests">Number of Guests</label>
									<select id="guests" value={formData.guests} onChange={handleChange}>
										<option>1 Guest</option>
										<option>2 Guests</option>
										<option>3 Guests</option>
										<option>4 Guests</option>
										<option>5 Guests</option>
										<option>6+ Guests</option>
									</select>
								</div>

								<div className="form-group">
									<label htmlFor="message">Special Requests</label>
									<textarea
										id="message"
										rows="4"
										value={formData.message}
										onChange={handleChange}
										placeholder="Any dietary restrictions or special occasions?"
									></textarea>
								</div>

								<button type="submit" className="btn btn-gradient">
									<span>Confirm Reservation</span>
									<svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</button>
							</form>

							{/* Reservation Code Display */}
							{showCode && (
								<div className="code-display animate-in">
									<div className="code-badge">
										<div className="code-label">Your Reservation Code</div>
										<div className="code-number">{reservationCode}</div>
										<div className="code-info">Save this code to view your reservation</div>
									</div>
									<button onClick={copyToClipboard} className="btn-copy">
										{copySuccess ? (
											<>
												<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
													<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
												</svg>
												<span>Copied!</span>
											</>
										) : (
											<>
												<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
													<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
													<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
												</svg>
												<span>Copy Code</span>
											</>
										)}
									</button>
								</div>
							)}
						</div>
					</div>

					{/* Right Column - Find Your Table */}
					<div className="reservation-right">
						<div className="glass-card">
							<h3 className="card-title">Find Your Table</h3>
							<p className="card-description">Enter your reservation code to view details</p>

							<form className="find-form" onSubmit={handleFindReservation}>
								<div className="search-group">
									<input
										type="text"
										className="search-input"
										placeholder="Enter your reservation code"
										value={searchCode}
										onChange={(e) => setSearchCode(e.target.value)}
									/>
									<button type="submit" className="btn-search">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
										</svg>
										<span>Find</span>
									</button>
								</div>
							</form>

							{/* Error Message */}
							{error && (
								<div className="error-message animate-in">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
									</svg>
									<span>{error}</span>
								</div>
							)}

							{/* Found Reservation */}
							{foundReservation && (
								<div className="reservation-details animate-in">
									<div className="details-header">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M9 11l3 3L22 4"></path>
											<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
										</svg>
										<h4>Reservation Confirmed</h4>
									</div>
									<div className="details-grid">
										<div className="detail-item">
											<span className="detail-label">Name</span>
											<span className="detail-value">{foundReservation.name}</span>
										</div>
										<div className="detail-item">
											<span className="detail-label">Email</span>
											<span className="detail-value">{foundReservation.email}</span>
										</div>
										<div className="detail-item">
											<span className="detail-label">Date</span>
											<span className="detail-value">
												{new Date(foundReservation.date).toLocaleDateString('en-US', { 
													weekday: 'short', 
													month: 'short', 
													day: 'numeric',
													year: 'numeric'
												})}
											</span>
										</div>
										<div className="detail-item">
											<span className="detail-label">Time</span>
											<span className="detail-value">{foundReservation.time}</span>
										</div>
										<div className="detail-item">
											<span className="detail-label">Guests</span>
											<span className="detail-value">{foundReservation.guests}</span>
										</div>
										<div className="detail-item">
											<span className="detail-label">Code</span>
											<span className="detail-value detail-code">{foundReservation.code}</span>
										</div>
									</div>
									{foundReservation.message && (
										<div className="detail-special">
											<span className="detail-label">Special Requests</span>
											<p className="detail-value">{foundReservation.message}</p>
										</div>
									)}
									<button onClick={downloadReservation} className="btn-download">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
										</svg>
										<span>Download Reservation</span>
									</button>
								</div>
							)}

							{/* Empty State */}
							{!foundReservation && !error && (
								<div className="empty-state">
									<svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
										<rect x="8" y="12" width="48" height="44" rx="4"/>
										<path d="M8 20h48M20 8v8M44 8v8"/>
										<circle cx="20" cy="32" r="2" fill="currentColor"/>
										<circle cx="32" cy="32" r="2" fill="currentColor"/>
										<circle cx="44" cy="32" r="2" fill="currentColor"/>
									</svg>
									<p>Enter your reservation code to view details</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
