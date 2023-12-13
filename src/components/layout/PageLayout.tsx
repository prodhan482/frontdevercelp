import React, { FC, ReactNode } from 'react';
import Navbar from '../navbar/Navbar';
import { Flex, Show, transition, useColorModeValue } from '@chakra-ui/react';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import { useAppSelector } from '@/store/slices/hooks';
import NavbarTopSlider from '../navbar/NavbarTopSlider';

import SidebarDrawer from '../sidebar/SidebarDrawer';
import DesktopCategory from '../category/DesktopCategory';
import CartDrawer from '../floating-card/cart-drawer/CartDrawer';
import { AnimatePresence, motion } from 'framer-motion';

type PageLayoutProps = {
	children: ReactNode;
	isHome?: boolean;
	isNotCart?: boolean;
	isNotFooter?: boolean;
};

const PageLayout: FC<PageLayoutProps> = ({
	children,
	isHome,
	isNotCart,
	isNotFooter,
	...props
}) => {
	const sideIsOpen = useAppSelector((state) => state.sidebar.isOpen);
	const bg = useColorModeValue('bg.light', 'bg.dark');

	const sliderContents = (
		<>
			<Show above='md'>
				<AnimatePresence>{sideIsOpen && <Sidebar />}</AnimatePresence>
			</Show>
			{/* <Show above='md'>{sideIsOpen && <Flex w='260px' h='full' />}</Show> */}
			<Show below='md'>{sideIsOpen && <SidebarDrawer />}</Show>
		</>
	);

	return (
		<Flex flexDir='column' w='100vw' h='100vh' overflow='hidden' bgColor={bg}>
			<NavbarTopSlider />
			<Flex w='100vw' h='100vh' overflowX='hidden'>
				{sliderContents}
				<Flex flexDir='column' w='full' overflowY='auto'>
					<Navbar />
					<Flex w='full' minH='56px'></Flex>
					<AnimatePresence>
						{isHome && !sideIsOpen && (
							<Flex
								display={{ base: 'none', md: 'flex' }}
								as={motion.div}
								key='desktop-category'
								initial={{ y: 0, opacity: 0 }}
								animate={{
									y: 0,
									opacity: 1,
									transition: { delay: 0.4, duration: 0.4 },
								}}
								exit={{ y: -200, opacity: 0, transition: { duration: 0 } }}
							>
								<DesktopCategory flex={1} />
							</Flex>
						)}
					</AnimatePresence>
					<Body>{children}</Body>
					{!isNotCart && <CartDrawer />}
					{!isNotFooter && <Footer />}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default PageLayout;

type BodyProps = {
	children: ReactNode;
};
const Body: FC<BodyProps> = ({ children }) => {
	return (
		<Flex as='main' w='full' maxW='1440px' mx='auto'>
			{children}
		</Flex>
	);
};
