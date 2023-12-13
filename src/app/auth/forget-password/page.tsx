'use client';

import AuthHeader from '@/components/auth/auth-header/AuthHeader';
import CustomInput from '@/components/util/custom-input/CustomInput';
import { useState, FC } from 'react';
import { Flex, FlexProps, Grid, GridItem, Image, useColorModeValue } from '@chakra-ui/react';
import AuthButton from '@/components/auth/auth-button/AuthButton';

const ForgetPassword = () => {
	const [verificationCode, setVerificationCode] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const container = useColorModeValue('container.light', 'container.dark');

	const VectorElements = (
		<>
			<Flex position='absolute' top='0px' right='0px'>
				<Image src='/login/LoginVector.png' alt='loginVector' />
			</Flex>
			<Flex position='absolute' top='0px' left='0px'>
				<Image src='/login/LoginVector2.png' alt='loginVector' />
			</Flex>
			<Flex position='absolute' bottom='0px' right='0px'>
				<Image src='/login/Vector.svg' alt='loginVector' />
			</Flex>
		</>
	);

	const InputSection = (
		<Flex flexDir='column' gap='16px'>
			{/* INPUT FIELDS */}
			<CustomInput
				label='Verification Code'
				placeholder='Enter your verification code'
				type='text'
				value={verificationCode}
				onChange={e => setVerificationCode(e.target.value)}
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

	return (
		<Grid templateColumns={{ base: '1fr', lg: '5fr 4fr' }} w='full'>
			<GridItem display={{ base: 'none', lg: 'block' }}>
				{/* Banner */}
				<Image w='full' h='100vh' objectFit='cover' src='/login/loginBanner.png' alt='Banner' />
			</GridItem>

			{/* FORM CONTAINER */}
			<FormContainer bg={container}>
				{/* VECTORS ELEMENTS */}
				{VectorElements}

				<Flex
					flexDir='column'
					flex={1}
					maxW='372px'
					mx={{ base: '20px', lg: '100px' }}
					py='105px'
					gap='80px'
				>
					{/* LOGO */}
					<AuthHeader variant='logo-lg' />

					{/* FORM */}
					<Flex flexDir='column' gap='20px' w='full'>
						{/* Input Fields */}
						{InputSection}
						{/* REGISTER BUTTON */}
						<Flex>
							<AuthButton label='Login' variant='auth-submit' />
						</Flex>
					</Flex>
				</Flex>
			</FormContainer>
		</Grid>
	);
};

export default ForgetPassword;

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
		>
			{children}
		</Flex>
	);
};
