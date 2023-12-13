'use client';
import HeadBannerSection from '@/components/section/home/HeadBannerSection';
import StaticBannerSection from '@/components/section/home/StaticBannerSection';
import PageLayout from '@/components/layout/PageLayout';
import BasePadding from '@/components/util/base-padding/BasePadding';
import React from 'react';
import EnvironmentImpactSection from '@/components/section/home/EnvironmentImpactSection';
import ProductCarouselContainer from '@/components/carousel-slider/ProductCarouselContainer';
import { Flex } from '@chakra-ui/react';
import MobileCategory from '@/components/category/MobileCategory';
import { useGetProductsByCategoryQuery } from '@/store/services/productApi';
import ArticleSection from '@/components/section/home/ArticleSection';
import ShopByBrandSection from '@/components/section/home/ShopByBrandSection';
import ProductCarouselContainer2 from '@/components/carousel-slider/ProductCarouselContainer2';
import { products } from '@/lib/dummyProducts';
import ProductCarouselBannerContainer from '@/components/carousel-slider/ProductCarouselBannerContainer';

export default function Home() {
	const { data: data1, isLoading: isLoading1 } = useGetProductsByCategoryQuery({ categoryId: 71 });
	const { data: data2, isLoading: isLoading2 } = useGetProductsByCategoryQuery({
		categoryId: 1016,
	});
	const { data: data3, isLoading: isLoading3 } = useGetProductsByCategoryQuery({
		categoryId: 1251,
	});
	const { data: data4, isLoading: isLoading4 } = useGetProductsByCategoryQuery({
		categoryId: 1245,
	});
	const { data: data5, isLoading: isLoading5 } = useGetProductsByCategoryQuery({ categoryId: 493 });


	return (
		<PageLayout isHome>
			<BasePadding flexDir='column' w='full'>
				<HeadBannerSection/>
				<MobileCategory />
				<ProductCarouselContainer
					isLoading={isLoading1}
					productList={data1?.items}
					title='Daily Offers'
				/>
				<ProductCarouselContainer
					isLoading={isLoading2}
					productList={data2?.items}
					title='Daily Offers'
				/>
				<ProductCarouselContainer2 title='Hot Deals' productList={products} />
				<StaticBannerSection />
				<ProductCarouselContainer
					isLoading={isLoading3}
					productList={data3?.items}
					title='Daily Offers'
				/>
				<ProductCarouselContainer2 title='Hot Deals' productList={products} />
				<StaticBannerSection />
				<ProductCarouselContainer
					isLoading={isLoading4}
					title='Popular Products'
					productList={data4?.items}
				/>
				<ProductCarouselContainer
					isLoading={isLoading5}
					title='Daily Offers'
					productList={data5?.items}
				/>
				<Flex display={{ base: 'none', lg: 'flex' }}>
					<EnvironmentImpactSection />
				</Flex>
				<ProductCarouselContainer
					isLoading={isLoading1}
					title='Hourly Offers'
					productList={data1?.items}
				/>
				<ProductCarouselBannerContainer title='Limited Offers' />
				<StaticBannerSection />
				<ProductCarouselContainer
					isLoading={isLoading2}
					title='Hourly Offers'
					productList={data2?.items}
				/>
				<ArticleSection />
				<ShopByBrandSection />
			</BasePadding>
		</PageLayout>
	);
}
