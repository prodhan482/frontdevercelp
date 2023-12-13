import { Input, useColorModeValue, Stack, Text, InputProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomInputProps = InputProps & {
	label: string;
};

const CustomInput: FC<CustomInputProps> = ({ label, ...props }) => {
	const container = useColorModeValue('container.light', 'container.dark');
	return (
		<Stack gap='6px'>
			<Text fontSize='12px' lineHeight='12px' fontWeight='700'>
				{label ? label : 'Label'}
			</Text>
			<Input
				size='lg'
				width='full'
				py='15px'
				bgColor={container}
				border='1px solid'
				borderColor='stroke.light'
				borderRadius='4px'
				_placeholder={{
					color: 'gray.400',
					fontSize: '16px',
				}}
				{...props}
			/>
		</Stack>
	);
};

export default CustomInput;
