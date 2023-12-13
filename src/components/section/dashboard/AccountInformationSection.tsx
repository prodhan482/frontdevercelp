import {
	Badge,
	Button,
	Flex,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { PiNotepad } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineUser, AiFillSetting } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import TestTable from '@/components/util/custom-table/TestTable';
import TableIcon from '@/components/dashboard/TableIcon';
import TableHeader from '@/components/dashboard/TableHeader';
import TableRow from '@/components/dashboard/TableRow';
import TableData from '@/components/dashboard/TableData';
import ContactInformation from '@/components/dashboard/ContactInformation';
import AddressBook from '@/components/dashboard/AddressBook';

const headers = [
	{
		title: 'Order',
		icon: <TableIcon Icon={PiNotepad} />,
	},
	{
		title: 'Date',
		icon: <TableIcon Icon={SlCalender} />,
	},
	{
		title: 'Ship To',
		icon: <TableIcon Icon={AiOutlineUser} />,
	},
	{
		title: 'Total',
		icon: <TableIcon Icon={BsCurrencyDollar} />,
	},
	{
		title: 'Status',
		icon: <TableIcon Icon={TiTick} />,
	},
	{
		title: 'Actions',
		icon: <TableIcon Icon={AiFillSetting} />,
	},
];

const AccountInformationSection = () => {
	const textColor = useColorModeValue('text.light', 'text.dark');
	const buttonTextColor = useColorModeValue('#1A202C', '#1A202C');
	const tableIconColor = useColorModeValue(
		'primaryDark.light',
		'primaryDark.dark'
	);
	const containerColor = useColorModeValue('container.light', 'container.dark');

	const customTableHeaders = (
		<>
			{headers.map((item, index) => (
				<TableHeader
					header={item.title}
					icon={item.icon}
					key={index}
				></TableHeader>
			))}
		</>
	);

	const myOrders = [
		{
			order: '#000014357',
			date: '9/10/23',
			shipTo: 'Jon Snow',
			total: '৳569.00',
			status: 'Completed',
			action: {
				viewOrder: 'View Order',
				reOrder: 'Reorder',
			},
		},
		{
			order: '#000014357',
			date: '9/10/23',
			shipTo: 'Jon Snow',
			total: '৳569.00',
			status: 'Pending',
			action: {
				viewOrder: 'View Order',
				reOrder: 'Reorder',
			},
		},
		{
			order: '#000014357',
			date: '9/10/23',
			shipTo: 'Jon Snow',
			total: '৳569.00',
			status: 'Cancelled',
			action: {
				viewOrder: 'View Order',
				reOrder: 'Reorder',
			},
		},
	];

	const getStatusColorScheme = (status: string) => {
		switch (status) {
			case 'Completed':
				return 'green';
			case 'Pending':
				return 'yellow';
			case 'Cancelled':
				return 'red';
		}
	};

	return (
		<Stack
			bgColor={containerColor}
			p={{ base: '20px', lg: '32px' }}
			borderRadius='16px'
			gap='25px'
			overflowX='auto'
		>
			<Text fontSize={{ base: '28px', lg: '32px' }} fontWeight={700}>
				Account Information
			</Text>
			<Stack gap='25px'>
				<ContactInformation />
				<AddressBook />
				{/* Recent orders */}

				<Stack gap='8px'>
					<Flex justifyContent='space-between'>
						<Text fontSize='24px' fontWeight='700'>
							Recent Orders
						</Text>
						<Button
							fontSize='16px'
							fontWeight={600}
							variant='link'
							color='#1E90FF'
						>
							View All
						</Button>
					</Flex>
					<Flex
						color={textColor}
						border='1px'
						borderRadius='6px'
						borderColor='#DFE3E8'
						minW={{ base: '295px', lg: 'full' }}
						overflowX='auto'
					>
						<TestTable customTableHeaders={customTableHeaders}>
							{myOrders.map((item, index) => (
								<TableRow key={index}>
									<TableData fontWeight='400'>{item.order}</TableData>
									<TableData fontWeight='400'>{item.date}</TableData>
									<TableData fontWeight='400'>{item.shipTo}</TableData>
									<TableData fontWeight='700'>{item.total}</TableData>
									<TableData>
										<Badge colorScheme={getStatusColorScheme(item.status)}>
											{item.status}
										</Badge>
									</TableData>
									<TableData>
										<Badge mr='9px' colorScheme='green'>
											{item.action.viewOrder}
										</Badge>
										<Badge colorScheme='purple'>{item.action.reOrder}</Badge>
									</TableData>
								</TableRow>
							))}
						</TestTable>
					</Flex>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default AccountInformationSection;
