import CustomButton from '@/components/util/custom-button/CustomButton';
import {
	CloseButton,
	Flex,
	Grid,
	Hide,
	Image,
	Show,
	Stack,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type WishListCardProps = {
	image: string;
	name: string;
	price: number;
	discount: number;
	stockStatus: string;
	isAdded: boolean;
	// variant?: 'wishlist' | 'wishlist-mobile' | string;
};

const WishListCard: FC<WishListCardProps> = ({
	image,
	name,
	price,
	discount,
	stockStatus,
	isAdded,
	// variant,
}) => {
	const imageContent = (
		<Flex w='90%'>
			<Image
				w='134px'
				h='115px'
				flex={1}
				objectFit='contain'
				src={image}
				alt={name}
			/>
		</Flex>
	);

	const nameContent = <Text fontSize='20px'>{name}</Text>;

	const priceContent = (
		<Flex align='center' gap='16px'>
			<Text fontSize='18px' fontWeight='600'>
				&#2547; {price}
			</Text>
			<Text
				fontSize={{ base: '12px', lg: '14px' }}
				color='#11823B'
				textDecoration='line-through'
				textDecorationColor='#FF2200'
			>
				&#2547; {discount}
			</Text>
		</Flex>
	);

	const statusContent = (
		<>
			{stockStatus === 'In Stock' && (
				<Text fontSize='16px' fontWeight='600' color='primaryLight.light'>
					{stockStatus}
				</Text>
			)}
			{stockStatus === 'Out of Stock' && (
				<Text fontSize='16px' fontWeight='600' color='#EB5757'>
					{stockStatus}
				</Text>
			)}
		</>
	);

	return (
		<>
			<Hide below='lg'>
				<Grid
					templateColumns='1fr 2fr 2fr 2fr 2fr 2fr'
					gap='74px'
					css={{ alignItems: 'center', justifyContent: 'center' }}
				>
					<CloseButton size='lg' />
					{imageContent}
					{nameContent}
					{priceContent}
					{statusContent}
					<CustomButton variant='add-wishlist' label='Add to Cart' />
				</Grid>
			</Hide>

			<Show below='lg'>
				<Flex flexDir='column' gap='16px'>
					<Flex justifyContent='space-between'>
						{imageContent}
						<CloseButton size='lg' />
					</Flex>
					{nameContent}
					<Flex justify='space-between' align='flex-end' gap='10px'>
						<Stack spacing='0'>
							{statusContent}
							{priceContent}
						</Stack>
						<CustomButton variant='add-wishlist' label='Add to Cart' />
					</Flex>
				</Flex>
			</Show>
		</>
	);
};

export default WishListCard;
