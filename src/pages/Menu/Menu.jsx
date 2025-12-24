import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Menu.css'

const categoryData = [
	{ id: 'main-course', title: 'Main Course', tagline: 'Rich & traditional flavors', image: '../src/assets/images/main.jpeg' },
	{ id: 'appetizers', title: 'Appetizers', tagline: 'Start with a spark', image: '../src/assets/images/appetizers.jpeg' },
	{ id: 'desserts', title: 'Desserts', tagline: 'Sweet, warm finishes', image: '../src/assets/images/desserts.jpeg' },
	{ id: 'vegeterian', title: 'Vegeterian', tagline: 'World on a plate', image: '../src/assets/images/vegeterian.jpeg' },
	{ id: 'drinks', title: 'Drinks', tagline: 'Crafted sips & pours', image: '../src/assets/images/drinks.jpeg' },
	{ id: 'specials', title: 'Specials', tagline: 'Limited, bold, seasonal', image: '../src/assets/images/specials.jpeg' }
]

const dishesByCategory = {
	'main-course': [
		{ name: 'Fire-Grilled Ribeye', desc: 'Prime ribeye, ember char, truffle jus', price: '$42', tag: '🌶️', image: '../src/assets/images/ribeye.jpeg' },
		{ name: 'Smoked Lamb Shank', desc: 'Slow braise, rosemary glaze, root mash', price: '$36', tag: '🔥', image: '../src/assets/images/lamb.jpeg' },
		{ name: 'Seared Salmon', desc: 'Citrus butter, charred broccolini', price: '$29', tag: '🌿', image: '../src/assets/images/salmon.jpeg' },
		{ name: 'Ember Roast Chicken', desc: 'Harissa rub, confit garlic, charred lemon', price: '$27', image: '../src/assets/images/chicken.jpeg' },
		{ name: 'Charred Sea Bass', desc: 'Fennel salad, saffron beurre blanc', price: '$31', image: '../src/assets/images/seabass.jpeg' },
		{ name: 'Wild Mushroom Risotto', desc: 'Parmesan crisp, herb oil', price: '$24', tag: '🌿', image: '../src/assets/images/risotto.jpeg' }
	],
	appetizers: [
		{ name: 'Charred Prawns', desc: 'Garlic-chili butter, lemon ash', price: '$16', tag: '🌶️', image: '../src/assets/images/prawns.jpeg' },
		{ name: 'Burrata Ember', desc: 'Heirloom tomato, basil oil, sourdough', price: '$14', tag: '🌿', image: '../src/assets/images/burrata.jpeg' },
		{ name: 'Crispy Calamari', desc: 'Smoked paprika aioli, citrus zest', price: '$15', image: '../src/assets/images/calamari.jpeg' },
		{ name: 'Embered Flatbread', desc: 'Whipped feta, pickled chili, herbs', price: '$13', image: '../src/assets/images/flatbread.jpeg' },
		{ name: 'Truffle Arancini', desc: 'Porcini ragù, parmesan snow', price: '$14', image: '../src/assets/images/arancini.jpeg' },
		{ name: 'Roasted Beet Carpaccio', desc: 'Citrus vinaigrette, pistachio crunch', price: '$12', tag: '🌿', image: '../src/assets/images/carpaccio.jpeg' }
	],
	desserts: [
		{ name: 'Molten Chocolate', desc: 'Smoked salt caramel, vanilla bean ice cream', price: '$12', image: '../src/assets/images/chocolate.jpeg' },
		{ name: 'Crème Brûlée', desc: 'Earl grey infusion, burnt sugar top', price: '$11', image: '../src/assets/images/brulee.jpeg' },
		{ name: 'Berry Pavlova', desc: 'Crisp meringue, citrus curd, fresh berries', price: '$10', tag: '🌿', image: '../src/assets/images/pavlova.jpeg' },
		{ name: 'Citrus Basque Cheesecake', desc: 'Orange blossom cream, charred citrus', price: '$11', image: '../src/assets/images/cheesecake.jpeg' },
		{ name: 'Affogato', desc: 'Espresso over vanilla gelato, biscotti', price: '$8', image: '../src/assets/images/affogato.jpeg' },
		{ name: 'Sticky Toffee Pudding', desc: 'Warm date cake, smoked toffee sauce', price: '$10', image: '../src/assets/images/toffee.jpeg' }
	],
	vegeterian: [
		{ name: 'Thai Red Curry', desc: 'Coconut, kaffir lime, charred veggies', price: '$24', tag: '🌶️', image: '../src/assets/images/curry.jpeg' },
		{ name: 'Stuffed Bell Peppers', desc: 'Quinoa, black beans, melted pecorino', price: '$22', image: '../src/assets/images/peppers.jpeg' },
		{ name: 'Zucchini Noodles', desc: 'Basil pesto, blistered tomato, pinenut', price: '$19', image: '../src/assets/images/zucchini.jpeg' },
		{ name: 'Roasted Cauliflower Steak', desc: 'Chimichurri, golden raisins, almond', price: '$21', image: '../src/assets/images/cauliflower.jpeg' },
		{ name: 'Grilled Halloumi Salad', desc: 'Charred citrus, mint, smoked honey', price: '$18', image: '../src/assets/images/halloumi.jpeg' },
		{ name: 'Sweet Potato Gnocchi', desc: 'Brown butter sage, crispy kale', price: '$23', image: '../src/assets/images/gnocchi.jpeg' }
	],
	drinks: [
		{ name: 'Smoked Old Fashioned', desc: 'Bourbon, bitters, orange ember', price: '$14', image: '../src/assets/images/oldfashioned.jpeg' },
		{ name: 'Citrus Spark', desc: 'Yuzu, tonic, rosemary smoke', price: '$12', image: '../src/assets/images/citrus.jpeg' },
		{ name: 'Charcoal Lemonade', desc: 'Activated charcoal, mint, honey', price: '$10', image: '../src/assets/images/lemonade.jpeg' },
		{ name: 'Espresso Martini', desc: 'Vodka, espresso, coffee liqueur', price: '$13', image: '../src/assets/images/espresso.jpeg' },
		{ name: 'Mango Lassi', desc: 'Creamy yogurt, cardamom, mango', price: '$8', image: '../src/assets/images/lassi.jpeg' },
		{ name: 'Rosemary Grapefruit Spritz', desc: 'Citrus soda, rosemary syrup, fizz', price: '$11', image: '../src/assets/images/spritz.jpeg' }
	],
	specials: [
		{ name: 'Truffle Night', desc: 'Shaved black truffle on signature mains', price: 'MP', image: '../src/assets/images/truffle.jpeg' },
		{ name: 'Sunday Roast', desc: 'Slow roast, fire-kissed vegetables', price: '$38', image: '../src/assets/images/roast.jpeg' },
		{ name: 'Seasonal Vegetable Medley', desc: 'Charred farm vegetables, herb oil', price: '$30', tag: '🌿', image: '../src/assets/images/vegetables.jpeg' },
		{ name: 'Duck Confit', desc: 'Crispy leg, cider glaze, roasted shallot', price: '$40', image: '../src/assets/images/duck.jpeg' },
		{ name: "Chef's Tasting Trio", desc: 'Three rotating bites from the chef', price: '$28', image: '../src/assets/images/tasting.jpeg' },
		{ name: 'Fire & Ice Duo', desc: 'Hot brownie, frozen vanilla parfait', price: '$18', image: '../src/assets/images/duo.jpeg' }
	]
}

const containerVariants = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: { staggerChildren: 0.08, duration: 0.6, ease: 'easeOut' }
	}
}

const itemVariants = {
	hidden: { opacity: 0, y: 15, scale: 0.98 },
	show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
	exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.3 } }
}

export default function Menu() {
	const [selected, setSelected] = useState(null)
	const [isInView, setIsInView] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setIsInView(true)
				})
			},
			{ threshold: 0.2 }
		)

		if (sectionRef.current) observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	const dishes = useMemo(() => (selected ? dishesByCategory[selected] ?? [] : []), [selected])

	return (
		<section id="menu" className="page-section menu-section" ref={sectionRef}>
			<div className="container">
				<motion.div
					className="menu-header"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'show' : 'hidden'}
				>
					<motion.h2 className="section-title" variants={itemVariants}>Our Menu</motion.h2>
					<motion.p className="section-subtitle" variants={itemVariants}>
						Discover fire-inspired creations crafted for every craving.
					</motion.p>
				</motion.div>

				<AnimatePresence mode="wait">
					{!selected && (
						<motion.div
							key="categories"
							className="menu-grid menu-grid--categories"
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? 'show' : 'hidden'}
							exit="hidden"
						>
							{categoryData.map((cat) => (
								<motion.button
									key={cat.id}
									type="button"
									className="menu-card"
									onClick={() => setSelected(cat.id)}
									variants={itemVariants}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.99 }}
								>
									<div className="menu-card__image" style={{ backgroundImage: `url(${cat.image})` }} />
									<div className="menu-card__overlay" />
									<div className="menu-card__content">
										<h3>{cat.title}</h3>
										<p>{cat.tagline}</p>
									</div>
								</motion.button>
							))}
						</motion.div>
					)}

					{selected && (
						<motion.div
							key="dishes"
							className="menu-dishes"
							variants={containerVariants}
							initial="hidden"
							animate="show"
							exit="hidden"
						>
							<motion.button
								type="button"
								className="menu-back"
								onClick={() => setSelected(null)}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
							>
								← Back to Menu
							</motion.button>

							<motion.h3 className="menu-dishes__title" variants={itemVariants}>
								{categoryData.find((c) => c.id === selected)?.title}
							</motion.h3>

							<div className="menu-grid menu-grid--dishes">
								{dishes.map((dish, idx) => (
									<motion.div
										key={dish.name}
										className="dish-card"
										variants={itemVariants}
										initial="hidden"
										animate="show"
										transition={{ delay: idx * 0.08, duration: 0.45, ease: 'easeOut' }}
									>
										<div className="dish-card__image" style={{ backgroundImage: `url(${dish.image})` }} aria-hidden="true" />
										<div className="dish-card__content">
											<div className="dish-card__top">
												<h4>{dish.name}</h4>
												{dish.tag && <span className="dish-card__tag">{dish.tag}</span>}
											</div>
											<p>{dish.desc}</p>
											<div className="dish-card__footer">
												<span className="dish-card__price">{dish.price}</span>
												<button className="dish-card__button">Buy Now</button>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	)
}
