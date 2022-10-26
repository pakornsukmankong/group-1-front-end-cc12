function HostingReservations() {
  return (
    <div className="px-[16%] mt-[65px]">
      <div className="flex justify-between h-[45px] mb-6">
        <h1 className="text-3xl font-semibold">Your reservations</h1>
        <div className="flex items-center underline">
          <h1 className="font-semibold">All reservations (0)</h1>
        </div>
      </div>
      <div className=" flex gap-4">
        <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Currently hosting (0)
        </button>
        <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Checking out (0)
        </button>
        {/* <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Arriving soon (0)
        </button>
        <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Upcoming (0)
        </button>
        <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Pending Review (0)
        </button> */}
      </div>
      <div className="w-full mt-3 mb-10 flex justify-center p-16">
        <div className="flex flex-col justify-center items-center gap-10">
          <div>
            <svg
              viewBox="0 0 32 32"
              style={{
                display: 'block',
                height: '32px',
                width: '32px',
              }}>
              <path d="m24.0001497 1c2.6882889.00069168 4.881043 2.1224181 4.9956073 4.78298655l.0047037.21687134.0007229 5.08862781-2 .0002841-.0007228-5.08837049c-.0006381-1.59771409-1.2497012-2.9036382-2.8243181-2.99526279l-.1762503-.00513652h-15.9998924c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v19.9997571c.00038808 1.5977123 1.24926802 2.903807 2.82388326 2.9956217l.17625084.0051578 4.823918.000647-.0002682 2-4.82416099-.0006471c-2.68831483-.0010137-4.88080158-2.1230666-4.99495305-4.7836635l-.00466986-.216873v-20c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951zm-2.0001497 12c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm0 2c-3.8659932 0-7 3.1340068-7 7s3.1340068 7 7 7 7-3.1340068 7-7-3.1340068-7-7-7zm3.0160589 3.1704628 1.3678822 1.4590744-6.0172744 5.6411948-3.3506078-3.1411948 1.3678822-1.4590744 1.9820589 1.8585372z" />
            </svg>
          </div>
          <div className="font-light">
            You don’t have any guests
            <br /> checking out today
            <br /> or tomorrow.
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostingReservations
