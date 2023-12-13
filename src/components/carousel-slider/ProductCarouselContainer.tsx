'use client';
import { Flex, Grid, Heading, Show, Stack, Text } from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import ProductCard from '../cards/product-card/ProductCard';
import CustomIconButton from '../util/custom-icon-button/CustomIconButton';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import ProductCardSkeleton from '../skeletons/product-card-skeleton/ProductCardSkeleton';

type ProductCarouselContainerProps = {
	title: string;
	productList?: Array<any>;
	isLoading?: boolean;
};

const ProductCarouselContainer: FC<ProductCarouselContainerProps> = ({
	title,
	productList,
	isLoading,
	...props
}) => {
	const router = useRouter();
	const swiperRef: any = useRef();

	const handleSwipeNext = () => {
		swiperRef?.current?.slideNext();
		swiperRef?.current?.slideNext();
		swiperRef?.current?.slideNext();
		swiperRef?.current?.slideNext();
	};
	const handleSwipePrev = () => {
		swiperRef?.current?.slidePrev();
		swiperRef?.current?.slidePrev();
		swiperRef?.current?.slidePrev();
		swiperRef?.current?.slidePrev();
	};

	const carouselSkeleton = (
		<Grid templateColumns={{ base: '1fr 1fr', lg: 'repeat(5, 2fr)' }} gap='16px' w='full'>
			<ProductCardSkeleton />
			<ProductCardSkeleton />
			<ProductCardSkeleton />
			<ProductCardSkeleton />
			<ProductCardSkeleton />
		</Grid>
	);

	return (
		<Stack py={{ base: '18px', lg: '32px' }} w='full'>
			<Flex justify='space-between' w='full'>
				<Flex
					justify={{ base: 'space-between', lg: 'flex-start' }}
					align='center'
					gap='16px'
					w='full'
				>
					<Heading fontSize={{ base: '22px', lg: '38px' }} fontWeight='700'>
						{title}
					</Heading>
					{!isLoading && (
						<Flex gap='8px'>
							<CustomIconButton
								onClick={handleSwipePrev}
								icon={<HiChevronLeft size='20px' />}
								aria-label='less-than'
							/>
							<CustomIconButton
								onClick={handleSwipeNext}
								icon={<HiChevronRight size='20px' />}
								aria-label='less-than'
							/>
						</Flex>
					)}
				</Flex>
				<Show above='md'>
					<Flex gap='8px' align='center' minW='fit-content'>
						<Text
							fontSize='16px'
							fontWeight='600'
							cursor='pointer'
							_hover={{
								textDecoration: 'underline',
							}}
						>
							View All(40+)
						</Text>
						<HiChevronRight />
					</Flex>
				</Show>
			</Flex>

			<Flex
				maxW={{
					base: 'calc(100vw - 32px)',
					md: 'calc(100vw - 64px)',
					xl: 'calc(100vw - 120px)',
				}}
				flex={1}
			>
				{isLoading ? (
					carouselSkeleton
				) : (
					<Swiper
						slidesPerView='auto'
						style={{ width: '100%' }}
						breakpoints={{
							0: {
								slidesPerView: 2,
								spaceBetween: 8,
							},
							780: {
								slidesPerView: 3,
								spaceBetween: 16,
							},
							840: {
								slidesPerView: 4,
								spaceBetween: 16,
							},
							1200: {
								slidesPerView: 5,
								spaceBetween: 16,
							},
						}}
						onSwiper={(swiper) => {
							swiperRef.current = swiper;
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Navigation]}
					>
						{productList &&
							productList.map((product, index) => (
								<SwiperSlide key={index}>
									<ProductCard
										sku={product.sku}
										name={product.name}
										price={product.price}
										size={product.size}
										image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${product?.media_gallery_entries[0]?.file}`}
										ifPlasticFree={product.ifPlasticFree}
										onClick={() => router.push(`/product/${product.id}`)}
										h='inherit'
									/>
								</SwiperSlide>
							))}
					</Swiper>
				)}
			</Flex>
		</Stack>
	);
};

export default ProductCarouselContainer;
