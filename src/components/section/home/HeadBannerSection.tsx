import { Flex, Grid, Hide, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import ThreeRecycleSection from './ThreeRecycleSection';
import HeaderCarousel from '@/components/carousel-items/HeaderCarousel';

type HeadBannerSectionProps = {
};

const HeadBannerSection: FC<HeadBannerSectionProps> = () => {
	return (
		<Grid
			w='full'
			templateColumns='1fr 1fr 1fr'
			gap='16px'
			columnGap={{ base: '6px', lg: '16px' }}
			overflow="hidden"
			py={{ base: '18px', lg: '32px' }}>
			<Flex flex={1} gridColumn={{ base: 'span 3', lg: 'span 2' }}>
				<HeaderCarousel />
			</Flex>
			<Hide below='md'>
				<Flex display={{ base: 'none', lg: 'flex' }}>
					<Image
						flex={1}
						borderRadius='8px'
						objectFit='cover'
						src='./banners/no-pollution.png'
						alt='no-pollution'
					/>
				</Flex>
			</Hide>
			<ThreeRecycleSection />
		</Grid>
	);
};

export default HeadBannerSection;
