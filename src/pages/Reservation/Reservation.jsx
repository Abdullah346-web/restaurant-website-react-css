import './Reservation.css'

export default function Reservation() {
	return (
		<section id="reservations" className="page-section">
			<div className="container">
				<h2 className="section-title">Make a Reservation</h2>
				<p className="section-subtitle">Book your table for an unforgettable experience</p>
				
				<form className="reservation-form">
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="name">Full Name</label>
							<input type="text" id="name" placeholder="John Doe" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" placeholder="john@example.com" />
						</div>
					</div>
					
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="date">Date</label>
							<input type="date" id="date" />
						</div>
						<div className="form-group">
							<label htmlFor="time">Time</label>
							<input type="time" id="time" />
						</div>
						<div className="form-group">
							<label htmlFor="guests">Guests</label>
							<select id="guests">
								<option>1 Guest</option>
								<option>2 Guests</option>
								<option>3 Guests</option>
								<option>4 Guests</option>
								<option>5+ Guests</option>
							</select>
						</div>
					</div>
					
					<div className="form-group">
						<label htmlFor="message">Special Requests</label>
						<textarea id="message" rows="4" placeholder="Any dietary restrictions or special occasions?"></textarea>
					</div>
					
					<button type="submit" className="btn btn-gradient">Reserve Table</button>
				</form>
			</div>
		</section>
	)
}
