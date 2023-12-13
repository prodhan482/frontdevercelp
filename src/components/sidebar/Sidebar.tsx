import {
	Flex,
	Heading,
	Stack,
	StackProps,
	useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

import SideBarLogo from "./SideBarLogo";
import CategoryAccordion from "../accordion/category-accordion/CategoryAccordion";
import SideBarHamburger from "./SideBarHamburger";
import SidebarFooter from "./SidebarFooter";

type SidebarProps = StackProps & {};
const Sidebar: React.FC<SidebarProps> = ({ ...props }) => {
	const textColor = useColorModeValue(
		"dark-primary.light",
		"dark-primary.dark"
	);

	return (
		// <AnimatePresence>
		<SideBarWrapper {...props}>
			<SideBarHamburger px='16px' />
			<SideBarLogo mx='auto' />
			<Heading fontSize='14px' fontWeight='700' color={textColor} p='16px'>
				Browse by categories
			</Heading>
			<Flex
				flex={1}
				pb='16px'
				flexDir='column'
				gap='16px'
				overflowY='auto'
				px='16px'
			>
				<CategoryAccordion />
			</Flex>
			<SidebarFooter justifySelf='flex-end' px='16px' />
		</SideBarWrapper>
		// </AnimatePresence>
	);
};

export default Sidebar;

type SideBarWrapperProps = StackProps & {
	children: ReactNode;
};
const SideBarWrapper = ({ children, ...props }: SideBarWrapperProps) => {
	const bgColor = useColorModeValue("container.light", "container.dark");
	return (
		<Stack
			{...props}
			as={motion.div}
			// p='16px'
			minW='260px'
			bgColor={bgColor}
			// h='calc(100vh - 36px)'
			zIndex='2000'
			initial={{ x: -260 }}
			animate={{ x: 0, transition: { duration: 0.3 } }}
			exit={{ x: -260, opacity: 0, transition: { duration: 0.3 } }}
			py='16px'
		>
			{children}
		</Stack>
	);
};
