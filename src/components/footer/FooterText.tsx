import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type FooterTextProps = TextProps & {
	children: React.ReactNode;
	hoverActive?: boolean;
};
const FooterText: FC<FooterTextProps> = ({ children, hoverActive, ...props }) => {
	return (
		<Text
			fontSize='12px'
			fontWeight='500'
			letterSpacing='-0.3px'
			cursor={hoverActive ? 'pointer' : 'default'}
			_hover={
				hoverActive
					? {
							color: 'primaryLight.dark',
							_dark: {
								color: 'primaryDark.dark',
							},
					  }
					: {}
			}
			{...props}>
			{children}
		</Text>
	);
};

export default FooterText;
