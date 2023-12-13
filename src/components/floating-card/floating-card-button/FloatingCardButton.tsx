'use client';
import { Center, Flex, FlexProps, Text, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import ItemQuantityButton from './ItemQuantityButton';
import { useAppSelector } from '@/store/slices/hooks';

type FloatingCardButtonProps = FlexProps & {};

const FloatingCardButton: FC<FloatingCardButtonProps> = ({ ...props }) => {
	const { colorMode } = useColorMode();
	const cart = useAppSelector((state) => state.cart);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(cart.totalPrice);
	}, [cart]);

	const buttonContents = (
		<>
			<ItemQuantityButton />
			<Center flexDir='column' flex={1} gap='4px'>
				<HiOutlineShoppingCart color={colorMode == 'light' ? 'white' : '#222'} size='24px' />
				<Text fontSize='12px' fontWeight='700' color='bg.light' _dark={{ color: 'bg.dark' }}>
					{total}
				</Text>
			</Center>
		</>
	);

	return (
		<>
			<ButtonDesignDesktop display={{ base: 'none', lg: 'flex' }} {...props}>
				{buttonContents}
			</ButtonDesignDesktop>
			<ButtonDesignMobile display={{ base: 'flex', lg: 'none' }} {...props}>
				{buttonContents}
			</ButtonDesignMobile>
		</>
	);
};

type ButtonDesign = FlexProps & {
	children: React.ReactNode;
};

const ButtonDesignDesktop: FC<ButtonDesign> = ({ children, ...props }) => {
	const { colorMode } = useColorMode();
	return (
		<Flex
			position='fixed'
			bottom='0'
			top='300'
			right='4'
			my='auto'
			zIndex={99}
			as={motion.div}
			whileHover={{ scale: 1.1 }}
			//
			drag='y'
			dragConstraints={{ top: -200, bottom: 50 }}
			whileTap={{ scale: 0.9 }}
			borderRadius='8px'
			py='8px'
			px='16px'
			bgColor='primaryLight.light'
			border='2px solid'
			borderColor='primaryDark.light'
			boxSize='65px'
			cursor='pointer'
			boxShadow={
				colorMode === 'light'
					? '2px 4px 20px 0px rgba(137, 201, 121, 0.58)'
					: '1.79199px 3.58399px 17.91994px 0px rgba(137, 201, 121, 0.58)'
			}
			_dark={{
				bgColor: 'primaryLight.dark',
				borderColor: 'primaryDark.dark',
			}}
			{...props}
		>
			{children}
		</Flex>
	);
};

const ButtonDesignMobile: FC<ButtonDesign> = ({ children, ...props }) => {
	const { colorMode } = useColorMode();
	return (
		<Flex
			position='fixed'
			bottom='10'
			right='4'
			my='auto'
			zIndex={99}
			as={motion.div}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			borderRadius='8px'
			py='8px'
			px='16px'
			bgColor='primaryLight.light'
			border='2px solid'
			borderColor='primaryDark.light'
			boxSize='65px'
			cursor='pointer'
			boxShadow={
				colorMode === 'light'
					? '2px 4px 20px 0px rgba(137, 201, 121, 0.58)'
					: '1.79199px 3.58399px 17.91994px 0px rgba(137, 201, 121, 0.58)'
			}
			_dark={{
				bgColor: 'primaryLight.dark',
				borderColor: 'primaryDark.dark',
			}}
			{...props}
		>
			{children}
		</Flex>
	);
};

export default FloatingCardButton;
