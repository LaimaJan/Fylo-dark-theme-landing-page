import MobileSetup from '../MobileSetupHeader/MobileSetup';
import DesktopSetup from '../DesktopSetupHeader/DesktopSetup';
import useViewport from '../ViewPort/ViewPort';

import './index.css';

export default function MyComponent() {
	const { width } = useViewport();
	const breakpoint = 376;

	return width < breakpoint ? <MobileSetup /> : <DesktopSetup />;
}
