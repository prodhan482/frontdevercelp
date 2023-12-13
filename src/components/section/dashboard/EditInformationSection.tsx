import CustomButton from '@/components/util/custom-button/CustomButton';
import CustomInput from '@/components/util/custom-input/CustomInput';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const EditInformationSection = () => {
	const containerColor = useColorModeValue('container.light', 'container.dark');
	const InputBgColor = useColorModeValue('#F5F5F5', '#111111');

	return (
		<Flex
			direction='column'
			bgColor={containerColor}
			p={{ base: '20px', lg: '32px' }}
			borderRadius='16px'
			gap='25px'
		>
			<Text fontSize={{ base: '28px', lg: '32px' }} fontWeight={700}>
				Edit Information
			</Text>
			<Flex direction='column' bgColor='' gap='16px'>
				<CustomInput
					w={{ base: '100%', lg: '50%' }}
					label='First Name'
					type='text'
					bgColor={InputBgColor}
					h='36px'
				/>
				<CustomInput
					w={{ base: '100%', lg: '50%' }}
					label='Last Name'
					type='text'
					bgColor={InputBgColor}
					h='36px'
				/>
				<CustomInput
					w={{ base: '100%', lg: '50%' }}
					label='Email'
					type='email'
					bgColor={InputBgColor}
					h='36px'
				/>
				<CustomInput
					w={{ base: '100%', lg: '50%' }}
					label='Phone'
					type='number'
					bgColor={InputBgColor}
					h='36px'
				/>
				<CustomButton
					w='107px'
					variant='proceed'
					label='Proceed'
				></CustomButton>
			</Flex>
		</Flex>
	);
};

export default EditInformationSection;
