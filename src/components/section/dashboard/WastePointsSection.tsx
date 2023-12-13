import { Badge, Flex, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import TestTable from '@/components/util/custom-table/TestTable';
import DashboardPointCard from '@/components/dashboard/DashboardPointCard';
import TableIcon from '@/components/dashboard/TableIcon';
import TableHeader from '@/components/dashboard/TableHeader';
import TableRow from '@/components/dashboard/TableRow';
import TableData from '@/components/dashboard/TableData';
import { FaDollarSign, FaRegClipboard } from 'react-icons/fa';
import { BiCalendarAlt } from 'react-icons/bi';

const WastePointsSection = () => {
	const textColor = useColorModeValue('text.light', 'text.dark');
	const buttonTextColor = useColorModeValue('#1A202C', '#1A202C');
	const footer = useColorModeValue('footer.light', 'footer.dark');

	const tableIconColor = useColorModeValue(
		'primaryDark.light',
		'primaryDark.dark'
	);
	const containerColor = useColorModeValue('container.light', 'container.dark');

	const headers = [
		{
			title: 'Product Name',
			icon: <TableIcon color={tableIconColor} Icon={BiCalendarAlt} />,
		},
		{
			title: 'Receive',
			icon: <TableIcon color={tableIconColor} Icon={FaDollarSign} />,
		},
		{
			title: 'Weight',
			icon: <TableIcon color={tableIconColor} Icon={FaRegClipboard} />,
		},
		{
			title: 'Qty',
			icon: <TableIcon color={tableIconColor} Icon={AiFillSetting} />,
		},
		{
			title: 'Waste Points',
			icon: <TableIcon color={tableIconColor} Icon={TiTick} />,
		},
		{
			title: 'Order Id',
			icon: <TableIcon color={tableIconColor} Icon={TiTick} />,
		},
	];

	const myOrders = [
		{
			productName: 'Rani Chaler Gura Rice Flour , 1 kg',
			receive: '1',
			weight: '10',
			qty: '1',
			wastePoints: '1',
			orderId: '#000007045',
		},
		{
			productName: 'PRAN Nazirshail Rice , 5 kg	',
			receive: '1',
			weight: '25',
			qty: '1',
			wastePoints: '2.5',
			orderId: '#000007045',
		},
		{
			productName: 'Dettol Soap Aloe Vera Bathing Bar Soap, 75 gm',
			receive: '1',
			weight: '2',
			qty: '1',
			wastePoints: '0.2',
			orderId: '#000007045',
		},
		{
			productName: 'Rani Chaler Gura Rice Flour , 1 kg',
			receive: '1',
			weight: '10',
			qty: '1',
			wastePoints: '1',
			orderId: '#000007045',
		},
		{
			productName: 'Rani Chaler Gura Rice Flour , 1 kg',
			receive: '1',
			weight: '10',
			qty: '1',
			wastePoints: '1',
			orderId: '#000007045',
		},
	];

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

	// Heading
	const HeadingSection = (
		<Text
			fontSize={{ base: '28px', lg: '32px' }}
			fontWeight={700}
			lineHeight='normal'
		>
			My Waste Points
		</Text>
	);
	// Point section
	const PointSection = (
		<Grid gap={{ base: '14px', lg: '42px' }} templateColumns={'1fr 1fr 1fr'}>
			<DashboardPointCard heading='Total Waste' value='37' />
			<DashboardPointCard heading='Received Waste' value='37' />
			<DashboardPointCard heading='Unreceived Waste' value='--' border='none' />
		</Grid>
	);
	// Table Demo
	const TableSection = (
		<Flex direction='column' gap='24px'>
			<Text
				display={{ base: 'none', lg: 'block' }}
				fontSize='24px'
				fontWeight='700'
			>
				Waste Points History
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
					{myOrders.map((item, index) => (
						<TableRow key={index}>
							<TableData fontSize='14px' lineHeight='140%'>
								{item.productName}
							</TableData>
							<TableData fontWeight='600'>
								<Badge bgColor='#D4F8D3' _dark={{color: '#222'}}>{item.receive}</Badge>
							</TableData>
							<TableData fontSize='14px'>{item.weight}</TableData>
							<TableData fontSize='14px'>{item.qty}</TableData>
							<TableData fontSize='14px'>{item.wastePoints}</TableData>
							<TableData fontSize='14px'>{item.orderId}</TableData>
						</TableRow>
					))}
				</TestTable>
			</Flex>
		</Flex>
	);

	return (
		<Flex
			flexDirection='column'
			bgColor={containerColor}
			p={{ base: '20px', lg: '32px' }}
			borderRadius='16px'
			gap={{ base: '28px', lg: '48px' }}
			h='full'
			overflowX='auto'
		>
			<Flex
				flexDir='column'
				justify='space-between'
				gap={{ base: '28px', lg: '32px' }}
				w={{ base: '90%', lg: '70%' }}
			>
				{HeadingSection}
				{PointSection}
			</Flex>
			{TableSection}
		</Flex>
	);
};

export default WastePointsSection;
