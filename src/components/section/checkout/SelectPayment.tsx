import ApplyRewardPoints from '@/app/alerts/ApplyRewardPoints';
import {
	Button,
	Flex,
	Heading,
	Radio,
	RadioGroup,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const SelectPayment = () => {
	const [value, setValue] = React.useState('1');
const { isOpen, onOpen, onClose } = useDisclosure();
	const container = useColorModeValue('container.light', 'container.dark');
	const containerText = useColorModeValue('container.dark', 'container.dark');
	return (
		<Flex direction='column' gap='4px'>
			<Heading fontSize='24px' fontWeight='700'>
				Select Payment
			</Heading>
			<Flex
				py={{ base: '16px', lg: '32px' }}
				px={{ base: '16px', lg: '22px' }}
				direction='column'
				gap={{ base: '16px', lg: '24px' }}
				bgColor={container}
				borderRadius='8px'
				flex={1}
			>
				<RadioGroup onChange={setValue} value={value}>
					<Flex
						direction='column'
						gap={{ base: '16px', lg: '24px' }}
						fontSize='14px'
						fontWeight='700'
					>
						<Radio value='1' colorScheme='green'>
							bKash
						</Radio>
						<Radio value='2' colorScheme='green'>
							Nagad
						</Radio>
						<Radio value='3' colorScheme='green'>
							Visa/Master Card
						</Radio>
					</Flex>
				</RadioGroup>

				<Flex>
					<Button
						color={containerText}
						bgColor='#E4F9D8'
						size='sm'
						onClick={onOpen}
					>
						Apply Reward Points
					</Button>
					<ApplyRewardPoints isOpen={isOpen} onClose={onClose} />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SelectPayment;
