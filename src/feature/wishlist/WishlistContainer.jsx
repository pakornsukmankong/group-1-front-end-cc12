import WishlistItem from './WishlistItem';

function WishlistContainer() {
	return (
		<>
			<div className='mx-[5rem]'>
				<div className='text-[2rem] mt-[1rem]'>
					<h1 className='my-auto'>Wishlist</h1>
				</div>
				<div className='grid grid-cols-3 content-center'>
					<WishlistItem />
					<WishlistItem />
					<WishlistItem />
					<WishlistItem />
					<WishlistItem />
					<WishlistItem />
					<WishlistItem />
				</div>
			</div>
		</>
	);
}

export default WishlistContainer;
