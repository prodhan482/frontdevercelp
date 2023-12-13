import { IconButton, IconButtonProps, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaPlus } from 'react-icons/fa';

type PlusButtonProps = IconButtonProps & {};

const PlusButton: FC<PlusButtonProps> = ({ ...props }) => {
	const bthStroke = useColorModeValue('#11823B', '#11823B'); //bth-stroke.light and bth-stroke.dark
	const buttonColor = useColorModeValue('#FFFFFF', '#000000'); //container.light and container.dark
	return (
		<IconButton
			size='sm'
			isRound
			icon={<FaPlus color={buttonColor} />}
			bgColor='primaryLight.light'
			border='2px solid'
			borderColor={bthStroke}
			_hover={{ bgColor: 'primaryLight.light' }}
			{...props}
		/>
	);
};

export default PlusButton;
