import {
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useColorModeValue,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import CustomInput from '../util/custom-input/CustomInput';
import CustomButton from '../util/custom-button/CustomButton';

type ChangePasswordModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const ChangePasswordModal: FC<ChangePasswordModalProps> = ({
	isOpen,
	onClose,
	...props
}) => {
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const [previousPassword, setPreviousPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const InputBgColor = useColorModeValue('#F5F5F5', '#111111');
	const containerColor = useColorModeValue('container.light', 'container.dark');
	const placeholderColor = useColorModeValue('#999', '#999');
	const placeholder = {
		color: placeholderColor,
		fontSize: '14px',
	};

	const InputFields = (
		<Flex direction='column' gap='16px' fontSize='16px'>
			<CustomInput
				// ref={initialRef}
				label='Previous Password'
				placeholder=''
				type='password'
				fontSize='16px'
				bgColor={InputBgColor}
				h='36px'
				_placeholder={placeholder}
				value={previousPassword}
				onChange={e => setPreviousPassword(e.target.value)}
			/>
			<CustomInput
				label='New Password'
				placeholder=''
				type='password'
				fontSize='16px'
				bgColor={InputBgColor}
				h='36px'
				_placeholder={placeholder}
				value={newPassword}
				onChange={e => setNewPassword(e.target.value)}
			/>
			<CustomInput
				label='Confirm New Password'
				placeholder=''
				type='password'
				fontSize='16px'
				bgColor={InputBgColor}
				h='36px'
				_placeholder={placeholder}
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
			/>
		</Flex>
	);

	const FooterButtons = (
		<ModalFooter
			px='0px'
			pt='28px'
			pb='0px'
			justifyContent={{ base: 'center', lg: 'left' }}
			gap={{ base: '8px', lg: '16px' }}
		>
			<Button
				variant='solid'
				bg='#f2f2f2'
				color='#444'
				onClick={onClose}
				w={{ base: 'full', lg: 'auto' }}
				borderRadius='4px'
			>
				Go Back
			</Button>
			<CustomButton
				w={{ base: 'full', lg: '107px' }}
				variant='cart-proceed'
				type='submit'
				label='Proceed'
				borderRadius='4px'
				fontSize='16px'
			/>
		</ModalFooter>
	);

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				size='3xl'
				isCentered
			>
				<ModalOverlay />
				<ModalContent
					bg={containerColor}
					p={{ base: '16px', lg: '32px 44px' }}
					justifyContent='center'
					{...props}
				>
					<ModalHeader fontSize='22px' fontWeight='700' px='0px' pt='0px'>
						Change Password
					</ModalHeader>
					<ModalCloseButton />
					<Flex direction='column' as='form'>
						<ModalBody p='0px'>{InputFields}</ModalBody>
						{FooterButtons}
					</Flex>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ChangePasswordModal;
