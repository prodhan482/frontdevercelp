'use client';

import { NextPage } from 'next';
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import BasePadding from '@/components/util/base-padding/BasePadding';
import { Flex, Grid, Image } from '@chakra-ui/react';

import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import ProductInfo from '@/components/section/single-product/ProductInfo';
import RelatedProductSection from '@/components/section/single-product/RelatedProductSection';
import { useAppSelector } from '@/store/slices/hooks';
import ProductDescriptionSection from '@/components/section/single-product/ProductDescriptionSection';
import ProductCarouselContainer from '@/components/carousel-slider/ProductCarouselContainer';
import {
	useGetProductsByCategoryQuery,
	useGetSearchProductsQuery,
} from '@/store/services/productApi';
import { usePathname } from 'next/navigation';
import ProductDetailsStickySection from '@/components/section/single-product/ProductDetailsStickySection';

type ProductPageProps = {
	params: {
		id: string;
	};
};

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
	const sideIsOpen = useAppSelector((state) => state.sidebar.isOpen);

	const { data, isLoading, isSuccess, isError } = useGetSearchProductsQuery({ ids: params.id });
	const {
		data: moreProducts,
		isLoading: productsIsLoading,
		isError: productsIsError,
		isSuccess: productsIsSuccess,
	} = useGetProductsByCategoryQuery({});
	const path = usePathname();

	return (
		<PageLayout>
			<BasePadding gap='12px'>
				<CustomBreadcrumb link={path} />
				<Grid
					templateColumns={{ base: '1fr', lg: sideIsOpen ? '1fr' : '9fr 3fr' }}
					gap='45px'
					py={{ base: '16px', lg: '32px' }}
				>
					<Grid templateColumns={{ base: '1fr', lg: '4fr 5fr' }} gap={{ base: '24px', lg: '45px' }}>
						<Flex flex={1} align='flex-start'>
							<Image
								flex={1}
								objectFit='contain'
								src={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${data?.items[0]?.media_gallery_entries[0]?.file}`}
								alt='product-image-item'
							/>
						</Flex>
						<ProductInfo
							name={data?.items[0]?.name}
							price={data?.items[0]?.price}
							sku={data?.items[0]?.sku}
							image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${data?.items[0]?.media_gallery_entries[0]?.file}`}
							isStock={data?.items[0]?.extension_attributes?.stock_item?.is_in_stock}
						/>
					</Grid>

					{!sideIsOpen && <RelatedProductSection />}
				</Grid>

				{/* Scroll section did not implemented yet */}

				<ProductDescriptionSection />

				<ProductCarouselContainer title='Daily Offers' productList={moreProducts?.items} />
			</BasePadding>
			
		</PageLayout>
	);
};

export default ProductPage;
