import {
	Button,
	Flex,
	Grid,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import CustomInput from '../util/custom-input/CustomInput';
import CustomButton from '../util/custom-button/CustomButton';
import CustomTextarea from '../util/custom-input/CustomTextarea';

type AddAddressModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const AddAddressModal: FC<AddAddressModalProps> = ({isOpen, onClose, ...props}) => {
	const containerColor = useColorModeValue('container.light', 'container.dark');
	const InputBgColor = useColorModeValue('#F5F5F5', '#111111');
	const InputColor = useColorModeValue('input.light', 'input.light');
	const placeholderColor = useColorModeValue('#999', '#999');
	const placeholder = {
		color: placeholderColor,
		fontSize: '14px',
	};

	const InputFields = (
		<Flex direction='column' gap='16px' fontSize='16px'>
			<CustomInput
				label='Address Title'
				placeholder='eg. Home/Office/Gym'
				type='text'
				fontSize='16px'
				bgColor={InputBgColor}
				h='36px'
				_placeholder={placeholder}
			/>
			<Grid gap='16px' templateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
				<CustomInput
					label='First Name'
					placeholder='Enter First Name'
					type='text'
					fontSize='16px'
					bgColor={InputBgColor}
					h='36px'
					_placeholder={placeholder}
				/>
				<CustomInput
					label='Last Name'
					placeholder='Enter Last Name'
					type='text'
					fontSize='16px'
					bgColor={InputBgColor}
					h='36px'
					_placeholder={placeholder}
				/>
			</Grid>

			<CustomTextarea
				label='Full Address'
				placeholder=''
				fontSize='16px'
				bgColor={InputBgColor}
				h='100px'
				_placeholder={placeholder}
			/>
			<Grid gap='16px' templateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
				<CustomInput
					label='Phone Number'
					placeholder='eg. 01*********'
					type='number'
					fontSize='16px'
					bgColor={InputBgColor}
					h='36px'
					_placeholder={placeholder}
				/>
				<CustomInput
					label='Email'
					placeholder='eg. example@gmail.com'
					type='email'
					fontSize='16px'
					bgColor={InputBgColor}
					h='36px'
					_placeholder={placeholder}
				/>
			</Grid>
			<Grid gap='16px' templateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
				<CustomInput
					label='City'
					placeholder='eg. Dhaka, Cumilla'
					type='text'
					fontSize='16px'
					bgColor={InputBgColor}
					h='36px'
					_placeholder={placeholder}
				/>
				<CustomInput
					label='District'
					placeholder='eg. Dhaka, Chattogram'
					type='text'
					fontSize='16px'
					bgColor={InputBgColor}
					h='36px'
					_placeholder={placeholder}
				/>
			</Grid>
			<Grid gap='16px' templateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
				<CustomInput
					label='Zip Code'
					placeholder='eg. 1207'
					type='number'
					fontSize='16px'
					bgColor={InputBgColor}
					h='36px'
					_placeholder={placeholder}
				/>
				<CustomInput
					label='Country'
					isDisabled
					placeholder='Bangladesh'
					value='Bangladesh'
					fontSize='16px'
					_dark={{ color: '#2D3748' }}
					type='text'
					bgColor={InputColor}
					h='36px'
					_placeholder={placeholder}
				/>
			</Grid>
		</Flex>
	);

	const FooterButtons = (
		<ModalFooter
			px='0px'
			pt='12px'
			pb='0px'
			justifyContent='flex-start'
			gap='16px'
		>
			<CustomButton w='107px' variant='cart-proceed' label='Proceed' borderRadius='4px' />
			<Button variant='solid' bg='#f2f2f2' color='#444' onClick={onClose}>
				Cancel
			</Button>
		</ModalFooter>
	);

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
				<ModalOverlay />
				<ModalContent
					bg={containerColor}
					p={{ base: '16px', lg: '32px 44px' }}
					gap='16px'
					{...props}
				>
					<ModalHeader p='0px' fontSize='18px' fontWeight='700'>
						Add A New Address
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody p='0px'>{InputFields}</ModalBody>
					{FooterButtons}
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddAddressModal;
