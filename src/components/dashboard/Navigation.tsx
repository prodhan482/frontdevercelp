import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Stack,
	StackProps,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import NavigationLink from './NavigationLink';
import { BiDollar, BiUser } from 'react-icons/bi';
import NavigationIcon from './NavigationIcon';
import { AiOutlineDown, AiOutlineEdit } from 'react-icons/ai';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { FiMapPin } from 'react-icons/fi';
import { PiNotepad } from 'react-icons/pi';
import Link from 'next/link';

type NavigationProps = StackProps & {
	active?: string;
};

const navigations = [
	{
		title: 'Dashboard',
		icon: <NavigationIcon Icon={BiUser} />,
		href: '/dashboard',
	},
	{
		title: 'My Orders',
		icon: <NavigationIcon Icon={PiNotepad} />,
		href: '/dashboard/my-orders',
	},
	{
		title: 'Address Book',
		icon: <NavigationIcon Icon={FiMapPin} />,
		href: '/dashboard/address-book',
	},

	{
		title: 'Edit Information',
		icon: <NavigationIcon Icon={AiOutlineEdit} />,
		href: '/dashboard/edit-information',
	},
	{
		title: 'Reward Points',
		icon: <NavigationIcon Icon={BiDollar} />,
		href: '/dashboard/reward-points',
	},
	{
		title: 'Waste Points',
		icon: <NavigationIcon Icon={FaRegFaceSmile} />,
		href: '/dashboard/waste-points',
	},
];

const Navigation: React.FC<NavigationProps> = ({ active }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const activeNavigation = navigations.find((navigation) => navigation.title === active);
	const activeIcon = navigations.find((navigation) => navigation.title === active);

	const menuButtonLabel = activeNavigation ? activeNavigation.title : 'Menu';
	const menuButtonIcon = activeIcon ? activeIcon.icon : '';

	return (
		<>
			<Stack display={{ base: 'none', lg: 'flex' }} w='full'>
				{navigations.map((navigation, idx) => (
					<NavigationLink
						key={idx}
						title={navigation.title}
						icon={navigation.icon}
						href={navigation.href}
						active={active === navigation.title}
					/>
				))}
			</Stack>
			<Button
				display={{ base: 'flex', lg: 'none' }}
				justifyContent='space-between'
				size='sm'
				w='80%'
				rightIcon={<AiOutlineDown />}
				mx='auto'
				onClick={onOpen}
			>
				<Flex gap='4px'>
					{menuButtonIcon}
					{menuButtonLabel}
				</Flex>
			</Button>
			<Drawer isOpen={isOpen} placement='bottom' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent borderTopRadius='16px' pt='12px'>
					<DrawerBody paddingBottom='0px'>
						{navigations.map((navigation, idx) => (
							<Items
								key={idx}
								title={navigation.title}
								icon={navigation.icon}
								href={navigation.href}
							/>
						))}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Navigation;

type ItemsProps = {
	title: string;
	icon: React.ReactNode;
	href: string;
};

const Items: React.FC<ItemsProps> = ({ title, icon, href }) => {
	return (
		<Link href={href}>
			<Flex
				w='full'
				justify='space-between'
				align='center'
				py='20px'
				borderBottom='1px solid #E0E0E0'
			>
				<Text>{title}</Text>
				{icon}
			</Flex>
		</Link>
	);
};
