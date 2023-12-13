import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type CartPercentProps = {
	currentPrice: number;
};

const CartPercent: FC<CartPercentProps> = ({ currentPrice }) => {
	const primaryLight = useColorModeValue('primaryLight.light', 'primaryLight.dark');
	const targetPrice = 1000;
	const percentage = (currentPrice / targetPrice) * 100;
	return (
		<>
			<Flex fontSize='12px' fontWeight='600'>
				Add items worth
				<Text fontWeight='bold' color={primaryLight} mx='3px'>
					Tk {targetPrice}
				</Text>
				for free shopping
			</Flex>

			<Flex w='full' h='6px' borderRadius='8px' bg='#D9D9D9'>
				<Flex w={`${percentage}%`} h='6px' borderRadius='8px' bg={primaryLight} />
			</Flex>
		</>
	);
};

export default CartPercent;
