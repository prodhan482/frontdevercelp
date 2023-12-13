import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	useColorModeValue,
	Heading,
	Grid,
	useTheme,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store/slices/hooks';
import { toggleSidebar } from '@/store/slices/sidebarSlice';
import SideBarHamburger from './SideBarHamburger';
import SideBarLogo from './SideBarLogo';
import CategoryAccordion from '../accordion/category-accordion/CategoryAccordion';
import SidebarFooter from './SidebarFooter';

import { FiHome } from 'react-icons/fi';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { BsBagCheck } from 'react-icons/bs';
import { BiBookmarkHeart } from 'react-icons/bi';
import NavItem from '../navbar/NavItem';

const SidebarDrawer: React.FC = () => {
	const textColor = useColorModeValue('dark-primary.light', 'dark-primary.dark');
	const iconColor = useTheme().colors.primaryDark.light;
	const bgColor = useColorModeValue('container.light', 'container.dark');
	const sideIsOpen = useAppSelector(state => state.sidebar.isOpen);
	const dispatch = useAppDispatch();

	const handleClose = () => {
		dispatch(toggleSidebar());
	};

	const navbarItems = (
		<Grid templateColumns='1fr 9fr' alignItems='center' my='10px' rowGap='14px'>
			<FiHome color={iconColor} />
			<NavItem>Home</NavItem>
			<MdOutlineLocalOffer color={iconColor} />
			<NavItem>Offers</NavItem>
			<BsBagCheck color={iconColor} />
			<NavItem>Plastic Free</NavItem>
			<BiBookmarkHeart color={iconColor} />
			<NavItem>Favorites</NavItem>
		</Grid>
	);

	return (
		<>
			<Drawer isOpen={sideIsOpen} placement='left' onClose={handleClose}>
				<DrawerOverlay />
				<DrawerContent bgColor={bgColor}>
					<DrawerHeader pb={0} mb={0}>
						<SideBarHamburger />
						{/* Switch based on page */}
						{/* <SideBarLogo mx='auto' /> */}
						{navbarItems}
					</DrawerHeader>

					<DrawerBody>
						<Flex flex={1} py='16px' flexDir='column' gap='16px'>
							<Heading fontSize='14px' fontWeight='700' color={textColor}>
								Browse by categories
							</Heading>
							<CategoryAccordion />
						</Flex>
					</DrawerBody>

					<DrawerFooter>
						<SidebarFooter flex={1} />
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SidebarDrawer;
