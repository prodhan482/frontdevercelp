import { Drawer, DrawerContent, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import FloatingCardButton from '../floating-card-button/FloatingCardButton';
import CartContainer from '../cart-container/CartContainer';
import QuickAds from '../quick-ads/QuickAds';

const CartDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isAdsOpen, setIsOpen] = useState(true);
	return (
		<>
			<FloatingCardButton
				
				onClick={onOpen}
			/>

			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent minW='fit-content' p='0' m='0' bg='transparent' boxShadow='none' >
					<Flex h='full' w='full' bg='transparent'>
						<QuickAds isAdsOpen={isAdsOpen} setIsOpen={setIsOpen} />
						<CartContainer onClose={onClose} />
					</Flex>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default CartDrawer;
