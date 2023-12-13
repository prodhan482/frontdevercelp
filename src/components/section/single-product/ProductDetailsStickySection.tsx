import CustomButton from '@/components/util/custom-button/CustomButton';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductInfoProps = {
	price?: number;
};

const ProductDetailsStickySection: FC<ProductInfoProps> = ({ price }) => {
	const textColor = useColorModeValue('line-through.light', 'line-through.dark');
	const bgColor = useColorModeValue('footer.light', 'footer.dark');
	return (
		<Flex
			w='full'
			zIndex='99'
			position='fixed'
			left={0}
			bottom={0}
			display={{ base: 'none', md: 'flex' }}
			alignItems='center'
			justifyContent='space-between'
			bgColor={bgColor}
			px='27px'
			py='11px'
		>
			<Text color={textColor} fontSize='28px' fontWeight='600'>
				Broiler Chicken Drumsticks (± 50gm) 1kg
			</Text>

			<Flex alignItems='center' justifyContent='space-evenly' gap='44px'>
				<Flex alignItems='center' borderRight='2px solid grey' pr='44px' gap='16px'>
					<Text fontSize='40px' fontWeight='700'>
						&#2547;{price}
					</Text>
					<Text
						color='primaryDark.light'
						fontSize='24px'
						fontWeight='700'
						textDecoration='line-through'
						textDecorationColor='line-through.light'
						_dark={{
							color: 'primaryDark.dark',
							textDecorationColor: 'line-through.dark',
						}}
					>
						&#2547;500
					</Text>
				</Flex>

				<CustomButton flex={{ base: 6, lg: 1 }} variant='add-cart' label='Add To Cart' />
			</Flex>
		</Flex>
	);
};

export default ProductDetailsStickySection;
