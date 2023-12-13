'use client';
import AuthButton from '@/components/auth/auth-button/AuthButton';
import AuthHeader from '@/components/auth/auth-header/AuthHeader';
import CustomInput from '@/components/util/custom-input/CustomInput';
import {
	Button,
	Flex,
	FlexProps,
	Grid,
	GridItem,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState, FC } from 'react';

const OTPPage = () => {
	const primaryDark = useColorModeValue(
		'primaryDark.light',
		'primaryDark.light'
	);

	const infoText = useColorModeValue('logo.light', 'logo.dark');

	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [emailLogin, setEmailLogin] = useState(true);

	const OtpHeaderSection = (
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
					<AuthButton variant='back-home' />
				</Link>
			</Flex>
		</>
	);

	const OtpFooterSection = (
		<Flex flexDir='column' gap={{base: '40px', lg:'81px'}}>
			<Flex justifyContent='center' gap='3px' fontWeight={700} fontSize='16px'>
				<Text color={infoText}>Sign in using</Text>
				<Link href='/auth/login'>
					<Button variant='link' color='#EB2C92'>
						Email
					</Button>
				</Link>
			</Flex>

			<Flex justifyContent='center' gap='3px' fontWeight='700' fontSize='16px'>
				<Text color={infoText}>Don’t have an account?</Text>
				<Link href='/auth/register'>
					<Button variant='link' color={primaryDark}>
						Register
					</Button>
				</Link>
			</Flex>
		</Flex>
	);

	const FormSection = (
		<Flex direction='column' gap='15px'>
			<CustomInput
				label='Phone Number'
				placeholder='eg. +8801XXXXXXXXX'
				type='number'
				value={phone}
				onChange={e => setPhone(e.target.value)}
			/>
			<Flex justifyContent='start'>
				<Link href='/auth/forget-password'>
					<Button
						fontSize='14px'
						fontWeight={600}
						variant='link'
						color={primaryDark}
					>
						Send OTP
					</Button>
				</Link>
			</Flex>
			<CustomInput
				label='Password'
				placeholder='***********'
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Link href='/'>
				<AuthButton label='Login' variant='auth-submit'></AuthButton>
			</Link>
		</Flex>
	);

	return (
		<Grid templateColumns={{ base: '1fr', lg: '5fr 4fr' }} m='auto' w='full'>
			{/* Banner */}
			<GridItem display={{ base: 'none', lg: 'block' }}>
				<Image
					w='full'
					h='100vh'
					src='/login/loginBanner.png'
					alt='image'
					objectFit='cover'
				/>
			</GridItem>

			{/* Form Container */}
			<FormContainer>
				{OtpHeaderSection}
				<Flex
					flex={1}
					maxW='372px'
					gap='24px'
					flexDir='column'
					py='35px'
					mx={{ base: '20px', lg: '100px' }}
				>
					<AuthHeader
						variant='logo-sm'
						title='Welcome Back'
						subtitle='Login with your email and password'
					/>

					{/* Input section */}
					<Flex flexDir='column' gap='25px'>
						{FormSection}
						{OtpFooterSection}
					</Flex>
				</Flex>
			</FormContainer>
		</Grid>
	);
};

export default OTPPage;

type FormContainerProps = FlexProps & {
	children: React.ReactNode;
};

const FormContainer: FC<FormContainerProps> = ({ children, ...props }) => {
	return (
		<Flex
			display='flex'
			justifyContent='center'
			alignItems='center'
			position='relative'
			minH='100vh'
			{...props}
		>
			{children}
		</Flex>
	);
};
