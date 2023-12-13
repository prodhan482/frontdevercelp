import { Flex, FlexProps, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import RecycleImage from './RecycleImage';

type RecycleAnimation1Props = FlexProps & {
	title: string;
	subtitle: string;
};

const RecycleAnimation1: FC<RecycleAnimation1Props> = ({ title, subtitle, ...props }) => {
	return (
		<Flex
			justify={{ base: "", lg: "center" }}
			align={{ base: "flex-end", lg: "center" }}
			bgColor='#F87C56'
			h={{ base: "140px", lg: "164px" }}
			borderRadius='8px'
			px={{ base: "12px", lg: "32px" }}
			py={{ base: "12px", lg: "32px" }}
			position='relative'
			{...props}
		>
			<Stack spacing={0} overflow='hidden'>
				<Text
					fontSize={{ base: "18px", lg: "34px" }}
					fontWeight='700'
					color='container.light'
					_dark={{
						color: "container.dark",
					}}
				>
					{title}
				</Text>
				<Text
					w={{ base: "85px", lg: "70%" }}
					fontSize={{ base: "12px", lg: "24px" }}
					fontWeight='600'
					color='container.light'
					_dark={{
						color: "container.dark",
					}}
				>
					{subtitle}
				</Text>
				<RecycleImage left='-50px' />
			</Stack>
		</Flex>
	);
};

export default RecycleAnimation1;
