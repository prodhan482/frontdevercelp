'use client';

import AuthButton from '@/components/auth/auth-button/AuthButton';
import AuthHeader from '@/components/auth/auth-header/AuthHeader';
import FormContainer from '@/components/login-form-container.tsx/FormContainer';
import CustomInput from '@/components/util/custom-input/CustomInput';
import useCustomToast from '@/hooks/useCustomToast';
import { useLoginWithEmailMutation } from '@/store/services/authApi';
import { login } from '@/store/slices/authSlice';
import { useAppDispatch } from '@/store/slices/hooks';
import {
	Button,
	Divider,
	Flex,
	FlexProps,
	Grid,
	GridItem,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode, useState } from 'react';

const LoginPage = () => {
	const primaryDark = useColorModeValue('primaryDark.light', 'primaryDark.light');
	const infoText = useColorModeValue('logo.light', 'logo.dark');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginWithEmail, loginResponse] = useLoginWithEmailMutation();
	const dispatch = useAppDispatch();

	const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginWithEmail({
			username: email,
			password,
		});
	};
	useCustomToast(loginResponse);
	React.useEffect(() => {
		if (loginResponse.isSuccess) {
			dispatch(login(`Bearer ${loginResponse.data}`));
		}
	}, [loginResponse]);

	const loginHeaderSection = (
		<>
			<Flex position='absolute' top='0px' right='0px'>
				<Image src='/login/LoginVector.png' alt='loginVector'></Image>
			</Flex>
			<Flex position='absolute' top='0px' left='0px'>
				<Image src='/login/LoginVector2.png' alt='loginVector'></Image>
			</Flex>
			<Flex
				position='absolute'
				top='0px'
				left='0px'
				pt='26px'
				px='18px'
				display={{ base: 'none', lg: 'block' }}
			>
				<Link href='/'>
					<AuthButton label='Back Home' variant='back-home'></AuthButton>
				</Link>
			</Flex>
		</>
	);

	const divider = (
		<Flex justifyContent='space-between' alignItems='center'>
			<Divider color='#A6A6A6' />
			<Text color={infoText} px='16px'>
				Or
			</Text>
			<Divider color='#A6A6A6' />
		</Flex>
	);

	const forgotPassword = (
		<Flex justifyContent='end'>
			<Link href='/auth/forget-password'>
				<AuthButton label='Forgot Password?' variant='forget-password'></AuthButton>
			</Link>
		</Flex>
	);

	const loginFooterSection = (
		<Stack gap='10px' py='25px'>
			<Flex justifyContent='center' gap='1px' fontWeight={700} fontSize='16px'>
				<Text color={infoText}>Sign in using</Text>
				<Link href='/auth/otp'>
					<Button variant='link' color='#EB2C92'>
						OTP
					</Button>
				</Link>
			</Flex>
			<Flex justifyContent='center' gap={1} fontWeight={700} fontSize='16px'>
				<Text color={infoText}>{`Don’t have an account?`}</Text>
				<Link href='/auth/register'>
					<Button variant='link' color={primaryDark}>
						Register
					</Button>
				</Link>
			</Flex>
		</Stack>
	);

	return (
		<Grid templateColumns={{ base: '1fr', lg: '5fr 4fr' }} m='auto' w='full'>
			{/* Left Section */}
			<GridItem display={{ base: 'none', lg: 'block' }}>
				<Image w='full' h='100vh' src='/login/loginBanner.png' alt='image' objectFit='cover' />
			</GridItem>
			{/* Right Section */}
			<FormContainer>
				{loginHeaderSection}
				<Flex flex={1} maxW='372px' direction='column' mx={{ base: '20px', lg: '100px' }} py='20px'>
					<AuthHeader
						variant='logo-sm'
						title='Welcome Back'
						subtitle='Login with your email and password'
					/>
					<form onSubmit={loginHandler}>
						<Stack pt='24px'>
							<Flex direction='column' gap='10px'>
								<CustomInput
									label='Email'
									placeholder='eg. info@bazar365.com'
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									isRequired
								/>
								<CustomInput
									label='Password'
									placeholder='***********'
									type='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									isRequired
								/>
								<AuthButton
									label='Login'
									variant='auth-submit'
									type='submit'
									isLoading={loginResponse.isLoading}
								></AuthButton>
								{forgotPassword}
							</Flex>
							{divider}
							{/* Social Login */}
							<AuthButton label='Sign in with Facebook' variant='facebook'></AuthButton>
							<AuthButton label='Sign in with Google' variant='google'></AuthButton>
							{loginFooterSection}
						</Stack>
					</form>
				</Flex>
			</FormContainer>
		</Grid>
	);
};

export default LoginPage;


