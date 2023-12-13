import React, { FC } from 'react';
import { Flex, Heading, Table, Tbody, Td, Thead, Tr, useColorModeValue } from '@chakra-ui/react';

type OrderDetailsProps = {
	data: any;
};

const OrderDetails: FC<OrderDetailsProps> = ({ data }) => {
	const darkPrimary = useColorModeValue('dark-primary.light', 'dark-primary.dark');
	return (
		<Flex pt='64px' direction='column' gap='20px'>
			<Heading fontSize='24px' fontWeight='700'>
				Order Details
			</Heading>
			<Table
				variant='unstyled'
				size='lg'
				borderLeft='2px solid #ECECE8'
				color={darkPrimary}
				px='32px'
			>
				<Thead borderBottom='2px solid #ECECE8'>
					<Tr>
						<Td fontSize='18px' fontWeight='700'>
							Product Name
						</Td>
						<Td fontSize='18px' fontWeight='700'>
							Price
						</Td>
						<Td fontSize='18px' fontWeight='700'>
							Waste Weight
						</Td>
						<Td fontSize='18px' fontWeight='700'>
							Quantity (Order)
						</Td>
						<Td fontSize='18px' fontWeight='700' textAlign='end'>
							Sub Total
						</Td>
					</Tr>
				</Thead>
				<Tbody>
					{data?.items &&
						data?.items.map((item: any, index: number) => (
							<Tr key={index}>
								<Td>{item?.name && item?.name}</Td>
								<Td>{item?.price && item?.price}</Td>
								<Td>50 gm</Td>
								<Td>{item?.qty_ordered && item?.qty_ordered}</Td>
								<Td textAlign='end'>{item?.row_total && item?.row_total}</Td>
							</Tr>
						))}
				</Tbody>
			</Table>
		</Flex>
	);
};

export default OrderDetails;
