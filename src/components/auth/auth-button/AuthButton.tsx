import { Button, ButtonProps, Flex, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { FcGoogle } from "react-icons/fc";

type AuthButtonProps = ButtonProps & {
	label?: string;
	variant:
		| "back-home"
		| "auth-submit"
		| "custom"
		| "facebook"
		| "google"
		| "forget-password";
};

const AuthButton: FC<AuthButtonProps> = ({ label, variant, ...props }) => {
	const primaryDark = useColorModeValue(
		"primaryDark.light",
		"primaryDark.light"
	);
	const buttonTextColor = useColorModeValue(
		"container.light",
		"container.light"
	);
	const infoText = useColorModeValue("logo.light", "logo.dark");

	return (
		<>
			{variant === "back-home" && (
				<Button w='112px' h='32px' {...props}>
					Back Home
				</Button>
			)}

			{variant === "auth-submit" && (
				<Button
					w='full'
					borderRadius='4px'
					_hover={{ color: { primaryDark } }}
					color={buttonTextColor}
					bgColor={primaryDark}
					{...props}
				>
					{label ? label : "Submit"}
				</Button>
			)}
			{variant === "facebook" && (
				<Button
					w='full'
					borderRadius='4px'
					_hover={{ color: { primaryDark } }}
					color={buttonTextColor}
					bgColor='#4267B2'
					{...props}
				>
					{label}
				</Button>
			)}

			{variant === "google" && (
				<Button
					justifyContent='center'
					_hover={{ color: { primaryDark } }}
					color='#000000'
					fontSize='16px'
					fontWeight={600}
					border='1px solid #858693'
					w='full'
					borderRadius='4px'
					bgColor='#ffffff'
					leftIcon={<FcGoogle size={24} />}
					{...props}
				>
					{label}
				</Button>
			)}

			{variant === "custom" && <Button {...props}>{label}</Button>}

			{variant === "forget-password" && (
				<Button
					fontSize='14px'
					fontWeight={600}
					variant='link'
					color={infoText}
					{...props}
				>
					{label}
				</Button>
			)}
		</>
	);
};

export default AuthButton;
