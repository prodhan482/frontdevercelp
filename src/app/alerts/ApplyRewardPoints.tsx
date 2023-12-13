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
	Flex,
	Input,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';

type ApplyRewardPointsProps = {
	isOpen: boolean;
	onClose: () => void;
};

const ApplyRewardPoints: FC<ApplyRewardPointsProps> = ({
	isOpen,
	onClose,
	...props
}) => {
	const cancelRef = useRef<any>();
	const [value, setValue] = React.useState(0);
	const bg = useColorModeValue('container.light', 'container.dark');
	const InputBgColor = useColorModeValue('#F5F5F5', '#111111');
	const bgColorButton = useColorModeValue('input.light', 'input.dark');
	const primarylight = useColorModeValue(
		'primaryLight.light',
		'primaryLight.dark'
	);
	const borderColor = useColorModeValue('bth-stroke.light', 'bth-stroke.dark');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(parseInt(e.target.value));
	};

	const AlertBodySection = (
		<Flex direction='column' gap='10px'>
			<Flex
				direction='column'
				lineHeight='24px'
				fontSize='16px'
				fontWeight='400'
			>
				<Flex>
					You have{' '}
					<Text fontWeight='700' px='4px'>
						3.7
					</Text>{' '}
					Reward Points
				</Flex>
				<Text>1 Point = 1 BDT</Text>
			</Flex>
			<Input
				value={value}
				type='number'
				onChange={e => handleInputChange(e)}
				size='md'
				width='full'
				py='15px'
				bgColor={InputBgColor}
				border='1px solid'
				borderColor='stroke.light'
				fontSize='14px'
				fontWeight='600'
				borderRadius='6px'
				_placeholder={{
					color: 'gray.400',
					fontSize: '16px',
				}}
			/>
		</Flex>
	);

	return (
		<>
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
						Apply reward points
					</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>{AlertBodySection}</AlertDialogBody>
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
							text='Apply Points'
							bgColor={primarylight}
							border='2px solid'
							borderColor={borderColor}
							ml={3}
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

export default ApplyRewardPoints;

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
