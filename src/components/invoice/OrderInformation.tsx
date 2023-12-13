import React, { FC } from 'react';
import { Badge, Flex, Heading, Text } from '@chakra-ui/react';

type OrderInformationProps = {
	data: any;
};

const OrderInformation: FC<OrderInformationProps> = ({ data }) => {
	const getStatusColorScheme = (status: string) => {
		switch (status) {
			case 'complete':
				return 'green';
			case 'processing':
				return 'yellow';
			case 'canceled':
				return 'red';
			default:
				return 'blue';
		}
	};

	return (
		<Flex direction='column' gap='32px'>
			<Heading fontSize='24px' fontWeight='700'>
				Order Information
			</Heading>
			<Flex borderLeft='2px' px='32px' direction='column' gap='12px'>
				<Flex justifyContent='space-between'>
					<Text fontSize='18px' fontWeight='700'>
						Order Id:
					</Text>
					<Text fontSize='16px' fontWeight='400'>
						{data?.increment_id && data?.increment_id}
					</Text>
				</Flex>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text fontSize='18px' fontWeight='700'>
						Order Status:
					</Text>
					<Badge colorScheme='green'>{data?.status && data?.status}</Badge>
				</Flex>
				<Flex justifyContent='space-between'>
					<Text fontSize='18px' fontWeight='700'>
						Date Ordered:
					</Text>
					<Text fontSize='16px' fontWeight='400'>
						{data?.created_at && data?.created_at}
					</Text>
				</Flex>
				<Flex justifyContent='space-between'>
					<Text fontSize='18px' fontWeight='700'>
						Plastic Consumed:
					</Text>
					<Text fontSize='16px' fontWeight='400'>
						200 gm
					</Text>
				</Flex>
				<Flex justifyContent='space-between'>
					<Text fontSize='18px' fontWeight='700'>
						Total:
					</Text>
					<Text fontSize='16px' fontWeight='400'>
						BDT: {data?.grand_total && data?.grand_total}
					</Text>
				</Flex>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text fontSize='18px' fontWeight='700'>
						Payment:
					</Text>
					<Badge colorScheme={getStatusColorScheme(data?.status)}>
						{data?.status && data?.status}
					</Badge>
				</Flex>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text fontSize='18px' fontWeight='700'>
						Payment Method:
					</Text>
					<Badge>
						{data?.payment?.additional_information[0] && data?.payment?.additional_information[0]}
					</Badge>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default OrderInformation;
