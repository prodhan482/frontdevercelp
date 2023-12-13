import PlusButton from '@/components/util/custom-button/PlusButton';
import useCart from '@/hooks/useCart';
import { Box, Flex, Image, Stack, Text, StackProps, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type QuickAddCardProps = StackProps & {
	sku: string;
	image: string;
	name: string;
	weight: string;
	price: number;
	handleRemoveItem: (e: any) => void;
};

const QuickAddCard: FC<QuickAddCardProps> = ({
	sku,
	image,
	name,
	weight,
	price,
	handleRemoveItem,
	...props
}) => {
	const textColor = useColorModeValue('text.dark', 'text.light');

	const { addToCart } = useCart();

	const handleAddItem = (e: any) => {
		e.stopPropagation();
		addToCart({
			id: sku,
			name,
			price: Number(price),
			image,
		});
		handleRemoveItem(sku);
	};

	return (
		<Stack {...props}>
			<Flex
				w={{ base: '230px', md: 'full' }}
				gap={{ base: '6px', lg: '16px' }}
				h='full'
				alignItems='center'
				py='4px'
			>
				<Box
					pl={{ base: '6px', lg: '8px' }}
					pr={{ base: '4px', lg: '14px' }}
					my='auto'
				>
					<Image
						w='61px'
						h='55px'
						src={image ? image : '/product-image/product-cart.png'}
						alt='img'
					/>
				</Box>

				<Flex direction='column' w={{ base: '150px', lg: 'full' }} flex={1}>
					<Text
						color={textColor}
						fontSize={{ base: '12px', lg: '14px' }}
						fontWeight={400}
					>
						{name && name}
					</Text>
					{/* <Text color='#888' fontSize='10px' fontWeight={600} py='3px'>
						{weight ? weight : 'Not available'}
					</Text> */}
					<Flex justifyContent='space-between' alignItems='center'>
						<Text
							flex={1}
							color={textColor}
							fontSize={{ base: '12px', lg: '16px' }}
							fontWeight={600}
						>
							৳{price ? price : '500'}
						</Text>

						<PlusButton
							aria-label='add'
							onClick={handleAddItem}
						/>
					</Flex>
				</Flex>

				<Box
					display={{ base: 'block', md: 'none' }}
					borderRight='2px'
					borderRightColor='#858693'
				></Box>
			</Flex>
			<Box
				display={{ base: 'none', md: 'block' }}
				pt='12px'
				borderBottom='2px'
				borderBottomColor='#858693'
			></Box>
		</Stack>
	);
};

export default QuickAddCard;
