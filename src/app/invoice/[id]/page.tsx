'use client';
import InvoiceBarcode from '@/components/invoice/InvoiceBarcode';
import InvoiceFooter from '@/components/invoice/InvoiceFooter';
import InvoiceHeader from '@/components/invoice/InvoiceHeader';
import OrderDetails from '@/components/invoice/OrderDetails';
import OrderInformation from '@/components/invoice/OrderInformation';
import ShippingInformation from '@/components/invoice/ShippingInformation';
import SubTotal from '@/components/invoice/SubTotal';
import { useGetSingleOrderQuery } from '@/store/services/orderApi';
import { Flex, Grid } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

type InvoicePage = {
	params: {
		id: string;
	};
};

const InvoicePage: NextPage<InvoicePage> = ({ params }) => {
	const {
		data: orderData,
		isLoading: orderIsLoading,
		isSuccess: orderIsSuccess,
		isError: orderIsError,
	} = useGetSingleOrderQuery({ orderId: params.id }, { skip: !params?.id });

	return (
		<Flex justifyContent='center' alignItems='center' py='30px'>
			<Flex maxW='1181px' display='flex' w='full' direction='column'>
				<InvoiceHeader />
				<InvoiceBarcode />
				<Grid templateColumns='1fr 1fr' pt='8px' gap='100px'>
					<OrderInformation data={orderData} />
					<ShippingInformation data={orderData} />
				</Grid>
				<OrderDetails data={orderData} />
				<SubTotal data={orderData} />
				<InvoiceFooter />
			</Flex>
		</Flex>
	);
};

export default InvoicePage;
