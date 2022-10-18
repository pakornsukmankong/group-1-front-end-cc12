import WhitelisItem from './WhitelisItem';

function WhitelistContainer() {

	return (
		<>
			<div className='mx-[5rem]'>
				<div className='text-[2rem] mt-[1rem]'>
					<h1 className='my-auto'>Whitelists</h1>
				</div>
				<div className='grid grid-cols-3 content-center'>
					<WhitelisItem />
					<WhitelisItem />
					<WhitelisItem />
					<WhitelisItem />
					<WhitelisItem />
					<WhitelisItem />
					<WhitelisItem />
				</div>
			</div>
		</>
	);
}

export default WhitelistContainer;

