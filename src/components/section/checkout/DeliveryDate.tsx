import {
	Flex,
	Heading,
	Select,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const DeliveryDate = () => {
	const container = useColorModeValue('container.light', 'container.dark');
	const containerText = useColorModeValue('container.dark', 'container.dark');
	return (
		<Flex direction='column' gap='4px'>
			<Heading fontSize='24px' fontWeight='700'>
				Delivery Date
			</Heading>
			<Flex
				py={{ base: '16px', lg: '32px' }}
				px='16px'
				direction='column'
				gap={{ base: '8px', lg: '24px' }}
				bgColor={container}
				borderRadius='8px'
				flex={1}
			>
				<Text fontSize='16px' fontWeight='700'>
					Select Date
				</Text>
				<Select
					fontSize='14px'
					fontWeight='700'
					color={containerText}
					placeholder='Select Date'
					bgColor='#F3F3EF'
				>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
					<option value='option3'>Option 3</option>
				</Select>
				<Text fontSize='16px' fontWeight='700'>
					Select Slot
				</Text>
				<Select
					fontSize='14px'
					fontWeight='700'
					color={containerText}
					placeholder='Select Time'
					bgColor='#F3F3EF'
				>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
					<option value='option3'>Option 3</option>
				</Select>
			</Flex>
		</Flex>
	);
};

export default DeliveryDate;
