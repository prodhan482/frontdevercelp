import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ArticleReadMore = () => {
	const textColor = useColorModeValue('container.light', 'container.dark');

	return (
		<Flex
			backgroundImage="url('/article/articleImage3.png')"
			backgroundSize='cover'
			borderRadius='4px'
		>
			<Flex
				borderRadius='4px'
				bg='rgba(0,0,0,0.72)'
				direction='column'
				w='full'
				h='full'
				p='22px'
				gap='12px'
			>
				<Text
					color={textColor}
					fontSize='62px'
					fontWeight='700'
					lineHeight='60px'
					w={{ base: 'auto', lg: '386px' }}
					letterSpacing='-1.24px'
				>
					The Evolution of Food
				</Text>

				<Text color={textColor} fontSize='14px' fontWeight='600'>
					updated 2 hours ago
				</Text>
				<Text color={textColor} fontWeight='400'>
					Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis. Sorem
					ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
					libero et velit interdum, ac aliquet odio mattis
				</Text>

				<Flex marginTop='auto' justifyContent='space-between'>
					<Button bgColor='#E4F9D8'>Read More</Button>
					<Text color={textColor} fontSize='14px' fontWeight='600' my='auto'>
						30 August, 2023
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ArticleReadMore;
