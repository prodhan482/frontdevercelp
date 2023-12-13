import PlusButton from '@/components/util/custom-button/PlusButton';
import { Flex, Image, Stack, StackProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductCard2Props = StackProps & {
	name: string;
	price: string;
};

const ProductCard2: FC<ProductCard2Props> = ({ name, price, ...props }) => {
	return (
		<Stack {...props}>
			<Image
				borderRadius='12px'
				objectFit='cover'
				src='./product-image/product-cart.png'
				alt='product-cart'
			/>
			<Stack
				mx={{ base: '10px', lg: '16px' }}
				p={{ base: '8px', lg: '12px' }}
				mt={{ base: '-60%', lg: '-20%' }}
				boxShadow='0px 5px 20px 0px rgba(68, 68, 68, 0.05)'
				borderRadius='8px'
				bgColor='container.light'
				_dark={{ bgColor: 'container.dark' }}
			>
				<Text
					fontSize={{ base: '14px', lg: '16px' }}
					fontWeight='700'
					w={{ base: '100%', lg: '70%' }}
				>
					{name}
				</Text>
				<Flex justify='space-between'>
					<Flex gap='4px' align='center'>
						<Text
							fontSize={{ base: '16px', lg: '20px' }}
							fontWeight='700'
							lineHeight='24px'
							color='#0DB04B'
						>
							&#2547; {price}
						</Text>
						<Text
							fontSize={{ base: '12px', lg: '14px' }}
							color='#11823B'
							textDecoration='line-through'
							textDecorationColor='#FF2200'
						>
							&#2547; 300
						</Text>
					</Flex>
					<PlusButton aria-label='product2-plus' />
				</Flex>
			</Stack>
		</Stack>
	);
};

export default ProductCard2;
