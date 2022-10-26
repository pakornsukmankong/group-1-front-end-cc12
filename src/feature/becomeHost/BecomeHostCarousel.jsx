import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ display: 'block', background: 'gray', borderRadius: '10px' }}
			onClick={onClick}
		/>
	);
}
function SamplePrevArrow(props) {
	const { className, onClick } = props;
	console.log(className);
	return (
		<div
			className={className + ' text-blue-600'}
			style={{
				display: 'flex',
				background: 'gray',
				borderRadius: '10px',
			}}
			onClick={onClick}
		/>
	);
}

function BecomeHostCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	const mockData = [
		{
			img: 'https://img.freepik.com/free-photo/tourist-sitting-phu-sub-lek-viewpoint-sunset-lopburi-thailand_335224-1390.jpg?w=1380&t=st=1666683748~exp=1666684348~hmac=31545e4ed187b42ca73e230bc3a142447eb1db956df1624bb3615a8314258886',
			description:
				'Hosting my studio changed my life and gifted me with memorable experiences and people.',
			img2: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
			host: 'Host in Milan',
		},
		{
			img: 'https://img.freepik.com/free-photo/traveler-backpacker-asian-woman-blogger-spending-holiday-trip-amazing-landmark-enjoy-her-journey_7861-1024.jpg?w=1380&t=st=1666683770~exp=1666684370~hmac=8dace7a7ee8ae8639b219601b9fd2d300d2aace783289f71e9ffa8bcd1d5bb97',
			description:
				'Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.',
			img2: 'https://a0.muscache.com/im/pictures/b0123613-6e48-4108-af8b-bb2d347b4de8.jpg?im_w=240',
			host: 'Host in Atlanta',
		},
		{
			img: 'https://img.freepik.com/free-photo/young-friends-traveling-through-japan_23-2149287970.jpg?w=1380&t=st=1666683822~exp=1666684422~hmac=b30c2c866615ce0f37ae34cbf93e57ddbfc3288d5ad6ed4e14e80767bf41687c',
			description:
				'We’re able to keep our culture alive by hosting our pasta-making experience.',
			img2: 'https://a0.muscache.com/im/pictures/4314911d-559f-4fc7-a493-2edce264d839.jpg?im_w=240',
			host: 'Host in Palombara Sabina',
		},
		{
			img: 'https://img.freepik.com/free-photo/side-view-smiley-friends-traveling-together_23-2149536699.jpg?w=1380&t=st=1666683715~exp=1666684315~hmac=e68aa55a4fdaa31bd3643b1f208d209892dddb14f686458667561f23f03a3831',
			description:
				'Airbnb has allowed me to create my own job doing what I love — taking care of guests in our home.',
			img2: 'https://a0.muscache.com/im/pictures/80b16be2-f6bf-4a68-846f-b35d4b85c455.jpg?im_w=240',
			host: 'Host in Chiang Mai',
		},
		{
			img: 'https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?w=1380&t=st=1666683675~exp=1666684275~hmac=79b8c1941e871dad6968f6c355f17dba81bfd0a9b0667d6265330cc859bfc051',
			description:
				'Hosting my bedouin tent has introduced me to people around the world.',
			img2: 'https://a0.muscache.com/im/pictures/82a3e33e-a83e-49e8-b642-0de04018075b.jpg?im_w=240',
			host: 'Host in Wadi Rum',
		},
		{
			img: 'https://img.freepik.com/premium-photo/young-vietnamese-woman-isolated-white-background-vacation-with-suitcase-passport_1368-269816.jpg?w=1380',
			description:
				'I love hosting my eco-home so people can connect with nature and their loved ones.',
			img2: 'https://a0.muscache.com/im/pictures/62dccc5f-5fa6-4e24-8406-8ced33d1c403.jpg?im_w=240',
			host: 'Host in Paraty',
		},
	];

	return (
		<div>
			<div className='text-5xl font-semibold text-center mt-[80px]'>
				You can host
				<br />
				anything, anywhere
			</div>

			{/* div1 */}
			<div className='mx-[3rem] mt-[1.5rem]'>
				<Slider {...settings}>
					{mockData.map((item) => (
						<div className='gap-5 w-[30rem] flex'>
							<div className=''>
								<img src={item.img} className='w-[35rem] shadow-2xl'></img>
							</div>
							<div className='my-[1.5rem] w-[30rem]'>
								<p className='font-light text-2xl'>{item.description}</p>
							</div>
							<div className='w-[35rem]'>
								<img src={item.img2} className='w-[5rem]'></img>
							</div>
							<div className='text-gray-400 w-[35rem] mt-[1.5rem]'>
								{item.host}
							</div>
						</div>
					))}
				</Slider>
			</div>

			{/* div 1 end  */}
		</div>
	);
}

export default BecomeHostCarousel;
