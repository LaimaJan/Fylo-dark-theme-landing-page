import Logo from '../../../app/images/logo.svg';
import './index.css';

export default function Navigation() {
	return (
		<div className="navigation-content">
			<div className="logo-container">
				<img src={Logo} alt="fylo-logo" />
			</div>
			<div className="navigators-container">
				<ul>
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Team</a>
					</li>
					<li>
						<a href="#">Sign In</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
