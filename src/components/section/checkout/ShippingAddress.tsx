import AddAddressModal from '@/components/dashboard/AddAddressModal';
import { useGetSelfQuery } from '@/store/services/mainApi';
import { useGetAddressesQuery } from '@/store/services/otherApi';
import { useGetSelfTestQuery } from '@/store/services/productApi';
import {
	Button,
	Flex,
	Heading,
	Image,
	Select,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

type ShippingAddressProps = {
	selectedAddress: any;
	setSelectedAddress: any;
	self: any;
	isSelfLoading: boolean;
	isSelfError: boolean;
};

const ShippingAddress: React.FC<ShippingAddressProps> = ({
	selectedAddress,
	setSelectedAddress,
	self,
	isSelfLoading,
	isSelfError,
}) => {
	const container = useColorModeValue('container.light', 'container.dark');
	const containerText = useColorModeValue('container.dark', 'container.dark');

	React.useEffect(() => {
		setSelectedAddress(self?.addresses[0].id);
	}, [self?.addresses]);
	React.useEffect(() => {
		//post selected address to backend
	}, [selectedAddress]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex direction='column' gap='4px'>
			<Flex gap='4px' alignItems='center'>
				<Heading fontSize='24px' fontWeight='700'>
					Shippinng Address
				</Heading>
				<Image src='/checkout/IoCheckmarkDoneSharp.png' alt='checkmark' />
			</Flex>
			<Flex
				pt={{ base: '16px', lg: '32px' }}
				pb={{ base: '16px', lg: '92px' }}
				px='16px'
				direction='column'
				gap={{ base: '8px', lg: '30px' }}
				bgColor={container}
				borderRadius='8px'
			>
				<Select
					fontSize='14px'
					fontWeight='700'
					color={containerText}
					// placeholder='HOME'
					bgColor='#F3F3EF'
					value={selectedAddress}
					onChange={(e) => setSelectedAddress(e.target.value)}
				>
					{self?.addresses?.map((address: any, index: number) => (
						<option key={index} value={address?.id}>
							{address?.firstname + ' ' + address?.lastname}
						</option>
					))}
				</Select>
				<Flex direction='column' gap={{ base: '8px', lg: '16px' }}>
					<Text fontSize='16px' fontWeight='700'>
						{/* Tony Stark */}
						{self?.addresses?.filter((address: any) => address.id === selectedAddress)[0]
							?.firstname +
							' ' +
							self?.addresses?.filter((address: any) => address.id === selectedAddress)[0]
								?.lastname}
					</Text>
					<Text fontSize='16px' fontWeight='400'>
						{self?.addresses
							?.filter((address: any) => address.id === selectedAddress)[0]
							?.street?.join(', ')}
					</Text>
					<Text fontSize='16px' fontWeight='700'>
						{
							self?.addresses?.filter((address: any) => address.id === selectedAddress)[0]
								?.telephone
						}
					</Text>
				</Flex>
				<Flex>
					<Button color={containerText} bgColor='#E4F9D8' size='sm' onClick={onOpen}>
						Add a New Address
					</Button>
					<AddAddressModal isOpen={isOpen} onClose={onClose} />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ShippingAddress;
