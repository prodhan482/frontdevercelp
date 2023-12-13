import CustomTag from '@/components/util/custom-tag/CustomTag';
import CustomButton from '@/components/util/custom-button/CustomButton';
import { Flex, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import CustomItemAddButton from '@/components/util/custom-button/CustomItemAddButton';
import useProductInCart from '@/hooks/useProductInCart';
import useCart from '@/hooks/useCart';
import ProductDetailsStickySection from './ProductDetailsStickySection';
import { useInView } from 'framer-motion';
import AddToCartButton from '@/components/util/custom-button/AddToCartButton';

type ProductInfoProps = {
	name: string;
	price: number;
	sku: string;
	image: string;
	isStock?: boolean;
};

const ProductInfo: FC<ProductInfoProps> = ({ name, price, sku, image, isStock }) => {
	const { qty } = useProductInCart(sku);
	const { addToCart, deleteSingleItemFromCart, deleteOneFromCart } = useCart();

	const ref = React.useRef(null);
	const isInView = useInView(ref);
	const textColor = useColorModeValue('text.dark', 'text.light');

	const handleAddItem = () => {
		addToCart({
			id: sku,
			name,
			price,
			image,
		});
	};

	const handleDeleteOneItem = () => {
		deleteOneFromCart({ id: sku });
	};

	const handleDeleteSingleItem = () => {
		deleteSingleItemFromCart({ id: sku });
	};

	const cartButtonPrice = (
		<Text
			display={{ base: 'block', lg: 'none' }}
			color={textColor}
			fontSize='12px'
			fontWeight='400'
		>
			&#2547;{price}
		</Text>
	);
	return (
		<>
			<Flex flexDir='column' gap='8px'>
				<Heading
					fontSize={{ base: '28px', lg: '36px' }}
					fontWeight='600'
					lineHeight='118%'
					letterSpacing='-0.36px'
					w='90%'
				>
					{name}
				</Heading>
				<CustomTag variant='discount' label='80S Plastic' fontSize='16px' fontWeight='700' />
				<Flex gap='16px' align='center'>
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
						&#2547; 500
					</Text>
				</Flex>
				<Grid
					ref={ref}
					templateColumns={{ base: '6fr 1fr', lg: '1fr 1fr' }}
					gap={{ base: '8px', lg: '0' }}
				>
					<CustomButton
						rightIcon={cartButtonPrice}
						flex={{ base: 6, lg: 1 }}
						variant='add-cart'
						label='Add To Cart'
						justifyContent={{ base: 'space-between', lg: 'center' }}
					/>
					{/* <AddToCartButton qty={qty} label='Add To Cart' /> */}

					<CustomButton
						display={{ base: 'none', lg: 'block' }}
						flex={{ base: 1, lg: 1 }}
						variant='wishlist'
						label='Add to Wishlist'
					/>
					<CustomButton
						display={{ base: 'block', lg: 'none' }}
						flex={{ base: 1, lg: 1 }}
						variant='wishlist-mobile'
					/>
				</Grid>
				<Grid templateColumns='1fr 3fr' w={{ base: '100%', lg: '80%' }} rowGap='14px' my='32px'>
					<Text fontSize='14px' fontWeight='700'>
						Stock
					</Text>
					<Text
						fontSize='14px'
						fontWeight='700'
						color='primaryDark.light'
						_dark={{ color: 'primaryDark.dark' }}
					>
						{isStock ? 'In Stock' : 'Out of Stock'}
					</Text>
					<Text fontSize='14px' fontWeight='700'>
						SKU
					</Text>
					<Text fontSize='14px' fontWeight='700' color='#777777'>
						{sku}
					</Text>
					<Text fontSize='14px' fontWeight='700'>
						Category
					</Text>
					<Flex flexWrap='wrap' gap='4px'>
						<CustomTag variant='product-category' label='Cleaning supplies' />
						<CustomTag variant='product-category' label='Floor & Glass Cleaners' />
						<CustomTag variant='product-category' label='Offer' />
						<CustomTag variant='product-category' label='BOGO' />
					</Flex>
					<Text fontSize='14px' lineHeight='130%' my='32px' gridColumn='span 2'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in.
					</Text>
				</Grid>
			</Flex>
			{!isInView && <ProductDetailsStickySection price={price} />}
		</>
	);
};

export default ProductInfo;
