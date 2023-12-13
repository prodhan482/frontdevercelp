import { Box, Button, Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import Logo from '../util/logo/Logo';
import Link from 'next/link';
import SideBarHamburger from '../sidebar/SideBarHamburger';
import { useAppDispatch, useAppSelector } from '@/store/slices/hooks';
import NavItem from './NavItem';
import NavbarIconButton from './NavbarIconButton';
import SearchBarMobileContainer from '../search-bar/mobile/SearchBarMobileContainer';
import SearchBarDesktopContainer from '../search-bar/desktop/SearchBarDesktopContainer';
import SearchBarDesktop from '../search-bar/desktop/SearchBarDesktop';
import { hideSearch, showSearch } from '@/store/slices/searchSlice';
import { AnimatePresence, easeIn, easeOut, motion } from 'framer-motion';
import NavbarLoginContainer from './NavbarLoginContainer';

type NavBarProps = FlexProps & {};
const Navbar: FC<NavBarProps> = ({ ...props }) => {
	const dividerColor = useColorModeValue('text.light', 'primaryDark.dark');
	const sideIsOpen = useAppSelector((state: any) => state.sidebar.isOpen);
	const dispatch = useAppDispatch();
	const [search, setSearch] = useState<string>('');
	const isSearchOpen = useAppSelector((state: any) => state.search.isSearchOpen);

	const closeSearch = () => {
		dispatch(hideSearch());
	};
	useEffect(() => {
		if (search.length > 0) {
			dispatch(showSearch());
		}
	}, [search]);

	const divider = <Box w='1px' h='12px' bgColor={dividerColor} />;

	const leftPart = (
		<Flex gap='16px' align='center' flex={1}>
			{!sideIsOpen && (
				<>
					<SideBarHamburger />
					<Link href='/'>
						<Logo />
					</Link>
				</>
			)}
			{!isSearchOpen && (
				<Flex
					as={motion.div}
					key='navbar-menu'
					display={{ base: 'none', lg: 'flex' }}
					gap='16px'
					align='center'
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							easings: easeIn,
							delay: 0.3,
							duration: 0.3,
						},
					}}
					exit={{
						opacity: 0,
						transition: {
							easings: easeOut,
							delay: 0.5,
							duration: 0.3,
						},
					}}
				>
					<NavItem href='/'>Home</NavItem>
					{divider}
					<NavItem>Offer</NavItem>
					{divider}
					<NavItem>BOGO</NavItem>
					{divider}
					<NavItem>Plastic Free</NavItem>
				</Flex>
			)}
		</Flex>
	);

	const rightPart = (
		<Flex justify='flex-end' flex={1} align='center' gap={{ base: '8px', lg: '32px' }}>
			<Flex display={{ base: 'flex', lg: 'none' }}>
				<SearchBarMobileContainer />
			</Flex>
			<Flex display={{ base: 'none', lg: 'flex' }}>
				{/* <SearchBarDesktopContainer /> */}

				<SearchBarDesktop
					search={search}
					setSearch={setSearch}
					w={isSearchOpen ? '700px' : '300px'}
					transitionDelay='0.3s'
					transition='all 0.7s ease-in-out'
				/>
			</Flex>
			<SearchBarDesktopContainer search={search} setSearch={setSearch} />
			{!isSearchOpen ? (
				<>
					<Link href='/wishlist'>
						<NavbarIconButton variant='heart' />
					</Link>
					<NavbarIconButton variant='color-mode' />
					{divider}
					<NavbarLoginContainer />
				</>
			) : (
				<Button
					as={motion.button}
					key='button'
					variant='ghost'
					onClick={() => closeSearch()}
					initial={{
						opacity: 0,
						x: 50,
					}}
					animate={{
						opacity: 1,
						x: 0,
						transition: {
							easings: easeIn,
							delay: 0.2,
							duration: 0.3,
						},
					}}
					exit={{
						opacity: 0,
						x: 50,
						transition: {
							easings: easeOut,
							duration: 0.3,
						},
					}}
				>
					Cancel
				</Button>
			)}
		</Flex>
	);

	return (
		<NavbarWrapper sideIsOpen={sideIsOpen} {...props}>
			{leftPart}
			{rightPart}
		</NavbarWrapper>
	);
};

export default Navbar;

type NavbarWrapperProps = FlexProps & {
	children: ReactNode;
	sideIsOpen: boolean;
};

const NavbarWrapper: FC<NavbarWrapperProps> = ({ children, sideIsOpen, ...props }) => {
	const dispatch = useAppDispatch();
	const isSearchOpen = useAppSelector((state: any) => state.search.isSearchOpen);
	const closeSearch = () => {
		dispatch(hideSearch());
	};
	const bgColor = useColorModeValue('container.light', 'container.dark');
	return (
		<AnimatePresence>
			<Flex
				as={motion.div}
				minW='100vw'
				position='fixed'
				top={{ base: '34px', lg: isSearchOpen ? '0px' : '34px' }}
				zIndex={{ base: '999', lg: '1100' }}
				left='0'
				right='0'
				transition='all 0.2s ease-in-out'
				justify='flex-end'
				bgColor={bgColor}
				h='56px'
			>
				<Flex
					w={{ base: 'full', lg: sideIsOpen ? 'calc(100vw - 260px)' : 'full' }}
					py='14px'
					px={{ base: '16px', lg: sideIsOpen ? '24px' : '92px' }}
					bgColor={bgColor}
					justify='space-between'
					{...props}
				>
					{children}
				</Flex>
			</Flex>
			{isSearchOpen && (
				<Flex
					minW='100vw'
					minH='100vh'
					bg='rgba(0,0,0,0.7)'
					position='fixed'
					zIndex='1000'
					top='0'
					bottom='0'
					right='0'
					left='0'
					onClick={() => closeSearch()}
				></Flex>
			)}
		</AnimatePresence>
	);
};
