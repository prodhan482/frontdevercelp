import { Flex, FlexProps, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MdOutlineHeadphones } from 'react-icons/md';

type SidebarFooterProps = FlexProps & {};
const SidebarFooter: FC<SidebarFooterProps> = ({...props}) => {
	const iconColor = useColorModeValue('text.light', 'text.dark');

	return (
		<Flex w='full' justify='space-between' {...props}>
			<Flex gap='4px' align='center'>
				<MdOutlineHeadphones color={iconColor} />
				<Text fontSize='14px'>Help</Text>
			</Flex>
			<Flex flexDir='column' align='flex-end'>
				<Text fontSize='14px' fontWeight='700'>
					09643 365 365
				</Text>
				<Text fontSize='10px'>Support 24/7</Text>
			</Flex>
		</Flex>
	);
};

export default SidebarFooter;
