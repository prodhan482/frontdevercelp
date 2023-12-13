import { Button, Flex, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import ArticleCard from './ArticleCard';
import ArticleReadMore from './ArticleReadMore';

const ArticleSection = () => {
	return (
		<Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap='10px'>
			<Flex direction='column' gap='14px'>
				<Flex justifyContent='space-between'>
					<Heading fontSize={{ base: '22px', lg: '38px' }} fontWeight='700'>
						Article
					</Heading>
					<Button variant='link' fontSize='12px' fontWeight='600'>
						View All
					</Button>
				</Flex>
				<Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap='2px'>
					<ArticleCard image='/article/articleImage1.png' />
					<ArticleCard image='/article/articleImage2.png' />
				</Grid>
			</Flex>
			<ArticleReadMore />
		</Grid>
	);
};

export default ArticleSection;
