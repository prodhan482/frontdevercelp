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
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { FC, ReactNode, useState } from 'react';

const RegisterPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const primaryDark = useColorModeValue(
		'primaryDark.light',
		'primaryDark.light'
	);
	const buttonTextColor = useColorModeValue(
		'container.light',
		'container.light'
	);
	const infoText = useColorModeValue('logo.light', 'logo.light');

	const inputForm = (
		<Flex flexDir='column' gap='16px'>
			<CustomInput
				label='Full Name'
				placeholder='eg. John Doe'
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<CustomInput
				label='Email'
				placeholder='eg. info@bazar365.com'
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<CustomInput
				label='Phone Number'
				placeholder='eg. +8801xxxxxxxxx'
				type='text'
				value={phoneNumber}
				onChange={e => setPhoneNumber(e.target.value)}
			/>
			<CustomInput
				label='Password'
				placeholder='***********'
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<CustomInput
				label='Confirm Password'
				placeholder='***********'
				type='password'
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
			/>
		</Flex>
	);

	const accountSection = (
		<Flex justifyContent='center' gap={1}>
			<Text color={infoText} fontSize='16px' fontWeight='700'>
				Already have an account?
			</Text>
			<Link href='/auth/login'>
				<Button variant='link' color={primaryDark}>
					Login
				</Button>
			</Link>
		</Flex>
	);

	const registrationHeaderSection = (
		<>
			<Flex position='absolute' top='0px' right='0px'>
				<Image src='/login/LoginVector.png' alt='loginVector' />
			</Flex>
			<Flex position='absolute' top='0px' left='0px'>
				<Image src='/login/LoginVector2.png' alt='loginVector' />
			</Flex>

			<Flex
				as={motion.div}
				whileHover={{ scale: 1.1 }}
				pt='26px'
				px='18px'
				position='absolute'
				top='0px'
				left='0px'
				display={{ base: 'none', lg: 'block' }}
			>
				<AuthButton variant='back-home' />
			</Flex>
		</>
	);

	return (
		<Grid templateColumns={{ base: '1fr', lg: '5fr 4fr' }} w='full'>
			<GridItem display={{ base: 'none', lg: 'block' }}>
				<Image
					w='full'
					h='100vh'
					objectFit='cover'
					src='/login/loginBanner.png'
					alt='Banner'
				/>
			</GridItem>
			<FormContainer>
				{registrationHeaderSection}
				<Flex
					flexDir='column'
					flex={1}
					maxW='372px'
					justifyContent='center'
					alignItems='center'
					py='20px'
					mx={{ base: '20px', lg: '100px' }}
					gap={{ base: '20px', lg: '24px' }}
				>
					<AuthHeader title='Sign Up' variant='logo-sm' />
					<Flex w='full' flexDir='column' gap='20px'>
						{inputForm}
						<AuthButton label='Register' variant='auth-submit' />
					</Flex>
					{accountSection}
				</Flex>
			</FormContainer>
		</Grid>
	);
};

export default RegisterPage;

type FormContainerProps = FlexProps & {
	children: ReactNode;
};

const FormContainer: FC<FormContainerProps> = ({ children, ...props }) => {
	return (
		<Flex
			position='relative'
			display='flex'
			justifyContent='center'
			alignItems='center'
			minH='100vh'
			{...props}
		>
			{children}
		</Flex>
	);
};