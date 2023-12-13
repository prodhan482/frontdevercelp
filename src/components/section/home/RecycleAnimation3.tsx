import { Flex, FlexProps, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import RecycleImage from './RecycleImage';

type RecycleAnimation3Props = FlexProps & {
	title: string;
	subtitle: string;
};

const RecycleAnimation3: FC<RecycleAnimation3Props> = ({ title, subtitle, ...props }) => {
	return (
		<Flex
			justify={{ base: '', lg: '' }}
			align={{ base: 'flex-end', lg: 'center' }}
			bgColor='#42B6E7'
			h={{ base: '140px', lg: '164px' }}
			borderRadius='8px'
			px={{ base: '12px', lg: '32px' }}
			py={{ base: '12px', lg: '32px' }}
			position='relative'
			{...props}
		>
			<Stack spacing={0}>
				<Text
					fontSize={{ base: '18px', lg: '34px' }}
					fontWeight='700'
					color='container.light'
					_dark={{
						color: 'container.dark',
					}}
				>
					{title}
				</Text>
				<Text
					w={{ base: '85px', lg: 'auto' }}
					fontSize={{ base: '12px', lg: '24px' }}
					fontWeight='600'
					color='container.light'
					_dark={{
						color: 'container.dark',
					}}
				>
					{subtitle}
				</Text>
			</Stack>
			<RecycleImage right='0' top='0' />
		</Flex>
	);
};

export default RecycleAnimation3;
