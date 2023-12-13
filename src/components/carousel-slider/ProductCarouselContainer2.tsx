'use client';
import { Flex, Heading, Show, Stack, Text } from '@chakra-ui/react';
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
import ProductCard2 from '../cards/product-card-2/ProductCard2';

type ProductCarouselContainer2Props = {
	title: string;
	productList?: Array<any>;
};

const ProductCarouselContainer2: FC<ProductCarouselContainer2Props> = ({
	title,
	productList,

	...props
}) => {
	const router = useRouter();
	const swiperRef: any = useRef();

	const handleSwipeNext = () => {
		swiperRef?.current?.slideNext();
	};
	const handleSwipePrev = () => {
		swiperRef?.current?.slidePrev();
	};

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
							slidesPerView: 4,
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
					{!productList && (
						<>
							<SwiperSlide>
								<ProductCardSkeleton />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCardSkeleton />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCardSkeleton />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCardSkeleton />
							</SwiperSlide>
						</>
					)}

					{productList &&
						productList.map((product, index) => (
							<SwiperSlide key={index}>
								<ProductCard2 name={product.name} price={product.price} h='inherit' />
							</SwiperSlide>
						))}
				</Swiper>
			</Flex>
		</Stack>
	);
};

export default ProductCarouselContainer2;
