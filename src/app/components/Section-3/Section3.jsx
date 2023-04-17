import QuotesIcon from '../../../app/images/bg-quotes.png';
import Profile1 from '../../../app/images/profile-1.jpg';
import Profile2 from '../../../app/images/profile-2.jpg';
import Profile3 from '../../../app/images/profile-3.jpg';

import './index.css';

export default function Section3() {
	return (
		<div className="section-3 section-content">
			<div className="quotes-icon-container">
				<img src={QuotesIcon} alt="quotes icon" />
			</div>
			<div className="testimonials">
				<div className="testimonials-container">
					<div className="testimonials-container-box">
						<div className="comment-container">
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become
								well-oiled collaboration machine.
							</p>
						</div>
						<div className="person-icon-info">
							<div className="person-icon">
								<img src={Profile1} alt="profile picture" />
							</div>
							<div className="text-container">
								<p className="name-surname">Satish Patel</p>
								<p className="job">Founder & CEO, Huddle</p>
							</div>
						</div>
					</div>
				</div>
				<div className="testimonials-container">
					<div className="testimonials-container-box">
						<div className="comment-container">
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become
								well-oiled collaboration machine.
							</p>
						</div>
						<div className="person-icon-info">
							<div className="person-icon">
								<img src={Profile2} alt="profile picture" />
							</div>
							<div className="text-container">
								<p className="name-surname">Bruce McKenzie</p>
								<p className="job">Founder & CEO, Huddle</p>
							</div>
						</div>
					</div>
				</div>
				<div className="testimonials-container">
					<div className="testimonials-container-box">
						<div className="comment-container">
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become
								well-oiled collaboration machine.
							</p>
						</div>
						<div className="person-icon-info">
							<div className="person-icon">
								<img src={Profile3} alt="profile picture" />
							</div>
							<div className="text-container">
								<p className="name-surname">Iva Boyd</p>
								<p className="job">Founder & CEO, Huddle</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
