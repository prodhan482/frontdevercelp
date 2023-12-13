import {
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomButton from '@/components/util/custom-button/CustomButton';
import { PiNotepad } from 'react-icons/pi';
import TestTable from '@/components/util/custom-table/TestTable';
import TableIcon from '@/components/dashboard/TableIcon';
import { AiFillSetting } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import TableHeader from '@/components/dashboard/TableHeader';
import TableRow from '@/components/dashboard/TableRow';
import TableData from '@/components/dashboard/TableData';
import { FiChevronDown, FiClipboard, FiDollarSign } from 'react-icons/fi';
import AddAddressModal from '@/components/dashboard/AddAddressModal';
import { useGetSelfTestQuery } from '@/store/services/productApi';
const AddressBookSection = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data, isLoading, isError, isSuccess } = useGetSelfTestQuery({});

	const containerColor = useColorModeValue('container.light', 'container.dark');
	const darkPrimary = useColorModeValue('dark-primary.light', 'dark-primary.dark');
	const containerShadow = useColorModeValue('rgba(68, 68, 68, 0.05)', 'rgba(68, 68, 68, 0.05)');

	const [action, setAction] = useState(0);

	const headers = [
		{
			title: 'Company',
			icon: <TableIcon Icon={PiNotepad} />,
		},
		{
			title: 'Name',
			icon: <TableIcon Icon={FiDollarSign} />,
		},
		{
			title: 'Street',
			icon: <TableIcon Icon={FiClipboard} />,
		},
		{
			title: 'Region',
			icon: <TableIcon Icon={TiTick} />,
		},
		{
			title: 'City',
			icon: <TableIcon Icon={TiTick} />,
		},
		{
			title: 'Action',
			icon: <TableIcon Icon={AiFillSetting} />,
		},
	];

	const customTableHeaders = (
		<>
			{headers.map((item, index) => (
				<TableHeader header={item.title} icon={item.icon} key={index}></TableHeader>
			))}
		</>
	);
	// Heading
	const HeadingSection = (
		<Flex justify='space-between'>
			<Text fontSize={{ base: '28px', lg: '32px' }} fontWeight={700} lineHeight='normal'>
				Address Book
			</Text>
			<CustomButton label='Add Address' variant='Add-Address' onClick={onOpen} />
			<AddAddressModal isOpen={isOpen} onClose={onClose} />
		</Flex>
	);

	const TableSection = (
		<TestTable customTableHeaders={customTableHeaders}>
			{data?.addresses &&
				data?.addresses?.map((item: any, index: number) => (
					<TableRow key={index}>
						<TableData fontWeight='700' fontSize='14px'>
							{item?.company && item?.company}
						</TableData>
						<TableData fontWeight='400'>
							<Flex direction='column' fontSize='14px' lineHeight='120%'>
								<Text>
									{item?.firstname && item?.firstname} {item?.lastname && item?.lastname}
								</Text>
								<Text>{item?.telephone && item?.telephone}</Text>
							</Flex>
						</TableData>
						<TableData fontWeight='400' fontSize='14px' lineHeight='120%'>
							{item?.street && item?.street}
						</TableData>
						<TableData fontWeight='400' fontSize='14px'>
							{item?.region?.region && item?.region?.region} -{' '}
							{item?.region?.region_id && item?.region?.region_id}
						</TableData>
						<TableData fontWeight='400' fontSize='14px' lineHeight='120%'>
							{item?.city && item?.city}
						</TableData>
						<TableData fontWeight='400'>
							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<FiChevronDown size='14px' />}
									bg={containerColor}
									variant='outline'
									borderColor={darkPrimary}
									fontSize='12px'
									size='sm'
								>
									Options
								</MenuButton>
								<MenuList bgColor={containerColor}>
									<MenuItem bgColor={containerColor} onClick={() => setAction(index)}>
										Make Default
									</MenuItem>
									<MenuItem bgColor={containerColor}>Edit</MenuItem>
									<MenuItem bgColor={containerColor}>Delete</MenuItem>
								</MenuList>
							</Menu>
						</TableData>
					</TableRow>
				))}
		</TestTable>
	);
	return (
		<Flex
			flexDirection='column'
			bgColor={containerColor}
			p={{ base: '20px', lg: '32px' }}
			borderRadius='16px'
			gap='20px'
			boxShadow={`0px 5px 20px 0px ${containerShadow}`}
			overflowX='auto'
		>
			{HeadingSection}
			<Text fontSize='20px' fontWeight='700'>
				Saved Addresses
			</Text>
			<Flex
				direction='column'
				gap='16px'
				minW={{ base: '295px', lg: 'full' }}
				overflowX='auto'
				border='1px'
				borderRadius='6px'
				borderColor='#DFE3E8'
			>
				{TableSection}
			</Flex>
		</Flex>
	);
};

export default AddressBookSection;
