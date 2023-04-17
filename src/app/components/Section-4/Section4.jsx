import './index.css';

export default function Section4({ onSubmit, error, email, onChange }) {
	return (
		<div className="section-4 section-content">
			<div className="sign-up-content">
				<div className="sign-up-text">
					<h2>Get early access today</h2>
					<p>
						It only takes a minute to sign up our free started tier is extremely
						generous. If you have any questions, our support team would be happy
						to help you.
					</p>
				</div>
				<form className="sign-up-input" onSubmit={onSubmit}>
					<input
						type="email"
						id="email"
						name="email"
						defaultValue={email}
						placeholder="email@example.com"
						onChange={onChange}
					/>

					<button type="submit">Get Started For Free</button>
				</form>
				<div className="error-message-container">
					{/* {errorMessage} */}
					{{ error } && (
						<h2 className="error-message" style={{ color: 'red' }}>
							{error}
						</h2>
					)}
				</div>
			</div>
		</div>
	);
}
