import HostingEntire from '../feature/hosting/HostingEntire';
import HostingTipAndUpdate from '../feature/hosting/HostingTipAndUpdate';
import HostngReservations from '../feature/hosting/HostngReservations';

function Hosting() {
	return (
		<div>
			<HostingEntire />
			<HostngReservations />
			<HostingTipAndUpdate />
		</div>
	);
}

export default Hosting;
