'use client';
import WishListCard from '@/components/cards/wishlist-card/WishListCard';
import PageLayout from '@/components/layout/PageLayout';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import CustomButton from '@/components/util/custom-button/CustomButton';
import PageHeading from '@/components/util/text/page-heading/PageHeading';
import {
	Divider,
	Flex,
	Grid,
	GridProps,
	// useBreakpointValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

const data = [
	{
		image: '/product-image/guava-fruit-fresh.png',
		name: 'Rupchanda Soyabean Oil 5ltr',
		price: 100,
		discount: 10,
		stockStatus: 'In Stock',
		isAdded: true,
	},
	{
		image: '/product-image/guava-fruit-fresh.png',
		name: 'Rupchanda Soyabean Oil 5ltr',
		price: 100,
		discount: 10,
		stockStatus: 'Out of Stock',
		isAdded: true,
	},
	{
		image: '/product-image/guava-fruit-fresh.png',
		name: 'Rupchanda Soyabean Oil 5ltr',
		price: 100,
		discount: 10,
		stockStatus: 'In Stock',
		isAdded: true,
	},
	{
		image: '/product-image/guava-fruit-fresh.png',
		name: 'Rupchanda Soyabean Oil 5ltr',
		price: 100,
		discount: 10,
		stockStatus: 'In Stock',
		isAdded: true,
	},
	{
		image: '/product-image/guava-fruit-fresh.png',
		name: 'Rupchanda Soyabean Oil 5ltr',
		price: 100,
		discount: 10,
		stockStatus: 'Out of Stock',
		isAdded: true,
	},
	{
		image: '/product-image/guava-fruit-fresh.png',
		name: 'Rupchanda Soyabean Oil 5ltr',
		price: 100,
		discount: 10,
		stockStatus: 'Out of Stock',
		isAdded: true,
	},
	{
		image: '/product-image/guava-fruit-fresh.png',
		name: 'Rupchanda Soyabean Oil 5ltr',
		price: 100,
		discount: 10,
		stockStatus: 'In Stock',
		isAdded: true,
	},
];

const WishlistPage: NextPage = () => {
	const path = usePathname();

	return (
		<PageLayout>
			<BasePadding gap='16px'>
				<CustomBreadcrumb link={path} />
				<Flex justify='space-between'>
					<PageHeading>My Wishlist</PageHeading>
					<CustomButton variant='add-all' label='Add All to Cart' />
				</Flex>
				<GridContainer>
					{data.map((item, index) => (
						<>
							<WishListCard
								key={index}
								image={item.image}
								name={item.name}
								price={item.price}
								discount={item.discount}
								stockStatus={item.stockStatus}
								isAdded={item.isAdded}
							/>
							{index !== data.length - 1 && <Divider />}
						</>
					))}
				</GridContainer>

				{/* <Flex w='full' justify='space-between' my='16px'>
					<Text fontSize='14px' fontWeight='600'>
						Showing Results (3) of 3
					</Text>
					<Flex>
						<Pagination page={1} setPage={() => {}} totalPages={10} />
					</Flex>
				</Flex> */}
			</BasePadding>
		</PageLayout>
	);
};

export default WishlistPage;

type GridContainerProps = GridProps & {
	children: React.ReactNode;
};
const GridContainer: FC<GridContainerProps> = ({ children }) => {
	return (
		<Grid
			templateColumns='1fr'
			gap='24px'
			px={{ base: '24px', lg: '32px' }}
			py='32px'
			borderRadius='12px'
			bgColor='container.light'
			_dark={{
				bgColor: 'container.dark',
			}}
		>
			{children}
		</Grid>
	);
};
