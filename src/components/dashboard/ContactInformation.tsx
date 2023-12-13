import { useGetSelfTestQuery } from '@/store/services/productApi';
import {
	Button,
	Flex,
	Grid,
	GridItem,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { AiFillUnlock, AiOutlineEdit } from 'react-icons/ai';
import ChangePasswordModal from './ChangePasswordModal';

const ContactInformation = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const textColor = useColorModeValue('text.light', 'text.dark');
	const buttonTextColor = useColorModeValue('#1A202C', '#1A202C');
	const { data, isSuccess, isLoading } = useGetSelfTestQuery({});
	return (
		<Stack>
			<Flex justifyContent='space-between'>
				<Text fontSize='24px' fontWeight='700'>
					Contact Information
				</Text>
				<Link href='/dashboard/edit-information'>
					<Button
						fontSize='16px'
						fontWeight={600}
						variant='link'
						color='#1E90FF'
						leftIcon={<AiOutlineEdit />}
					>
						Edit
					</Button>
				</Link>
			</Flex>
			<Stack
				px='32px'
				py='8px'
				borderLeft='2px'
				borderColor={{ base: '#4ABD88', lg: textColor }}
				w='full'
			>
				<Grid templateColumns='repeat(5, 1fr)'>
					<GridItem colSpan={2}>
						<Stack fontSize='16px' fontWeight={700}>
							<Text>Name</Text>
							<Text>Email</Text>
							<Text>Phone</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={3}>
						<Stack fontSize='16px' fontWeight={400}>
							<Text>
								{data?.firstname && data?.firstname}{' '}
								{data?.lastname && data?.lastname}
							</Text>
							<Text>{data?.email && data?.email}</Text>
							<Text>{data?.addresses && data?.addresses[0]?.telephone}</Text>
						</Stack>
					</GridItem>
				</Grid>
				<Button
					w='154px'
					h='32px'
					color={buttonTextColor}
					bgColor='#EDF2F7'
					fontSize='14px'
					fontWeight={600}
					px='9px'
					leftIcon={<AiFillUnlock />}
					onClick={onOpen}
				>
					Change Password
				</Button>
				<ChangePasswordModal isOpen={isOpen} onClose={onClose} />
			</Stack>
		</Stack>
	);
};

export default ContactInformation;
