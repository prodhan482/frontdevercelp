import TestTable from '@/components/util/custom-table/TestTable';
import { Badge, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { PiNotepad } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineUser, AiFillSetting } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import TableIcon from '@/components/dashboard/TableIcon';
import TableHeader from '@/components/dashboard/TableHeader';
import TableData from '@/components/dashboard/TableData';
import TableRow from '@/components/dashboard/TableRow';
import { useGetOrdersQuery } from '@/store/services/orderApi';
import { useGetSelfTestQuery } from '@/store/services/productApi';
import { useRouter } from 'next/navigation';

const MyOrdersSection = () => {
	const {
		data: selfData,
		isLoading: selfIsLoading,
		isSuccess: selfIsSuccess,
		isError: selfIsError,
	} = useGetSelfTestQuery({});
	const {
		data: orderData,
		isLoading: orderIsLoading,
		isSuccess: orderIsSuccess,
		isError: orderIsError,
	} = useGetOrdersQuery({ customerId: selfData?.id, limit: 9 }, { skip: !selfData?.id });

	const tableIconColor = useColorModeValue('primaryDark.light', 'primaryDark.dark');
	const router = useRouter();

	const headers = [
		{
			title: 'Order',
			icon: <TableIcon color={tableIconColor} Icon={PiNotepad} />,
		},
		{
			title: 'Date',
			icon: <TableIcon color={tableIconColor} Icon={SlCalender} />,
		},
		{
			title: 'Ship To',
			icon: <TableIcon color={tableIconColor} Icon={AiOutlineUser} />,
		},
		{
			title: 'Total',
			icon: <TableIcon color={tableIconColor} Icon={BsCurrencyDollar} />,
		},
		{
			title: 'Status',
			icon: <TableIcon color={tableIconColor} Icon={TiTick} />,
		},
		{
			title: 'Actions',
			icon: <TableIcon color={tableIconColor} Icon={AiFillSetting} />,
		},
	];

	const customTableHeaders = (
		<>
			{headers.map((item, index) => (
				<TableHeader header={item.title} icon={item.icon} key={index}></TableHeader>
			))}
		</>
	);

	const containerColor = useColorModeValue('container.light', 'container.dark');

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
		<Flex
			direction='column'
			overflowX='auto'
			gap='20px'
			bgColor={containerColor}
			p={{ base: '20px', lg: '32px' }}
			borderRadius='16px'
		>
			<Text fontSize={{ base: '28px', lg: '32px' }} fontWeight='700'>
				My Orders
			</Text>
			<Flex
				direction='column'
				minW={{ base: '295px', lg: 'full' }}
				overflowX='auto'
				border='1px'
				borderRadius='6px'
				borderColor='#DFE3E8'
			>
				<TestTable customTableHeaders={customTableHeaders}>
					{orderData?.items &&
						orderData?.items?.map((item: any, index: number) => (
							<TableRow key={index}>
								<TableData
									fontWeight='400'
									onClick={() => router.push(`/order/${item?.entity_id}`)}
									userSelect='none'
									cursor='pointer'
								>
									{item?.increment_id && item?.increment_id}
								</TableData>
								<TableData fontWeight='400'>{item?.created_at && item?.created_at}</TableData>
								<TableData fontWeight='400'>
									{item?.customer_firstname && item?.customer_firstname}{' '}
									{item?.customer_lastname && item?.customer_lastname}
								</TableData>
								<TableData fontWeight='700'>{item?.grand_total && item?.grand_total}</TableData>
								<TableData>
									<Badge colorScheme={getStatusColorScheme(item?.status)}>
										{item?.status && item?.status}
									</Badge>
								</TableData>
								<TableData>
									<Badge mr='9px' colorScheme='green'>
										Action
									</Badge>
									<Badge colorScheme='purple'>Reorder</Badge>
								</TableData>
							</TableRow>
						))}
				</TestTable>
			</Flex>
		</Flex>
	);
};

export default MyOrdersSection;
