import { Badge, Flex, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import DashboardPointCard from '@/components/dashboard/DashboardPointCard';
import TableIcon from '@/components/dashboard/TableIcon';
import { FaDollarSign } from 'react-icons/fa';
import { PiNotepad } from 'react-icons/pi';
import { AiOutlineSetting } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import TableHeader from '@/components/dashboard/TableHeader';
import TestTable from '@/components/util/custom-table/TestTable';
import { MdOutlineNoteAlt } from 'react-icons/md';
import TableRow from '@/components/dashboard/TableRow';
import TableData from '@/components/dashboard/TableData';

const RewardPointsSection = () => {
	const textColor = useColorModeValue('text.light', 'text.dark');
	const buttonTextColor = useColorModeValue('#1A202C', '#1A202C');
	const footer = useColorModeValue('footer.light', 'footer.dark');

	const tableIconColor = useColorModeValue(
		'primaryDark.light',
		'primaryDark.dark'
	);
	const containerColor = useColorModeValue('container.light', 'container.dark');
	// Heading
	const HeadingSection = (
		<Text
			fontSize={{ base: '28px', lg: '32px' }}
			fontWeight={700}
			lineHeight='normal'
		>
			Reward Points
		</Text>
	);
	// Points section
	const PointSection = (
		<Flex flexDir='column' gap='20px'>
			<Flex flexDirection='column' gap='7px' justify='space-between'>
				<Text fontSize='16px' fontWeight='600' lineHeight='normal'>
					Current Balance
				</Text>
				<Text fontSize='42px' fontWeight='700' lineHeight='normal'>
					3.7
				</Text>
			</Flex>

			<Grid
				gap={{ base: '28px', lg: '42px' }}
				templateColumns={'1fr 1fr 1fr'}
				w={{ base: '100%', lg: '60%' }}
			>
				<DashboardPointCard heading='Total Earned' value='3.7' />
				<DashboardPointCard heading='Total Spent' value='0' />
				<DashboardPointCard heading='Expired' value='0' border='none' />
			</Grid>
		</Flex>
	);

	// Table section

	const headers = [
		{
			title: 'Date',
			icon: <TableIcon color={tableIconColor} Icon={PiNotepad} />,
		},
		{
			title: 'Change',
			icon: <TableIcon color={tableIconColor} Icon={FaDollarSign} />,
		},
		{
			title: 'Comment',
			icon: <TableIcon color={tableIconColor} Icon={MdOutlineNoteAlt} />,
		},
		{
			title: 'Action',
			icon: <TableIcon color={tableIconColor} Icon={AiOutlineSetting} />,
		},
		{
			title: 'Points Left',
			icon: <TableIcon color={tableIconColor} Icon={TiTick} />,
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

	const myRewardPoints  = [
		{
			date: '9/10/23',
			change: '+.20',
			comment: 'Points Gained From Waste',
			action: 'Points Gained From Waste',
			points: '3.70'
		},
		{
			date: '9/10/23',
			change: '+.20',
			comment: 'Points Gained From Waste',
			action: 'Points Gained From Waste',
			points: '3.70'
		},
		{
			date: '9/10/23',
			change: '+.20',
			comment: 'Points Gained From Waste',
			action: 'Points Gained From Waste',
			points: '3.70'
		},
		{
			date: '9/10/23',
			change: '+.20',
			comment: 'Points Gained From Waste',
			action: 'Points Gained From Waste',
			points: '3.70'
		}
	]

	const TableSection = (
		<Flex flexDir='column' pt='24px' gap='20px'>
			<Text fontSize='24px' fontWeight='700'>
				Reward Points history
			</Text>
			<Flex
				direction='column'
				minW={{ base: '295px', lg: 'full' }}
				overflowX='auto'
				border='1px'
				borderRadius='6px'
				borderColor='#DFE3E8'
			>
				<TestTable
					customTableHeaders={customTableHeaders}
				>
					{myRewardPoints.map((item, index) => (
						<TableRow key={index}>
							<TableData fontWeight='400'>{item.date}</TableData>
							<TableData fontWeight='400'>
								<Badge colorScheme='green'>{item.change}</Badge>
							</TableData>
							<TableData w='180px' fontWeight='400'>
								{item.comment}
							</TableData>
							<TableData w='180px' fontWeight='400'>
								{item.action}
							</TableData>
							<TableData fontWeight='400'>
								<Badge colorScheme='green'>{item.points}</Badge>
							</TableData>
						</TableRow>
					))}
				</TestTable>
			</Flex>
		</Flex>
	);

	return (
		<Flex
			overflowX='auto'
			flexDirection='column'
			bgColor={containerColor}
			p={{ base: '20px', lg: '32px' }}
			borderRadius='6px'
		>
			{HeadingSection}
			{PointSection}
			{TableSection}
		</Flex>
	);
};

export default RewardPointsSection;
