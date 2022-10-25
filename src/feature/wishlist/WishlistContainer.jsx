import { useProperty } from '../../contexts/PropertyContext';
import WishlistItem from './WishlistItem';

function WishlistContainer() {
	const { wishList } = useProperty();
	// console.log(wishList);
	return (
		<>
			<div className='mx-[5rem]'>
				<div className='text-[2rem] mt-[1rem]'>
					<h1 className='my-auto'>Wishlists</h1>
				</div>
				<div className='grid grid-cols-1 gap-10 mt-5 md:grid-cols-3'>
					{wishList?.map((property) => (
						<WishlistItem key={property.id} property={property} />
					))}
				</div>
			</div>
		</>
	);
}

export default WishlistContainer;
