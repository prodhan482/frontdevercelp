import React, { FC } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

type OrderInformationProps = {
	data: any;
};

const ShippingInformation: FC<OrderInformationProps> = ({ data }) => {
	return (
		<Flex direction='column' gap='32px'>
			<Heading fontSize='24px' fontWeight='700'>
				Shipping Information
			</Heading>
			<Flex borderLeft='2px' px='32px' direction='column' gap='12px'>
				<Text fontSize='18px' fontWeight='700'>
					Shipping Address
				</Text>
				<Text fontSize='18px' fontWeight='700'>
					{data?.billing_address?.firstname && data?.billing_address?.firstname}{' '}
					{data?.billing_address?.lastname && data?.billing_address?.lastname}
				</Text>
				<Text fontSize='16px' fontWeight='400' w='240px'>
					{data?.billing_address?.street && data?.billing_address?.street}
					{data?.billing_address?.city && data?.billing_address?.city}
				</Text>
				<Text fontSize='16px' fontWeight='600'>
					{data?.billing_address?.telephone && data?.billing_address?.telephone}
				</Text>
			</Flex>
		</Flex>
	);
};

export default ShippingInformation;
