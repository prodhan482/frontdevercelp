import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const InvoiceFooter = () => {
  return (
		<Flex pt='200px'>
			<Flex
				direction='column'
				gap='14px'
				justifyContent='space-between'
				w='full'
			>
				<Text fontSize='22px' fontWeight='700'>
					Terms & Conditions
				</Text>
				<Text color='#858693' fontSize='13px' fontWeight='400' w='635px'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum
				</Text>
			</Flex>
			<Image objectFit='contain' src='/invoice/barcode.png' alt='barcode' />
		</Flex>
	);
};

export default InvoiceFooter;
