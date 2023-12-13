import { useAppDispatch } from "@/store/slices/hooks";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type SideBarHamburgerType = FlexProps & {};

const SideBarHamburger: React.FC<FlexProps> = ({ ...props }) => {
	const hamburgerColor = useColorModeValue("text.light", "dark.dark");
	const dispatch = useAppDispatch();
	return (
		<Flex cursor='pointer' {...props}>
			<RxHamburgerMenu
				color={hamburgerColor}
				size='22px'
				onClick={() => dispatch(toggleSidebar())}
			/>
		</Flex>
	);
};

export default SideBarHamburger;
