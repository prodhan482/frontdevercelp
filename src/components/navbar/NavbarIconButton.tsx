import { Box, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { FiHeart } from 'react-icons/fi';
import { VscColorMode } from 'react-icons/vsc';

type NavbarIconButtonProps = {
	variant?: 'color-mode' | 'heart';
};
const NavbarIconButton: FC<NavbarIconButtonProps> = ({ variant }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			{variant === 'color-mode' && (
				<Box as={motion.div} whileTap={{ scale: 0.9 }}>
					<VscColorMode
						cursor='pointer'
						size='22px'
						color={colorMode === 'light' ? 'text.light' : 'text.dark'}
						onClick={toggleColorMode}
					/>
				</Box>
			)}
			{variant === 'heart' && (
				<Box as={motion.div} whileTap={{ scale: 0.9 }}>
					<FiHeart
						cursor='pointer'
						size='22px'
						color={colorMode === 'light' ? 'text.light' : 'text.dark'}
					/>
				</Box>
			)}
		</>
	);
};

export default NavbarIconButton;
