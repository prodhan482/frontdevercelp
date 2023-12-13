import { Flex, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

const brandLogos = [
	{
		id: '1',
		logo: '/brand-logo/logo1.png',
	},
	{
		id: '2',
		logo: '/brand-logo/logo2.png',
	},
	{
		id: '3',
		logo: '/brand-logo/logo3.png',
	},
	{
		id: '4',
		logo: '/brand-logo/logo4.png',
	},
	{
		id: '5',
		logo: '/brand-logo/logo5.png',
	},
	{
		id: '6',
		logo: '/brand-logo/logo6.png',
	},
	{
		id: '7',
		logo: '/brand-logo/logo1.png',
	},
	{
		id: '8',
		logo: '/brand-logo/logo2.png',
	},
];

const ShopByBrandSection = () => {
	const containerBg = useColorModeValue('container.light', 'container.dark');

	return (
		<Flex direction='column' pt='24px' gap='20px'>
			<Heading fontSize={{ base: '22px', lg: '38px' }} fontWeight='700'>
				Shop By Brand
			</Heading>
			<Flex
				direction='column'
				bgColor={containerBg}
				borderRadius='4px'
				gap={{ base: '22px', lg: '40px' }}
			>
				<Flex boxShadow={{ base: 'none', lg: 'md' }} borderRadius='12px'>
					<Swiper
						slidesPerView={5}
						spaceBetween={30}
						freeMode={true}
						pagination={{
							clickable: true,
						}}
						modules={[FreeMode, Pagination]}
						className='mySwiper'
					>
						{brandLogos.map(({ id, logo }) => (
							<SwiperSlide key={id}>
								<Flex
									userSelect='none'
									alignItems='center'
									justifyContent='center'
									h={{ base: '140px', lg: '250px' }}
								>
									<Image width={160} height={140} src={logo} alt='brand-logo' />
								</Flex>
							</SwiperSlide>
						))}
					</Swiper>
				</Flex>
				<Grid
					templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
					gap={{ base: '8px', lg: '16px' }}
					p={{ base: '12px', lg: '20px' }}
				>
					<Flex alignItems='center' justifyContent='center'>
						<Image height={203} width={518} src='/brand-logo/banner1.png' alt='banner' />
					</Flex>
					<Flex alignItems='center' justifyContent='center'>
						<Image height={203} width={518} src='/brand-logo/banner2.png' alt='banner' />
					</Flex>
				</Grid>
			</Flex>
		</Flex>
	);
};

export default ShopByBrandSection;
