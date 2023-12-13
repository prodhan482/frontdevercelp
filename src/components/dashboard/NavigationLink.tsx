import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
type NavigationLinkProps = {
	title: string;
	icon: React.ReactNode;
	href: string;
	active?: boolean;
};

const NavigationLink: React.FC<NavigationLinkProps> = ({
	title,
	icon,
	href,
	active,
}) => {
	return (
		<Link href={href}>
			<Flex
				w='full'
				px='24px'
				py='18px'
				align='center'
				gap='12px'
				borderRight='4px solid'
				borderColor={active ? "dark-primary.light" : "transparent"}
				bgColor={active ? "bg-light.light" : "transparent"}
				_dark={{
					bgColor: active ? "bg-light.dark" : "transparent",
					borderColor: active ? "dark-primary.dark" : "transparent",
				}}
			>
				<Box color='primaryDark.light'>{icon}</Box>
				<Text
					fontWeight={active ? '700': '500'}
					color='dark-primary.light'
					_dark={{
						color: "dark-primary.dark",
					}}
				>
					{title}
				</Text>
			</Flex>
		</Link>
	);
};

export default NavigationLink;
