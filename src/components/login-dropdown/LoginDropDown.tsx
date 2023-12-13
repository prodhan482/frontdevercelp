import React, { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type LoginDropDownProps = ButtonProps & {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginDropDown: FC<LoginDropDownProps> = ({ isLogin, setIsLogin, ...props }) => {
	return (
		<Button
			px='20px'
			bgColor='logo-secondary.light'
			color='container.light'
			borderRadius='30px'
			fontSize='14px'
			fontWeight='600'
			onClick={() => setIsLogin(!isLogin)}
			{...props}>
			{isLogin ? 'Logout' : 'Login'}
		</Button>
	);
};

export default LoginDropDown;
