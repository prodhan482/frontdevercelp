import { Flex, FlexProps, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import RecycleImage from './RecycleImage';

type RecycleAnimation2Props = FlexProps & {
	title: string;
	subtitle: string;
};

const RecycleAnimation2: FC<RecycleAnimation2Props> = ({ title, subtitle, ...props }) => {
	return (
		<Flex
			justify={{ base: '', lg: '' }}
			align={{ base: 'flex-end', lg: 'center' }}
			bgColor='#94BB50'
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
				<RecycleImage right='0' bottom='-20px' />
			</Stack>
		</Flex>
	);
};

export default RecycleAnimation2;
