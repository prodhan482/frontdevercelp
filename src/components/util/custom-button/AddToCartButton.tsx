import { Button, ButtonProps, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';

type AddToCartButtonProps = {
	label: string;
	qty: number;
	handleAddItem: () => void;
	handleDeleteOneItem: () => void;
	handleDeleteSingleItem: () => void;
};

const AddToCartButton: FC<AddToCartButtonProps> = ({
	label,
	qty,
	handleAddItem,
	handleDeleteOneItem,
	handleDeleteSingleItem,
	...props
}) => {
	const textColor = useColorModeValue('text.light', 'text.dark');
	const buttonColor = useColorModeValue('#FFFFFF', '#000000'); //container.light and container.dark
	const cartIcon = <FaShoppingCart color={textColor} />;

	return (
		<>
			{qty === 0 ? (
				<Button
					py='8px'
					px='40px'
					borderRadius='30px'
					fontSize='18px'
					fontWeight='600'
					lineHeight='161%'
					border='2px solid'
					borderColor={'primaryDark.light'}
					bgColor='primaryLight.light'
					color='text.dark'
					_dark={{
						color: 'text.light',
						bgColor: 'primaryDark.dark',
						borderColor: 'primaryDark.dark',
						border: '2px solid primaryDark.dark',
					}}
					_hover={{}}
					leftIcon={cartIcon}
					{...props}
				>
					{label}
				</Button>
			) : (
				<Flex
					py='8px'
					px='40px'
					borderRadius='30px'
					fontSize='18px'
					fontWeight='600'
					lineHeight='161%'
					border='2px solid'
					borderColor={'primaryDark.light'}
					bgColor='primaryLight.light'
					color='text.dark'
					_dark={{
						color: 'text.light',
						bgColor: 'primaryDark.dark',
						borderColor: 'primaryDark.dark',
						border: '2px solid primaryDark.dark',
					}}
					_hover={{}}
					{...props}
				>
					<FaMinus color={buttonColor} />
					<Text color='#FFF' _dark={{ color: '#000' }}>
						{qty}
					</Text>
					<FaPlus color={buttonColor} />
				</Flex>
			)}
		</>
	);
};

export default AddToCartButton;
