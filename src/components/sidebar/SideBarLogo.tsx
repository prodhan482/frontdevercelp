import { Image, ImageProps, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type SideBarLogoProps = ImageProps & {};
const SideBarLogo: FC<SideBarLogoProps> = ({ ...props }) => {
	const imageDir = useColorModeValue('login-logo.light.svg', 'login-logo.dark.svg');

	return (
		<Image
			w={{ base: '120px', lg: '100px' }}
			src={`/login/${imageDir}`}
			alt='sidebar-logo'
			{...props}
		/>
	);
};

export default SideBarLogo;
