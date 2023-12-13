import { Heading, HeadingProps } from '@chakra-ui/react';
import React from 'react';
type ShadedTextProps = HeadingProps & {
	children: React.ReactNode;
};
const ShadedText: React.FC<ShadedTextProps> = ({ children, ...props }) => {
	return (
		<Heading
			textAlign='center'
			fontWeight='700'
			fontSize='24px'
			color='shaded-text.light'
			_dark={{
				color: 'shaded-text.dark',
			}}
			{...props}
		>
			{children}
		</Heading>
	);
};

export default ShadedText;
