'use client';
import OrderDetails from '@/components/invoice/OrderDetails';
import OrderInformation from '@/components/invoice/OrderInformation';
import ShippingInformation from '@/components/invoice/ShippingInformation';
import SubTotal from '@/components/invoice/SubTotal';
import PageLayout from '@/components/layout/PageLayout';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { useGetSingleOrderQuery } from '@/store/services/orderApi';
import {
	Button,
	Flex,
	Grid,
	Heading,
	Icon,
	IconButton,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

type OrderPageProps = {
	params: {
		id: string;
	};
};

const OrderPage: NextPage<OrderPageProps> = ({ params }) => {
	const {
		data: orderData,
		isLoading: orderIsLoading,
		isSuccess: orderIsSuccess,
		isError: orderIsError,
	} = useGetSingleOrderQuery({ orderId: params.id }, { skip: !params?.id });

	const iconColor = useColorModeValue('#1e90ff', '#1e90ff');
	const darkPrimary = useColorModeValue('dark-primary.light', 'dark-primary.dark');

	const containerColor = useColorModeValue('container.light', 'container.dark');
	const HeaderSection = (
		<Flex alignItems='center' justify='space-between'>
			<Flex gap='16px' alignItems='center'>
				<Heading fontSize='38px' fontWeight='700'>
					Order # {orderData?.increment_id && orderData?.increment_id}
				</Heading>
				<IconButton
					variant='unstyled'
					aria-label='download'
					background='transparent'
					fontSize='32px'
					color={iconColor}
					icon={<Icon as={FiDownload} />}
				/>
			</Flex>
			<Button variant='link' fontSize='16px' fontWeight='600' color={iconColor}>
				Print Order
			</Button>
		</Flex>
	);

	const RealtimeTrackingSection = <Flex bg='yellow'>Tracking Part (TBA)</Flex>;

	const TrackYourOrderBody = (
		<Flex borderLeft='2px solid' borderColor={darkPrimary} pl='32px'>
			<Flex direction='column' gap='32px'>
				<Flex gap='41px' color={darkPrimary}>
					<Image src='/order/image 196.png' alt='item-image' h='32px' w='32px' />
					{/* Items and Delivery Section */}
					<Flex direction='column' gap='11px'>
						{/* Number items to be delivered */}
						<Text fontSize='16px' fontWeight='600' lineHeight='16px'>
							{orderData?.total_qty_ordered && orderData?.total_qty_ordered} Items + Delivery
						</Text>
						<Flex direction='column' gap='4px'>
							{/* Delivery Date */}
							<Text fontSize='14px' fontWeight='400' lineHeight='14px'>
								Deliver on September 24, at 8.03pm
							</Text>
							{/* Delivery Address */}
							<Text fontSize='14px' fontWeight='400' lineHeight='14px'>
								{orderData?.billing_address?.street && orderData?.billing_address?.street}
								{', '}
								{orderData?.billing_address?.city && orderData?.billing_address?.city}
							</Text>
						</Flex>
					</Flex>
					{/* Price */}
					<Text fontSize='18px' fontWeight='600'>
						৳{orderData?.total_due && orderData?.total_due}
					</Text>
				</Flex>

				{/* Tracking part (Has to added later) */}
				{RealtimeTrackingSection}
			</Flex>
		</Flex>
	);

	const TrackOrderSection = (
		<Flex alignItems='center' gap='400px'>
			<Flex direction='column' py='45px' gap='32px'>
				{/* Track Order Section */}
				<Text fontSize='24px' fontWeight='700'>
					Track Your Order
				</Text>
				{TrackYourOrderBody}
			</Flex>
			<Image src='/order/save plastic.png' alt='save-plastic' />
		</Flex>
	);
	return (
		<PageLayout>
			<Flex direction='column' px='44px' py='32px' w='full' gap='32px'>
				<CustomBreadcrumb />

				<Flex
					direction='column'
					bgColor={containerColor}
					py='44px'
					px='32px'
					gap='24px'
					w='full'
					borderRadius='16px'
					boxShadow='0px 5px 20px 0px rgba(68, 68, 68, 0.05)'
				>
					{HeaderSection}
					{TrackOrderSection}

					<Grid templateColumns='1fr 1fr' pt='8px' gap='100px'>
						<OrderInformation data={orderData} />
						<ShippingInformation data={orderData} />
					</Grid>
					<OrderDetails data={orderData} />
					<SubTotal data={orderData} pb='74px' />
				</Flex>
			</Flex>
		</PageLayout>
	);
};

export default OrderPage;
