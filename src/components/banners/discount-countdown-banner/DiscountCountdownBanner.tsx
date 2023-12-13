import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

const DiscountCountdownBanner: FC = () => {
	return (
		<Flex
			flex={1}
			backgroundImage='url("banners/discount-countdown.svg")'
			backgroundRepeat='no-repeat'
			backgroundPosition='cover'
			backgroundSize='cover'
			bgColor='#DFFFC0'
			borderRadius='8px'
		></Flex>
	);
};

export default DiscountCountdownBanner;
