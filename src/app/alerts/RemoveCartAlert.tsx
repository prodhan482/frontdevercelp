import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	ButtonProps,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, ReactNode, useRef } from 'react';
import { PiTrashBold } from 'react-icons/pi';

type RemoveCartAlertProps = {
	button?: ReactNode;
	handleDeleteSingleItem: () => void;
};

const RemoveCartAlert: FC<RemoveCartAlertProps> = ({ handleDeleteSingleItem, ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef<any>();
	const bg = useColorModeValue('container.light', 'container.dark');
	const bgColorButton = useColorModeValue('input.light', 'input.dark');

	return (
		<>
			<PiTrashBold color='#EB5757' cursor='pointer' onClick={onOpen} />
			<AlertDialog
				motionPreset='slideInBottom'
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
			>
				<AlertDialogOverlay />

				<AlertDialogContent bgColor={bg}>
					<AlertDialogHeader fontSize='20px' fontWeight='700'>
						Discard Changes?
					</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Are you sure you want to remove 2 * Kitkat from cart which costs Tk. 240?
					</AlertDialogBody>
					<AlertDialogFooter>
						<AlertButton
							text='Cancel'
							bgColor={bgColorButton}
							ref={cancelRef}
							onClick={onClose}
							color='text.light'
							_dark={{
								color: 'text.dark',
							}}
						/>
						<AlertButton
							text='Remove'
							bgColor='red.light'
							ml={3}
							onClick={() => {
								handleDeleteSingleItem();
								onClose();
							}}
							color='text.dark'
							_dark={{
								color: 'text.light',
							}}
						/>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};

export default RemoveCartAlert;

type AlertButtonProps = ButtonProps & {
	text: string;
	ref?: any;
};

const AlertButton: FC<AlertButtonProps> = ({ text, ...props }) => {
	return (
		<Button borderRadius='30px' {...props}>
			{text}
		</Button>
	);
};
