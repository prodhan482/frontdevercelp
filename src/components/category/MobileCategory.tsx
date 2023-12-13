import {
	Flex,
	FlexProps,
	Grid,
	GridProps,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React, { FC } from 'react';

const categoryList = [
	{
		name: 'Dairy',
		image: '1.svg',
	},
	{
		name: 'Fruits',
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
		name: 'Grain',
		image: '5.svg',
	},
	{
		name: 'Dairy',
		image: '6.svg',
	},
];

type MobileCategoryProps = FlexProps & {};

const MobileCategory: FC<MobileCategoryProps> = ({ ...props }) => {
	return (
		<Flex display={{ base: 'flex', lg: 'none' }} flexDir='column' {...props}>
			<Heading fontSize='22px' color='shaded-text.light' _dark={{ color: 'shaded-text.dark' }}>
				Category
			</Heading>
			<Grid templateColumns='repeat(3, 1fr)' gap='8px'>
				{categoryList.map((item, index) => {
					return <CategoryCard key={index} name={item.name} image={`/category/${item.image}`} />;
				})}
			</Grid>
		</Flex>
	);
};

export default MobileCategory;

type CategoryCardProps = FlexProps & {
	name: string;
	image: string;
};

const CategoryCard: FC<CategoryCardProps> = ({ name, image }: CategoryCardProps) => {
	const bgColor = useColorModeValue('container.light', 'container.dark');

	return (
		<Flex
			bgColor={bgColor}
			flexDir='column'
			p='10px'
			justify='center'
			align='center'
			borderRadius='6px'
			boxShadow='0px 5px 20px 0px rgba(68, 68, 68, 0.05)'
		>
			<Image maxW='76px' src={image} w='full' h='full' />
			<Text fontWeight='700' color='new-green.light' _dark={{ color: 'new-green.dark' }}>
				{name}
			</Text>
		</Flex>
	);
};
