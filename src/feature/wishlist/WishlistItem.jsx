function WishlistItem() {
	return (
		<div className='mx-auto mt-[2rem]'>
			<div className='w-[26rem] h-[16rem] flex'>
				<div>
					<img
						className='w-[20rem] h-[16rem] rounded-tl-3xl rounded-bl-3xl hover:shadow-2xl cursor-pointer'
						src='https://img.freepik.com/free-photo/pattaya-city_1203-2712.jpg?w=2000&t=st=1665733615~exp=1665734215~hmac=2526010c52349328b0727832f7d88a57c756a91e55661fa4e349541616d8a23b'
					></img>
				</div>
				<div className='flex-colum'>
					<img
						className='w-[10rem] h-[8rem] rounded-tr-3xl hover:shadow-2xl cursor-pointer'
						src='https://img.freepik.com/free-photo/relax-couple-lay-down-beach-chiar-with-sea-wave-man-woman-have-vacation-sea-nature-concept_1150-13745.jpg?w=2000&t=st=1665733679~exp=1665734279~hmac=bcf104ce3e032a4556781e8d23de6f15a4b4ef2a6c85bf7a563bceaad0e87a4e'
					></img>

					<img
						className='w-[10rem] h-[8rem] rounded-br-3xl hover:shadow-2xl cursor-pointer'
						src='https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?w=2000&t=st=1665733695~exp=1665734295~hmac=1e872fa6e5e8d628ab9670fcfc5f4ee4e8ccea4b74ae6a7ddcad79970c3e0984'
					></img>
				</div>
			</div>
			<div className='text-[1.5rem]'>
				<h1>Test</h1>
			</div>
		</div>
	);
}

export default WishlistItem;
