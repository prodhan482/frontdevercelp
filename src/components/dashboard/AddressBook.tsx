import React from "react";
import {
	Flex,
	Stack,
	Text,
} from '@chakra-ui/react';

const AddressBook = () => {
  return (
		<Stack>
			<Text fontSize='24px' fontWeight='700'>
				Address Book
			</Text>
			<Flex
				direction={{ base: 'column', lg: 'row' }}
				gap={{ base: '32px', lg: '0px' }}
				borderLeft={{ base: '2px', lg: '0px' }}
				borderColor='#4ABD88'
				pl={{ base: '32px', lg: '0px' }}
				mt={{ base: '11px', lg: '0px' }}
			>
				<Stack gap='14px'>
					<Text fontSize='18px' fontWeight={700}>
						Default Shipping Address
					</Text>
					<Stack gap='9px'>
						<Text fontSize='16px' fontWeight={600}>
							Tony Stark
						</Text>
						<Text fontSize='16px' fontWeight={400}>
							4/11 Humayun Road, Mohammadpur Dhaka 1207, Bangladesh
						</Text>
						<Text fontSize='16px' fontWeight={600}>
							01828398225
						</Text>
					</Stack>
				</Stack>
				<Stack
					gap='14px'
					pl={{ base: '0px', lg: '43px' }}
					borderLeft={{ base: '0px', lg: '2px' }}
				>
					<Text fontSize='18px' fontWeight={700}>
						Default Billing Address
					</Text>
					<Stack gap='9px'>
						<Text fontSize='16px' fontWeight={600}>
							Jamie Oliver
						</Text>
						<Text fontSize='16px' fontWeight={400}>
							4/11 Humayun Road, Mohammadpur Dhaka 1207, Bangladesh
						</Text>
						<Text fontSize='16px' fontWeight={600}>
							01828398225
						</Text>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default AddressBook;
