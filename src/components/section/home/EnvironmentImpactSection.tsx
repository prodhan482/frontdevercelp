import { Flex, Grid, Image, Stack, Text } from '@chakra-ui/react';
import ThreeRecycleSection from './ThreeRecycleSection';

const EnvironmentImpactSection = () => {
	const title = 'Our Impact by the numbers';
	const description =
		"through your support, we're not just revolutionizing e-commerce; we're actively contributing to a more sustainable future.";

	return (
		<Stack
			my={{ base: '24px', lg: '48px' }}
			px={{ base: '8px', lg: '12px' }}
			py={{ base: '18px', lg: '32px' }}
			w='full'
			borderRadius='8px'
			spacing='48px'
			bgColor='container.light'
			_dark={{
				bgColor: 'container.dark',
			}}
			boxShadow='subtle-shadow'
		>
			<Grid templateColumns='1fr 1fr 1fr' gap='16px' columnGap={{ base: '6px', lg: '16px' }}>
				<ThreeRecycleSection />
			</Grid>
			<Grid templateColumns='1fr 1fr 1fr' gap='16px' columnGap={{ base: '6px', lg: '16px' }}>
				<Flex flex={1} justify='center' align='bottom'>
					<Image objectFit='cover' src='./banners/recycle.svg' alt='recycle' />
				</Flex>
				<Stack gridColumn='span 2'>
					<Text
						w='70%'
						fontSize='54px'
						lineHeight='90%'
						fontWeight='700'
						color='banner-text.light'
						_dark={{
							color: 'banner-text.dark',
						}}
					>
						{title}
					</Text>
					<Text
						w='80%'
						fontSize='24px'
						fontWeight='400'
						lineHeight='154%'
						color='banner-text.light'
						_dark={{
							color: 'banner-text.dark',
						}}
					>
						{description}
					</Text>
				</Stack>
			</Grid>
		</Stack>
	);
};

export default EnvironmentImpactSection;
