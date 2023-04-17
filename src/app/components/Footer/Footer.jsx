import Logo from '../../images/logo.svg';
import LocationIcon from '../../images/icon-location.svg';
import PhoneIcon from '../../images/icon-phone.svg';
import EmailIcon from '../../images/icon-email.svg';
import FaceBookIcon from '../../images/facebook-f.svg';
import TwitterIcon from '../../images/twitter.svg';
import InstagramIcon from '../../images/instagram.svg';

import './Footer.css';

export default function Section4() {
	return (
		<div className="footer-content">
			<div className="footer-content-box">
				<div className="logo-container-footer">
					<img src={Logo} alt="fylo-logo" />
				</div>
				<div className="footer-text-container">
					<div className="footer location">
						<img src={LocationIcon} alt="location icon" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
							unde animi dolor consectetur dicta? Quas.
						</p>
					</div>
					<div className="footer contact-info">
						<div>
							<img src={PhoneIcon} alt="phone icon" />
							<p>+1-543-123-4567</p>
						</div>
						<div>
							<img src={EmailIcon} alt="email icon" />
							<p>example@fylo.com</p>
						</div>
					</div>
					<div className="footer about-us">
						<ul>
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Jobs</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
						</ul>
					</div>
					<div className="footer contact-us">
						<ul>
							<li>
								<a href="#">Contact us</a>
							</li>
							<li>
								<a href="#">Terms</a>
							</li>
							<li>
								<a href="#">Privacy</a>
							</li>
						</ul>
					</div>
					<div className="footer social-icons">
						<div className="icon facebook">
							<img src={FaceBookIcon} alt="facebook icon" />
						</div>
						<div className="icon twitter">
							<img src={TwitterIcon} alt="twitter icon" />
						</div>
						<div className="icon instagram">
							<img src={InstagramIcon} alt="instagram icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
