import React, { FC } from 'react';
import { Flex, FlexProps, Stack, Text } from '@chakra-ui/react';
import RecycleAnimation1 from './RecycleAnimation1';
import RecycleAnimation2 from './RecycleAnimation2';
import RecycleAnimation3 from './RecycleAnimation3';

const ThreeRecycleSection = () => {
	return (
		<>
			<RecycleAnimation1 title='20k Ton' subtitle='co2 emmission reduced.' />
			<RecycleAnimation2 title='10k Ton' subtitle='Plastic Recycled' />
			<RecycleAnimation3 title='500.000' subtitle='Ocean Lives saved' />
			{/* <ColoredRecycle
				justify={{ base: '', lg: '' }}
				align={{ base: 'flex-end', lg: 'center' }}
				bgColor='#F87C56'
				title='20k Ton'
				subtitle='co2 emmission reduced.'
			/>
			<ColoredRecycle
				justify={{ base: '', lg: '' }}
				align={{ base: 'flex-end', lg: 'center' }}
				bgColor='#94BB50'
				title='10k Ton'
				subtitle='Plastic Recycled'
			/>
			<ColoredRecycle
				justify={{ base: '', lg: '' }}
				align={{ base: '', lg: 'center' }}
				bgColor='#42B6E7'
				title='500.000'
				subtitle='Ocean Lives saved'
			/> */}
		</>
	);
};

// type ColoredRecycleProps = FlexProps & {
// 	title: string;
// 	subtitle: string;
// };

// const ColoredRecycle: FC<ColoredRecycleProps> = ({ title, subtitle, ...props }) => {
// 	return (
// 		<Flex
// 			h={{ base: '140px', lg: '164px' }}
// 			borderRadius='8px'
// 			px={{ base: '12px', lg: '32px' }}
// 			py={{ base: '12px', lg: '32px' }}
// 			{...props}>
// 			<Stack spacing={0}>
// 				<Text
// 					fontSize={{ base: '18px', lg: '34px' }}
// 					fontWeight='700'
// 					color='container.light'
// 					_dark={{
// 						color: 'container.dark',
// 					}}>
// 					{title}
// 				</Text>
// 				<Text
// 					w={{ base: '85px', lg: 'auto' }}
// 					fontSize={{ base: '12px', lg: '24px' }}
// 					fontWeight='600'
// 					color='container.light'
// 					_dark={{
// 						color: 'container.dark',
// 					}}>
// 					{subtitle}
// 				</Text>
// 			</Stack>
// 		</Flex>
// 	);
// };

export default ThreeRecycleSection;
