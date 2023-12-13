import { Flex, FlexProps, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, {FC} from 'react';

type ArticleCardProps = FlexProps & {
    image?: string;
}

const ArticleCard: FC<ArticleCardProps> = ({image, ...props}) => {
	const articleBg = useColorModeValue('container.light', 'container.dark');

	return (
		<Flex
			direction='column'
			p='18px'
			bgColor={articleBg}
			gap='12px'
			{...props}
			borderRadius='8px'
		>
			<Image src={image ? image : ''} alt='article image' />
			<Flex justifyContent='space-between'>
				<Text fontSize='10px' fontWeight='400'>
					30 August, 2023
				</Text>
				<Text fontSize='10px' fontWeight='600'>
					updated 2 hours ago
				</Text>
			</Flex>
			<Text fontSize='14px' fontWeight='700'>
				The Evolution of Food
			</Text>
			<Text fontSize='12px' fontWeight='400'>
				Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
				libero et velit interdum, ac aliquet odio mattis.
			</Text>
		</Flex>
	);
};

export default ArticleCard;
