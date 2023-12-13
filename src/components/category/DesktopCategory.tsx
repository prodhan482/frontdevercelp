import { useAppSelector } from '@/store/slices/hooks';
import { Flex, Grid, GridProps, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

const categoryList = [
	{
		name: 'Dairy',
		image: '1.svg',
	},
	{
		name: 'Fruits & Vegetables',
		image: '2.svg',
	},
	{
		name: 'Condiments',
		image: '3.svg',
	},
	{
		name: 'Baby Food',
		image: '4.svg',
	},
	{
		name: 'Grain and Pasta',
		image: '5.svg',
	},
	{
		name: 'Dairy',
		image: '6.svg',
	},
	{
		name: 'Fruits & Vegetables',
		image: '7.svg',
	},
	{
		name: 'Condiments',
		image: '8.svg',
	},
	{
		name: 'Baby Food',
		image: '9.svg',
	},
	{
		name: 'Grain and Pasta',
		image: '10.svg',
	},
	{
		name: 'Dairy',
		image: '11.svg',
	},
];

type DesktopCategoryProps = GridProps & {};

const DesktopCategory: FC<DesktopCategoryProps> = ({ ...props }) => {
	const sideIsOpen = useAppSelector(state => state.sidebar.isOpen);
	const router = useRouter();
	return (
		<Grid
			px={{ base: '16px', lg: sideIsOpen ? '24px' : '92px' }}
			templateColumns='repeat(11, 1fr)'
			gap='16px'
			bgColor='container.light'
			_dark={{
				bgColor: 'container.dark',
			}}
			{...props}
		>
			{categoryList.map((item, index) => {
				return (
					<Flex
						key={index}
						as={motion.div}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.99 }}
						onClick={() => router.push('/category/sample-category')}
						cursor='pointer'
					>
						<Image src={`/category/${item.image}`} alt={item.name} />
					</Flex>
				);
			})}
		</Grid>
	);
};

export default DesktopCategory;
