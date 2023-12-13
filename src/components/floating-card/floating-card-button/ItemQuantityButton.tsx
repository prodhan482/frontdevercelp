'use client';
import { useAppSelector } from '@/store/slices/hooks';
import { Flex, FlexProps, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC, useState, useEffect } from 'react';

type ItemQuantityButtonProps = FlexProps & {};

const ItemQuantityButton: FC<ItemQuantityButtonProps> = ({ ...props }) => {
	const bgColor = useColorModeValue('container.light', 'container.dark');
	const borderColor = useColorModeValue('primaryLight.light', 'primaryLight.light');
	const [qty, setQty] = useState<number>(0);
	const cart = useAppSelector((state) => state.cart);

	useEffect(() => {
		setQty(cart.totalItems);
	}, [cart]);

	return (
		<Flex
			position='absolute'
			mt='-26px'
			ml='-36px'
			borderRadius='50%'
			boxSize='32px'
			border='1px solid'
			borderColor={borderColor}
			justify='center'
			align='center'
			bgColor={bgColor}
			{...props}
		>
			<Text
				fontSize='14px'
				color='primaryLight.light'
				fontWeight='600'
				_dark={{
					color: 'primaryLight.dark',
				}}
			>
				{qty}
			</Text>
		</Flex>
	);
};

export default ItemQuantityButton;
