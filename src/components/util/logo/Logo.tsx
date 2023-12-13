import { Image, ImageProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

type LogoProps = ImageProps & {};

const Logo: FC<LogoProps> = ({ ...props }) => {
	const { colorMode } = useColorMode();
	return (
		<Image
			h='28px'
			objectFit='contain'
			src={`/logo/main-logo${colorMode === 'dark' ? '-dark' : '-light'}.svg`}
			alt={`/logo/main-logo${colorMode === 'dark' ? '-dark' : '-light'}.svg`}
			{...props}
		/>
	);
};

export default Logo;
