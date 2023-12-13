import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const InvoiceBarcode = () => {
  return (
		<Flex justifyContent='space-between' pt='69px'>
			<Text fontSize='52px' fontWeight='900'>
				Invoice
			</Text>
			<Image src='/invoice/invoiceBarCode.png' alt='barcode' />
		</Flex>
	);
};

export default InvoiceBarcode;
