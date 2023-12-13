import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type PageHeadingProps = TextProps & {
	children: React.ReactNode;
};

const PageHeading: FC<PageHeadingProps> = ({ children, ...props }) => {
	return (
		<Text fontSize={{ base: '24px', lg: '32px' }} fontWeight='700' {...props}>
			{children}
		</Text>
	);
};

export default PageHeading;
