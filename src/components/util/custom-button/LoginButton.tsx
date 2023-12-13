import { Button, MenuButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type LoginButtonProps = MenuButtonProps & {};

const LoginButton: FC<LoginButtonProps> = ({ ...props }) => {
	return (
		<Button
			borderRadius='30px'
			size='sm'
			fontSize='14px'
			px='16px'
			border='2px solid'
			borderColor='bth-stroke.light'
			bgColor='logo-secondary.light'
			color='container.light'
			_dark={{
				color: 'container.dark',
				_hover: {},
			}}
			_hover={{}}
			{...props}
		>
			Login
		</Button>
	);
};

export default LoginButton;
