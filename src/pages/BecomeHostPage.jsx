import BecomeHostAirCover from '../feature/becomeHost/BecomeHostAirCover';
import BecomeHostCarousel from '../feature/becomeHost/BecomeHostCarousel';
import BecomeHostEntire from '../feature/becomeHost/BecomeHostEntire';
import BecomeHostFooter from '../feature/becomeHost/BecomeHostFooter';
import BecomeHostHelpUkrain from '../feature/becomeHost/BecomeHostHelpUkrain';
import BecomeHostMap from '../feature/becomeHost/BecomeHostMap';
import BecomeHostQuestion from '../feature/becomeHost/BecomeHostQuestion';
import BecomeHostTryHosting from '../feature/becomeHost/BecomeHostTryHosting';

function BecomeHostPage() {
	return (
		<div>
			<BecomeHostEntire />
			<BecomeHostMap />
			<BecomeHostCarousel />
			<BecomeHostHelpUkrain />
			<BecomeHostQuestion />
			<BecomeHostAirCover />
			<BecomeHostTryHosting />
			<BecomeHostFooter />
		</div>
	);
}

export default BecomeHostPage;
