import { Center, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const ProductCardSkeleton = () => {
	return (
		<Flex flexDir='column' boxShadow='lg' bg='white' borderRadius='8px'>
			<Center flex={1}>
				<Skeleton h={{ base: '100px', lg: '150px' }} w='full' borderRadius='4px' />
			</Center>
			<Flex flex={1} flexDir='column' padding='6' justify='space-between' gap='12px'>
				<Flex justify='space-between'>
					<Skeleton height='2' w='30%' />
					<Skeleton height='2' w='30%' />
				</Flex>
				<Skeleton height='2' w='70%' />

				<SkeletonText noOfLines={3} skeletonHeight='2' />
			</Flex>
		</Flex>
	);
};

export default ProductCardSkeleton;
