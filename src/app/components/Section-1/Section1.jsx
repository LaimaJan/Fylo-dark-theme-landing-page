import AccessAnywhereIcon from '../../../app/images/icon-access-anywhere.svg';
import SecurityIcon from '../../../app/images/icon-security.svg';
import CollaborationIcon from '../../../app/images/icon-collaboration.svg';
import AnyFileIcon from '../../../app/images/icon-any-file.svg';

import './index.css';

export default function Section1() {
	return (
		<div className="section-1 section-content">
			<div className="card">
				<div className="icon-holder">
					<img src={AccessAnywhereIcon} alt="access anywhere icon" />
				</div>
				<div className="text-container">
					<h3>Access your files, anywhere</h3>
					<p>
						The ability to use a smartphone, tablet, or computer to access your
						account means your files follow you everywhere.
					</p>
				</div>
			</div>
			<div className="card">
				<div className="icon-holder">
					<img src={SecurityIcon} alt="security icon" />
				</div>
				<div className="text-container">
					<h3>Security you can trust</h3>
					<p>
						2-factor authenthication and user-controlled encryption are just a
						couple of the security features we allow to help secure your files.
					</p>
				</div>
			</div>

			<div className="card">
				<div className="icon-holder">
					<img src={CollaborationIcon} alt="collaboration icon" />
				</div>
				<div className="text-container">
					<h3>Real-time collaboration</h3>
					<p>
						Securely share files and folders with friends, family amd colleagues
						for live collaboration. No email attachments required.
					</p>
				</div>
			</div>
			<div className="card">
				<div className="icon-holder">
					<img src={AnyFileIcon} alt="any file icon" />
				</div>
				<div className="text-container">
					<h3>Store any type of file</h3>
					<p>
						Whether you're sharing holidays photos or work documents, Fylo has
						you covered allowing for all the file types to be securely stored
						and shared.
					</p>
				</div>
			</div>
		</div>
	);
}
