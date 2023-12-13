import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type SubTotalProps = FlexProps & {
	data: any;
};

const SubTotal: FC<SubTotalProps> = ({ data, ...props }) => {
	return (
		<Flex w='full' justifyContent='end' pt='16px' {...props}>
			<Flex
				w='370px'
				fontSize='18px'
				fontWeight='600'
				p='32px'
				borderTop='2px'
				direction='column'
				gap='16px'
			>
				<Flex w='full' justifyContent='space-between'>
					<Text>Subtotal</Text>
					<Text> {data?.subtotal && data?.subtotal}</Text>
				</Flex>
				<Flex w='full' justifyContent='space-between'>
					<Text>Shipping & Handling</Text>
					<Text>{data?.shipping_amount && data?.subtotal}</Text>
				</Flex>
				<Flex w='full' justifyContent='space-between'>
					<Text>Grand Total</Text>
					<Text>৳{data?.total_due && data?.total_due}</Text>
				</Flex>
				<Flex w='full' justifyContent='space-between'>
					<Text>Total Waste</Text>
					<Text>50</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SubTotal;
