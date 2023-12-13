import React, { FC } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import CustomBadge from '../util/custom-badge/CustomBadge';
import ShadedText from '../util/text/ShadedText';

type ProfileCardProps = {
	data: any;
};

const ProfileCard: FC<ProfileCardProps> = ({ data }) => {
	return (
		<Flex w='full' h='' justify='center' align='center'>
			<Flex flexDir='column' align='center' gap='16px'>
				<Box w='112px' h='112px'>
					<Image
						borderRadius='full'
						src='/profile/222c85e6c852819bc5d4b24a87a87fb6.png'
						objectFit='cover'
						alt='profile pic'
					/>
				</Box>
				<Flex flexDir='column' align='center' gap='8px'>
					<ShadedText>
						{data?.firstname && data?.firstname} {data?.lastname && data?.lastname}
					</ShadedText>
					<Text fontSize='14px' fontWeight='400'>
						{data?.email && data?.email}
					</Text>
					<CustomBadge>level 2 contributor</CustomBadge>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProfileCard;
