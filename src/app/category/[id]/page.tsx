'use client';
import BrowseCategory from '@/components/accordion/browse-category/BrowseCategory';
import ProductCard from '@/components/cards/product-card/ProductCard';
import PageLayout from '@/components/layout/PageLayout';
import Pagination from '@/components/pagination/Pagination';
import CategorySorting from '@/components/section/single-category/CategorySorting';
import ProductCardSkeleton from '@/components/skeletons/product-card-skeleton/ProductCardSkeleton';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { useGetProductsByCategoryQuery } from '@/store/services/productApi';
import { useAppDispatch } from '@/store/slices/hooks';
import { resetSidebar } from '@/store/slices/sidebarSlice';
import { Flex, Grid } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type SingleCategoryPageProps = {
	params: {
		id: string;
		categoryName?: string;
	};
	searchParams: any;
};

const SingleCategoryPage: NextPage<SingleCategoryPageProps> = ({ params, searchParams }) => {
	const categoryId = params.id;
	// const categoryName = params.categoryName;
	const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery({
		categoryId: categoryId,
		limit: 16,
	});
	const router = useRouter();
	// const { categoryName } = router;
	// console.log(searchParams);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(resetSidebar());
	}, []);

	const skeleton = (
		<>
			{Array.from({ length: 16 }, (_, index) => (
				<ProductCardSkeleton key={index} />
			))}
		</>
	);

	return (
		<PageLayout>
			<BasePadding gap='12px'>
				<CustomBreadcrumb />
				<Grid templateColumns={{ base: '1fr', lg: '2fr 6fr' }}>
					<Flex display={{ base: 'none', lg: 'flex' }} w='272px'>
						<BrowseCategory />
					</Flex>
					<Flex flexDir='column' gap='16px'>
						<CategorySorting categoryName={searchParams.categoryName} />
						<Grid templateColumns={{ base: '2fr 2fr', lg: 'repeat(4, 2fr)' }} gap='8px'>
							{isLoading ? skeleton : null}
							{data?.items &&
								data?.items?.map((product: any, index: number) => {
									return (
										<ProductCard
											key={index}
											sku={product.sku}
											name={product.name}
											price={product.price}
											size={product.size}
											image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${product?.custom_attributes[1]?.value}`}
											ifPlasticFree={product.ifPlasticFree}
											onClick={() => router.push(`/product/${product.id}`)}
											h='inherit'
										/>
									);
								})}
						</Grid>

						<Pagination page={2} setPage={() => {}} totalPages={20} />
					</Flex>
				</Grid>
			</BasePadding>
		</PageLayout>
	);
};

export default SingleCategoryPage;
