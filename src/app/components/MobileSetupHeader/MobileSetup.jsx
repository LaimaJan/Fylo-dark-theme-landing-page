import BgCurvyMobile from '../../images/bg-curvy-mobile.svg';
import IllustrationIntro from '../../images/illustration-intro.png';

export default function MobileSetupHeader() {
	return (
		<div className="header-content">
			<div className="header-text-illustration-holder">
				<div className="illustration-holder">
					<img src={IllustrationIntro} alt="intro illustration" />
				</div>
				<div className="text-container">
					<h1>All your files in one secure location, accessible anywhere.</h1>
					<p>
						Fylo stores all your most important files in one secure location.
						Access them wherever you need, share and collaborate with friends
						family, co-workers.
					</p>
				</div>
				<div className="header-button-container">
					<button>Get Started</button>
				</div>
			</div>
			<div className="background-illustration-holder">
				<img src={BgCurvyMobile} alt="background curvy illustration" />
			</div>
		</div>
	);
}
