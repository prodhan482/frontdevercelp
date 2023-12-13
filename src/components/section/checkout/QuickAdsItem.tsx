import CustomItemAddButton from '@/components/util/custom-button/CustomItemAddButton';
import PlusButton from '@/components/util/custom-button/PlusButton';
import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const QuickAdsItem = () => {
	const primaryLight = useColorModeValue('primaryLight.light', 'primaryLight.light');
	const logo = useColorModeValue('logo.light', 'logo.light');
	return (
		<Flex px='8px' borderRadius='4px' gap='16px'>
			<Image w='61px' src='/product-image/spinach.png' alt='product-img' objectFit='contain' />
			<Flex direction='column' w='full'>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text fontWeight='700'>
						<Text fontSize='12px' as='sup'>
							৳
						</Text>
						<Text fontSize='20px' as='span'>
							220
						</Text>
						<Text fontSize='12px' as='sup'>
							.00
						</Text>
					</Text>
					<PlusButton aria-label='add-quick item' />
				</Flex>
				<Text fontWeight='700'>Guava Fruit Fresh</Text>
				<Text fontSize='12px' fontWeight='600' color={logo}>
					250 gm
				</Text>
				<Text fontSize='12px' fontWeight='700' color={primaryLight}>
					IN STOCK
				</Text>
			</Flex>
		</Flex>
	);
};

export default QuickAdsItem;
