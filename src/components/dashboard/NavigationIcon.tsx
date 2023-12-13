import React from "react";
import { useColorMode } from "@chakra-ui/react";
type NavigationIconProps = {
	Icon: any;
};

const NavigationIcon: React.FC<NavigationIconProps> = ({ Icon }) => {
	const { colorMode } = useColorMode();
	return (
		<Icon size='16px' color={colorMode === "light" ? "#001E00" : "#F3F3EF"} />
	);
};

export default NavigationIcon;
