import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const InvoiceHeader = () => {
  return (
		<Flex
			justifyContent='space-between'
			w='full'
			borderBottom='6px solid black'
		>
			<Image
				objectFit='contain'
				src='/invoice/invoiceLogo.png'
				alt='invoiceLogo'
			/>

			<Flex direction='column' textAlign='end' pb='16px'>
				<Text fontSize='22px' fontWeight='700'>
					Bazar365.com
				</Text>
				<Text color='#858693' w='180px' fontSize='14px' fontWeight='400'>
					House 91/C Rd 24, Gulshan 1 Dhaka 1212, Bangladesh
				</Text>
				<Text color='#858693' fontSize='14px' fontWeight='400'>
					Email: care@bazar365.biz
				</Text>
				<Text color='#858693' fontSize='14px' fontWeight='400'>
					Hotline 24/7
				</Text>
				<Text fontSize='16px' fontWeight='700'>
					(+880) 9643 365 365
				</Text>
			</Flex>
		</Flex>
	);
};

export default InvoiceHeader;
