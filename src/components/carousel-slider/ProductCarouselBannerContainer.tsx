'use client';
import { Flex, Grid, Show, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ProductCard from '../cards/product-card/ProductCard';
import { HiChevronRight } from 'react-icons/hi';
import { productsCarouselData } from '@/lib/dummyProducts';
import DiscountCountdownBanner from '../banners/discount-countdown-banner/DiscountCountdownBanner';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { useGetProductsByCategoryQuery } from '@/store/services/productApi';
import { useRouter } from 'next/navigation';
import ProductCardSkeleton from '../skeletons/product-card-skeleton/ProductCardSkeleton';

type ProductCarouselContainerProps = {
	title: string;
	productList?: React.ReactNode;
	numOfProducts?: number;
};

const ProductCarouselBannerContainer: FC<ProductCarouselContainerProps> = ({ title }) => {
	const router = useRouter();
	const { data: productList, isLoading } = useGetProductsByCategoryQuery({
		limit: 6,
		categoryId: 753,
	});

	const skeleton = (
		<>
			{Array.from({ length: 6 }, (_, index) => (
				<ProductCardSkeleton key={index} />
			))}
		</>
	);
	const headerSection = (
		<Flex justify='space-between' w='full'>
			<Flex
				justify={{ base: 'space-between', lg: 'flex-start' }}
				align='center'
				gap='16px'
				w='full'
			>
				<Text fontSize={{ base: '22px', lg: '38px' }} fontWeight='700'>
					{title}
				</Text>
			</Flex>
			<Show above='md'>
				<Flex gap='8px' align='center' minW='fit-content'>
					<Text fontSize='16px' fontWeight='600'>
						View All(40+)
					</Text>
					<HiChevronRight />
				</Flex>
			</Show>
		</Flex>
	);

	const carouselSection = (
		<Grid templateColumns={{ base: '2fr 2fr', lg: 'repeat(3, 2fr)' }} gap='16px'>
			{isLoading && skeleton}
			{productList?.items &&
				productList?.items?.map((product: any, index: number) => (
					<ProductCard
						key={index}
						sku={product.sku}
						name={product.name}
						price={product.price}
						size={product.size}
						image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${product?.media_gallery_entries[0]?.file}`}
						ifPlasticFree={product.ifPlasticFree}
						onClick={() => router.push(`/product/${product.id}`)}
						h='inherit'
					/>
				))}
		</Grid>
	);

	return (
		<Flex flexDir='column' py={{ base: '18px', lg: '32px' }} w='full'>
			{headerSection}

			<Grid templateColumns={{ base: '1fr', lg: '4fr 6fr' }} gap='16px' padding='0'>
				<DiscountCountdownBanner />

				{carouselSection}
			</Grid>
		</Flex>
	);
};

export default ProductCarouselBannerContainer;
