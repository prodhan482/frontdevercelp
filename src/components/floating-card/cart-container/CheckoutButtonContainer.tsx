import FormContainer from '@/components/login-form-container.tsx/FormContainer';
import CustomButton from '@/components/util/custom-button/CustomButton';
import useCustomToast from '@/hooks/useCustomToast';
import { useLoginWithEmailMutation } from '@/store/services/authApi';
import { useAppDispatch, useAppSelector } from '@/store/slices/hooks';
import {
	Button,
	Divider,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { login } from '@/store/slices/authSlice';
import AuthHeader from '@/components/auth/auth-header/AuthHeader';
import CustomInput from '@/components/util/custom-input/CustomInput';
import AuthButton from '@/components/auth/auth-button/AuthButton';

const CheckoutButtonContainer = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const loginGlobal = useAppSelector((state) => state.auth);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const primaryDark = useColorModeValue('primaryDark.light', 'primaryDark.light');
	const infoText = useColorModeValue('logo.light', 'logo.dark');
	const containerColor = useColorModeValue('container.light', 'container.dark');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginWithEmail, loginResponse] = useLoginWithEmailMutation();
	const dispatch = useAppDispatch();
	useCustomToast(loginResponse);
	useEffect(() => {
		if (loginGlobal.loggedIn) {
			setIsLoggedIn(loginGlobal.loggedIn);
		}
	}, [loginGlobal]);

	const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginWithEmail({
			username: email,
			password,
		});
	};
	useCustomToast(loginResponse);

	useEffect(() => {
		if (loginResponse.isSuccess) {
			dispatch(login(`Bearer ${loginResponse.data}`));
			onClose();
		}
	}, [loginResponse]);

	const forgotPassword = (
		<Flex justifyContent='end'>
			<Link href='/auth/forget-password'>
				<AuthButton label='Forgot Password?' variant='forget-password'></AuthButton>
			</Link>
		</Flex>
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

	const loginFooterSection = (
		<Stack gap='10px' py='16px'>
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
		<>
			{isLoggedIn ? (
				<Link href='/checkout'>
					<CustomButton variant='cart-proceed' label='Checkout' />
				</Link>
			) : (
				<>
					<CustomButton variant='cart-proceed' onClick={onOpen} label='Please Login To Continue' />

					<Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false} size='lg'>
						<ModalOverlay />
						<ModalContent bgColor={containerColor} px={{ base: '8px', lg: '32px' }}>
							<ModalHeader>
								<Text
									fontWeight='700'
									fontSize='18px'
									color='gray.700'
									_dark={{ color: 'footer.light' }}
								>
									Login to Bazar365
								</Text>
							</ModalHeader>
							<ModalCloseButton />

							<ModalBody>
								<Flex flex={1} direction='column'>
									<AuthHeader variant='logo-lg' />
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
							</ModalBody>
						</ModalContent>
					</Modal>
				</>
			)}
		</>
	);
};

export default CheckoutButtonContainer;
