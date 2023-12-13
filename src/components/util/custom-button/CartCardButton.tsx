
import { Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type CartCardButtonProps = {
	quantity: number;
	handleDeleteOneItem?: () => void;
	handleAddItem?: () => void;
};

const CartCardButton: FC<CartCardButtonProps> = ({
	handleDeleteOneItem,
	handleAddItem,
	quantity,
	...props
}) => {
	const addButton = useColorModeValue('#f5f5f5', '#111');
	const buttonBorder = useColorModeValue('#11823B', '#444');
	return (
		<Flex
			py='2px'
			px='11px'
			gap='14px'
			justifyContent='center'
			bg={addButton}
			border='1px solid'
			borderColor={buttonBorder}
			borderRadius='30px'
			alignItems='center'
			w='fit-content'
			fontWeight='bold'
			fontSize='12px'
			lineHeight='20px'
			{...props}
		>
			<IconButton
				aria-label='remove-one'
				bg='transparent'
				icon={<AiOutlineMinus />}
				size='14px'
				onClick={handleDeleteOneItem}
			/>
			<Text>{quantity}</Text>
			<IconButton
				onClick={handleAddItem}
				aria-label='Search database'
				bg='transparent'
				icon={<AiOutlinePlus />}
				size='14px'
			/>
		</Flex>
	);
};

export default CartCardButton;
