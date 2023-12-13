import PlusButton from '@/components/util/custom-button/PlusButton';
import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type RelatedProductCardProps = FlexProps & {
	sku: string;
	image: string;
	name: string;
	weight: string;
	price: number;
};

const RelatedProductCard: FC<RelatedProductCardProps> = ({
	sku,
	image,
	name,
	weight,
	price,

	...props
}) => {
	return (
		<Flex p='8px' {...props} gap='16px'>
			<Flex flex={1}>
				<Image
					flex={1}
					objectFit='contain'
					src={image ? image : '/product-image/product-cart.png'}
					alt='related-product'
				/>
			</Flex>
			<Flex flexDir='column' flex={3}>
				<Flex justify='space-between'>
					<Text fontSize='14px' lineHeight='124%'>
						{name && name}
					</Text>

					<PlusButton aria-label='related-product' />
				</Flex>
				<Text fontSize='10px' fontWeight='600' color='logo.light' _dark={{ color: 'logo.dark' }}>
					{weight ? weight : 'Not available'}
				</Text>
				<Text fontSize='15px' fontWeight='700'>
					৳{price ? price : '500'}
				</Text>
			</Flex>
		</Flex>
	);
};

export default RelatedProductCard;
