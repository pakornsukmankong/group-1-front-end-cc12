import HostingEntire from './HostingEntire'
import HostingReservations from './HostingReservations'
import HostingTipAndUpdate from './HostingTipAndUpdate'

function HostingContainer() {
  return (
    <div>
      <HostingEntire />
      <HostingReservations />
      <HostingTipAndUpdate />
    </div>
  )
}

export default HostingContainer
