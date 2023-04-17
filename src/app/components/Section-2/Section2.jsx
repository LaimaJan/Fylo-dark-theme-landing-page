import StayProductiveIcon from '../../../app/images/illustration-stay-productive.png';
import ArrowIcon from '../../../app/images/icon-arrow.svg';

import './index.css';

export default function Section1() {
	return (
		<div className="section-2 section-content">
			<div className="image-container">
				<img src={StayProductiveIcon} alt="stay productive icon" />
			</div>
			<div className="text-container">
				<h1>Stay productive, wherever you are</h1>
				<p>
					Never let location be an issue when accessing your files. Fylo has you
					covered for all your file storage needs.
				</p>
				<p>
					Securely share files and folders with friends, family and colleagues
					for live collaboration. No email attachments required.
				</p>
				<div className="navigation-container">
					<a href="#">See how Fylo works</a>
					<img src={ArrowIcon} alt="arrow icon" />
				</div>
			</div>
		</div>
	);
}
