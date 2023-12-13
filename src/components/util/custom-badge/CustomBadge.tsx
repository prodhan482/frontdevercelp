import { Text } from '@chakra-ui/react';
import React from 'react';
type CustomBadgeProps = {
	children: React.ReactNode;
};
const CustomBadge: React.FC<CustomBadgeProps> = ({ children }) => {
	return (
		<Text
			color='#001E00'
			bgColor='#F3F3EF'
			fontSize='12px'
			fontWeight='700'
			px='4px'
			textTransform='uppercase'
			borderRadius='2px'
			_dark={{
				color: '#F3F3EF',
				bgColor: '#222222',
			}}
		>
			{children}
		</Text>
	);
};

export default CustomBadge;
