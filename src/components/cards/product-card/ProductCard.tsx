import CustomItemAddButton from '@/components/util/custom-button/CustomItemAddButton';
import PlusButton from '@/components/util/custom-button/PlusButton';
import CustomTag from '@/components/util/custom-tag/CustomTag';
import useCart from '@/hooks/useCart';
import { Box, Center, Flex, Image, Stack, StackProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductCardProps = StackProps & {
	name: string;
	price: number;
	size: string;
	image: string;
	ifDiscount?: boolean;
	discountBadge?: boolean;
	ifPlastic?: boolean;
	ifPlasticFree?: boolean;
	discount?: boolean;
	discountBanner?: boolean;
	variant?: 'sm-image' | 'lg-image';
	isButtonOff?: boolean;
	sku: string;
};
const ProductCard: FC<ProductCardProps> = ({
	sku,
	name,
	price,
	size,
	ifDiscount,
	discountBadge,
	image,
	ifPlastic,
	ifPlasticFree,
	discount,
	discountBanner,
	variant,
	isButtonOff,
	...props
}) => {
	const { addToCart } = useCart();

	const handleAddItem = (e: any) => {
		e.stopPropagation();
		addToCart({
			id: sku,
			name,
			price: Number(price),
			image,
		});
	};

	return (
		<Stack
			position='relative'
			cursor='pointer'
			bgColor='container.light'
			px='16px'
			py='12px'
			boxShadow='subtle-shadow'
			borderRadius='8px'
			h='fit-content'
			_dark={{
				bgColor: 'container.dark',
			}}
			{...props}
		>
			{!isButtonOff && (
				<Box position='absolute' left={0} right={0} px='16px'>
					<CustomItemAddButton id={sku} price={price} name={name} image={image} />
				</Box>
			)}
			<Flex flex={1}>
				<Center flex={1} px='24px'>
					{!variant && (
						<Image h={{ base: '100px', lg: '140px' }} src={image} alt={name} objectFit='contain' />
					)}
					{variant === 'sm-image' && (
						<Image h={{ base: '100px', lg: '100px' }} src={image} alt={name} objectFit='contain' />
					)}
				</Center>
			</Flex>
			<Flex flex={1} flexDir='column' mt='-8px' justify='space-between'>
				<Flex justify='flex-end'>{ifPlasticFree && <CustomTag variant='plastic' />}</Flex>
				<Text color='primaryLight.light' fontSize='12px' fontWeight='700'>
					In Stock
				</Text>
				<Text fontSize='16px' fontWeight='600'>
					{name}
				</Text>
				{discountBadge && <CustomTag variant='discount' />}
				<Text color='logo.light' fontSize='12px' fontWeight='600'>
					{size}
				</Text>
				<Flex gap='8px' align='center'>
					<Text fontSize='20px' fontWeight='700'>
						&#2547; {price}
					</Text>
					{ifDiscount && (
						<Text
							color='primaryDark.light'
							fontSize='16px'
							fontWeight='400'
							textDecoration='line-through'
							_dark={{
								color: 'primaryDark.dark',
								textDecorationColor: 'text.dark',
							}}
						>
							&#2547; 500
						</Text>
					)}
				</Flex>
			</Flex>
		</Stack>
	);
};

export default ProductCard;
