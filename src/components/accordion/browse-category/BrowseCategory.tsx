import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import CategoryAccordion from '../category-accordion/CategoryAccordion';

const BrowseCategory: FC = () => {
	const textColor = useColorModeValue('dark-primary.light', 'dark-primary.dark');
	return (
		<Flex w='full' flexDir='column' gap='28px' p='16px'>
			<Heading fontSize='14px' fontWeight='700' color={textColor}>
				Browse by categories
			</Heading>
			<Text color='logo.light' fontSize='12px' fontWeight='700'>
				All Categories
			</Text>
			<CategoryAccordion />
		</Flex>
	);
};

export default BrowseCategory;
