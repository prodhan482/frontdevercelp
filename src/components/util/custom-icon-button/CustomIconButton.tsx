import { IconButton, IconButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomIconButtonProps = IconButtonProps & {
	icon: React.ReactNode;
	ariaLabel?: string;
};

const CustomIconButton: FC<CustomIconButtonProps> = ({ icon, ariaLabel, ...props }) => {
	return (
		<IconButton
			size='sm'
			bgColor='container.light'
			boxShadow='0px 5px 20px 0px rgba(68, 68, 68, 0.05)'
			_dark={{ bgColor: 'container.dark' }}
			icon={icon}
			{...props}
		/>
	);
};

export default CustomIconButton;
