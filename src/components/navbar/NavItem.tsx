import { TextProps, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
type NavItemProps = TextProps & {
	children: ReactNode;
	href?: string;
};

const NavItem: FC<NavItemProps> = ({ children, href, ...props }) => {
	return (
		<Text
			as={Link}
			href={href ? href : '/'}
			userSelect='none'
			cursor='pointer'
			fontSize='14px'
			{...props}
		>
			{children}
		</Text>
	);
};

export default NavItem;
