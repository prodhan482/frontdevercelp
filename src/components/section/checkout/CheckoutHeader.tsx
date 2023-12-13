import { Flex, Image, Show, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const CheckoutHeader = () => {
	const primaryDark = useColorModeValue(
		'primaryDark.light',
		'primaryDark.dark'
	);
	const brown = useColorModeValue('line-through.light', 'line-through.dark');
	const headerColor = useColorModeValue(
		'#ECECE8 ',
		'rgba(228, 249, 216, 0.20)'
	);
	const textSection = (
		<Text
			textAlign='center'
			fontSize={{ base: '18px', lg: '20px' }}
			fontWeight='700'
			color={brown}
			_dark={{ color: { brown } }}
			lineHeight='24px'
		>
			Get
			<Text
				as={'span'}
				px='4px'
				color={primaryDark}
				_dark={{ color: { primaryDark } }}
			>
				.25
			</Text>
			Waste Points and save
			<Text
				as={'span'}
				px='4px'
				color={primaryDark}
				_dark={{ color: { primaryDark } }}
			>
				৳200
			</Text>
			by returning the plastic from with your next order
		</Text>
	);
	return (
		<Flex
			bgColor={headerColor}
			alignItems='center'
			justifyContent='center'
			p={{ base: '16px', lg: '16px 75px' }}
			mt='3px'
			border='1px dashed'
			borderColor={brown}
			borderRadius='4px'
		>
			{textSection}
		</Flex>
	);
};

export default CheckoutHeader;
