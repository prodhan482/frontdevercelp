import {
	useColorModeValue,
	Stack,
	Text,
  TextareaProps,
  Textarea,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomTextareaProps = TextareaProps & {
	label: string;
};

const CustomTextarea: FC<CustomTextareaProps> = ({ label, ...props }) => {
	const container = useColorModeValue('container.light', 'container.dark');
	return (
		<Stack gap='6px'>
			<Text fontSize='12px' lineHeight='12px' fontWeight='700'>
				{label ? label : 'Label'}
			</Text>
			<Textarea
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

export default CustomTextarea;
