import { useAppSelector } from '@/store/slices/hooks';
import {  Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type BasePaddingProps = FlexProps & {
	children: React.ReactNode;
};
const BasePadding: FC<BasePaddingProps> = ({ children, ...props }) => {
	const sideIsOpen = useAppSelector((state) => state.sidebar.isOpen);
	return (
		<Flex
			w='full'
			flex={1}
			flexDir='column'
			px={{ base: '16px', lg: sideIsOpen ? '24px' : '72px' }}
			py={{ base: '16px', lg: '32px' }}
			{...props}
		>
			{children}
		</Flex>
	);
};

export default BasePadding;
