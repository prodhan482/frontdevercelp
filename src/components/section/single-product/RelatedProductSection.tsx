import RelatedProductCard from '@/components/cards/related-product-card/RelatedProductCard';
import { useGetProductsByCategoryQuery } from '@/store/services/productApi';
import { Flex, FlexProps, Image, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type RelatedProductSectionProps = FlexProps & {};

const RelatedProductSection: FC<RelatedProductSectionProps> = () => {
	const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery({ limit: 3 });
	return (
		<Flex
			flexDir='column'
			gap='16px'
			display={{
				base: 'none',
				lg: 'flex',
			}}
		>
			<Flex flex={3} flexDir='column'>
				<Text fontSize={{ base: '20px', lg: '24px' }} fontWeight='700'>
					Related Product
				</Text>
				<Stack>
					{data?.items &&
						data?.items?.map((item: any, index: number) => (
							<RelatedProductCard
								key={index}
								name={item?.name}
								sku={item.sku}
								image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${item?.media_gallery_entries[0]?.file}`}
								price={item?.price}
								weight={item?.size}
							/>
						))}
				</Stack>
			</Flex>
			<Flex flex={1} maxH='200px'>
				<Image objectFit='cover' src='/banners/product-page-banner.png' />
			</Flex>
		</Flex>
	);
};

export default RelatedProductSection;
