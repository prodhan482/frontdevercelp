import CartCard from '@/components/cards/cart-card/CartCard';
import { useAppSelector } from '@/store/slices/hooks';
import { Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CheckoutButtonContainer from './CheckoutButtonContainer';
import QuickAdsMobile from '../quick-ads/QuickAdsMobile';
import CartPercent from './CartPercent';

type CartContainerProps = {
	onClose?: () => void;
};

const CartContainer: FC<CartContainerProps> = ({ onClose }) => {
	const cart = useAppSelector((state) => state.cart);
	const container = useColorModeValue('container.light', 'container.dark');
	const iconColor = useColorModeValue('text.light', 'text.dark');
	const primaryLight = useColorModeValue('primaryLight.light', 'primaryLight.dark');

	const cartHeader = (
		<Stack flex={1} p='16px' justify='space-between'>
			<Flex justify='space-between'>
				<Text fontSize='24px' fontWeight='700'>
					Shopping Cart
				</Text>
				<Button
					as={motion.div}
					whileHover={{ rotate: 90, transition: { duration: 0 } }}
					cursor='pointer'
					variant='link'
				>
					<AiOutlineClose size='30px' color={iconColor} onClick={onClose} />
				</Button>
			</Flex>
			<CartPercent currentPrice={cart.totalPrice.toFixed(2)}/>
		</Stack>
	);

	const cartItems = (
		<Flex flex={8} overflowY='scroll'>
			<Stack px='16px' w='full'>
				<Text fontSize='16px' fontWeight='700'>
					Added items (4 Items)
				</Text>
				<Stack>
					{cart.cartItems.length === 0 ? (
						<Text color='gray.500' fontSize='16px' fontWeight='600'>
							No items in cart
						</Text>
					) : (
						cart.cartItems.map((item: any, index: number) => (
							<CartCard
								id={item?.id}
								name={item?.name}
								image={item?.image}
								price={item?.price}
								quantity={item?.quantity}
								key={index}
							/>
						))
					)}
				</Stack>
			</Stack>
		</Flex>
	);

	const cartFooter = (
		<Stack
			flex={1}
			p='16px'
			boxShadow='0px -2px 20px 0px rgba(0, 0, 0, 0.10)'
			justify='space-around'
			h='100px'
		>
			<Flex justify='space-between'>
				<Text fontSize='16px' fontWeight='600'>
					Subtotal
				</Text>
				<Text fontSize='16px' fontWeight='600'>
					{cart.totalPrice.toFixed(2)}
				</Text>
			</Flex>
			<CheckoutButtonContainer />
		</Stack>
	);

	return (
		<Flex
			w={{
				base: '100vw',
				md: '350px',
			}}
			flexDir='column'
			bgColor={container}
			zIndex={9}
		>
			{cartHeader}
			{cartItems}
			<QuickAdsMobile />
			{cartFooter}
		</Flex>
	);
};

export default CartContainer;
