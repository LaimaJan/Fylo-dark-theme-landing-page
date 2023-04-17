import './App.css';

import Navigation from './components/Navigation/Navigation';

import Section1 from './components/Section-1/Section1';
import Section2 from './components/Section-2/Section2';
import Section3 from './components/Section-3/Section3';
import Section4 from './components/Section-4/Section4';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import React, { useState } from 'react';

function App() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form was submitted!');
	};

	function isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleChange = (event) => {
		if (!isValidEmail(event.target.value)) {
			setError('Please enter a valid email address');
		} else {
			setError(null);
		}

		setEmail(event.target.value);
	};

	return (
		<div className="App">
			<nav>
				<Navigation />
			</nav>

			{/* Home header */}
			<header>
				<Header />
			</header>

			{/*  Home Section - 1 */}
			<section>
				<Section1 />
			</section>

			{/* Home Section - 2 */}
			<section>
				<Section2 />
			</section>

			{/* Home Section - 3 */}
			<section>
				<Section3 />
			</section>

			{/* Home section - 4 */}
			<section>
				<div className="section-4 section-content">
					<div className="sign-up-content">
						<div className="sign-up-text">
							<h2>Get early access today</h2>
							<p>
								It only takes a minute to sign up our free started tier is
								extremely generous. If you have any questions, our support team
								would be happy to help you.
							</p>
						</div>
						<form className="sign-up-input" onSubmit={handleSubmit}>
							<input
								type="email"
								id="email"
								name="email"
								defaultValue={email}
								placeholder="email@example.com"
								onChange={handleChange}
							/>

							<button type="submit">Get Started For Free</button>
						</form>
						<div className="error-message-container">
							{error && (
								<h2 className="error-message" style={{ color: 'red' }}>
									{error}
								</h2>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Home - footer */}
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
