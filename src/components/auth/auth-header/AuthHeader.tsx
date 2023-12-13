import { ContainerProps, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type AuthHeaderProps = ContainerProps & {
	title?: string;
	subtitle?: string;
	variant: 'logo-sm' | 'logo-lg';
};

const AuthHeader: FC<AuthHeaderProps> = ({ title, subtitle, variant, ...props }) => {
	const primaryDark = useColorModeValue('primaryDark.light', 'primaryDark.light');
	const imageDir = useColorModeValue('login-logo.light.svg', 'login-logo.dark.svg');

	return (
		<>
			{variant === 'logo-sm' && (
				<Flex direction='column' justifyContent='center' alignItems='center' {...props} gap='14px'>
					<Image w={{ base: '130px', lg: '78px' }} src={`/login/${imageDir}`} alt='logo' />
					<Flex direction='column' gap='6px'>
						<Text fontSize='36px' fontWeight={700} color={primaryDark}>
							{title}
						</Text>
						<Text fontSize='16' fontWeight={600}>
							{subtitle ? subtitle : ''}
						</Text>
					</Flex>
				</Flex>
			)}
			{variant === 'logo-lg' && (
				<Flex flexDir='column' justifyContent='center' alignItems='center' gap='20px'>
					<Image src={`/login/${imageDir}`} alt='logo' w='131px' h='134px' />
				</Flex>
			)}
		</>
	);
};

export default AuthHeader;
