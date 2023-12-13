import {
	Avatar,
	Menu,
	MenuButton,
	MenuItem,
	MenuItemProps,
	MenuList,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import CustomButton from '../util/custom-button/CustomButton';
import { useAppDispatch } from '@/store/slices/hooks';
import { logout } from '@/store/slices/authSlice';

type UserDropdownProps = {};

const UserDropdown: FC<UserDropdownProps> = ({ ...props }) => {
	const bgColor = useColorModeValue('container.light', 'container.dark');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useAppDispatch();

	const logOutHandler = (e: any) => {
		onClose();
		dispatch(logout());
	};
	return (
		<Menu {...props} isOpen={isOpen} onClose={onClose}>
			<MenuButton onClick={onOpen}>
				<Avatar size='xs' bg='green.500' />
			</MenuButton>

			<MenuList bgColor={bgColor} p='12px' boxShadow='subtle-shadow' borderRadius='12px'>
				<CustomMenuItem href='/dashboard'>Dashboard</CustomMenuItem>
				<CustomMenuItem href='/dashboard/my-orders'>My Orders</CustomMenuItem>
				<CustomMenuItem href='/dashboard/edit-information'>Edit Profile</CustomMenuItem>
				<CustomButton variant='logout' label='Logout' onClick={logOutHandler} />
			</MenuList>
		</Menu>
	);
};

export default UserDropdown;

type CustomMenuItemProps = MenuItemProps & {
	children: ReactNode;
	href?: string;
};

const CustomMenuItem: FC<CustomMenuItemProps> = ({ children, href, ...props }) => {
	const bgColor = useColorModeValue('container.light', 'container.dark');
	return (
		<Link href={href ? href : '/'}>
			<MenuItem bgColor={bgColor} py='8px'>
				<Text fontSize='16px' fontWeight='600'>
					{children}
				</Text>
			</MenuItem>
		</Link>
	);
};
