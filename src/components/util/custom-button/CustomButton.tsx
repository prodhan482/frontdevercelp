import { Button, ButtonProps, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiBookmark, FiMapPin } from 'react-icons/fi';

type CustomButtonProps = ButtonProps & {
	label?: string;
	variant:
		| 'custom'
		| 'add-cart'
		| 'wishlist'
		| 'wishlist-mobile'
		| 'add-all'
		| 'add-wishlist'
		| 'cart-proceed'
		| 'logout'
		| 'Add-Address'
		| 'proceed';
};

const CustomButton: FC<CustomButtonProps> = ({ label, variant, ...props }) => {
	const textColor = useColorModeValue('text.light', 'text.dark');

	const cartIcon = <FaShoppingCart color={textColor} />;
	const wishlistIcon = <FiBookmark color={{ base: '#744210', lg: { textColor } }} />;
	const wishlistMobile = <FiBookmark color='brown' />;
	const primaryDark = useColorModeValue('primaryDark.light', 'primaryDark.dark');
	const container = useColorModeValue('container.light', 'container.dark');

	const primaryLight = useColorModeValue('primaryLight.light', 'primaryLight.dark');

	

	return (
		<>
			{variant === 'custom' && <Button {...props}>{label}</Button>}
			{variant === 'add-cart' && (
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
			)}
			{variant === 'wishlist' && (
				<Button
					py={{ base: '4px', lg: '8px' }}
					px={{ base: '4px', lg: '40px' }}
					bg='transparent'
					fontSize='18px'
					fontWeight='600'
					lineHeight='161%'
					color='text.light'
					_dark={{
						color: 'text.dark',
					}}
					_hover={{}}
					leftIcon={wishlistIcon}
					{...props}
				>
					{label && label}
				</Button>
			)}
			{variant === 'wishlist-mobile' && (
				<Button bgColor='bg-light.light' rounded='full' {...props} _hover={{}}>
					{wishlistMobile}
				</Button>
			)}
			{variant === 'add-all' && (
				<Button
					fontSize='14px'
					px='12px'
					fontWeight='600'
					bgColor='container.light'
					_dark={{ bgColor: 'container.dark' }}
					{...props}
				>
					{label}
				</Button>
			)}
			{variant === 'add-wishlist' && (
				<Button
					borderRadius='0'
					color='text.dark'
					bgColor='primaryDark.light'
					_dark={{ color: 'text.light', bgColor: 'primaryDark.dark' }}
					_disabled={{
						color: 'logo.light',
						bgColor: 'border.light',
					}}
					{...props}
				>
					{label}
				</Button>
			)}
			{variant === 'cart-proceed' && (
				<Button
					fontSize='14px'
					w='full'
					py='5px'
					lineHeight='24px'
					borderRadius='30px'
					bg={primaryLight}
					border='2px solid'
					borderColor='bth-stroke.light'
					cursor='pointer'
					_hover={{ color: 'white', borderColor: 'bth-stroke.dark' }}
					color={container}
					{...props}
				>
					{label}
				</Button>
			)}
			{variant === 'proceed' && (
				<Button
					borderRadius='6px'
					color='text.dark'
					bgColor='primaryLight.light'
					_dark={{ color: 'text.light', bgColor: 'primaryDark.dark' }}
					_disabled={{
						color: 'logo.light',
						bgColor: 'border.light',
					}}
					{...props}
				>
					{label}
				</Button>
			)}
			{variant === 'logout' && (
				<Button
					w='full'
					borderRadius='30px'
					fontSize='14px'
					border='2px solid'
					borderColor='#DD080D'
					bgColor='red.light'
					color='container.light'
					_dark={{
						color: 'container.dark',
						_hover: {},
					}}
					_hover={{}}
					{...props}
				>
					{label}
				</Button>
			)}
			{variant === 'Add-Address' && (
				<Button
					borderRadius='30px'
					color='text.dark'
					leftIcon={<FiMapPin size='16px' />}
					border='2px solid'
					px='12px'
					fontSize='14px'
					fontWeight='600'
					lineHeight='20px'
					borderColor='primaryDark.light'
					bgColor='primaryLight.light'
					_dark={{ color: 'text.light', bgColor: 'primaryDark.dark' }}
					_disabled={{
						color: 'logo.light',
						bgColor: 'border.light',
					}}
					{...props}
				>
					{label}
				</Button>
			)}
		</>
	);
};

export default CustomButton;
