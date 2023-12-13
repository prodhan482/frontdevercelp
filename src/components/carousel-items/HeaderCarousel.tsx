import { Image, Skeleton } from '@chakra-ui/react';
import React, { FC } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper styles
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetBannersQuery } from '@/store/services/homePageApi';
import { Banner } from '@/store/services/types';
import { useGetTestHomeSliderDataQuery } from '@/store/services/testHomeApi';

type HeaderCarouselProps = {};

const HeaderCarousel: FC<HeaderCarouselProps> = () => {
	const { data, isLoading,isSuccess } = useGetTestHomeSliderDataQuery({});
	return (
		<>
			{isLoading && <Skeleton flex={1} borderRadius='8px' />}
			{isSuccess && (
				<Swiper
					pagination={true}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Pagination, Autoplay]}
				>
					{data&&
						data?.map((item: Banner, index: number) => {
							return (
								<SwiperSlide key={index}>
									<Image
										borderRadius='8px'
										objectFit='cover'
										w='full'
										src={`https://bazar365-test.sgp1.digitaloceanspaces.com/${item.image}`}
										alt={`${item.id} banner`}
									/>
								</SwiperSlide>
							);
						})}
				</Swiper>
			)}
		</>
	);
};

export default HeaderCarousel;
