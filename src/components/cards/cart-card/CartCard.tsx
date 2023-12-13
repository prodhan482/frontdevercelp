'use client';
import RemoveCartAlert from '@/app/alerts/RemoveCartAlert';
import CartCardButton from '@/components/util/custom-button/CartCardButton';
import useCart from '@/hooks/useCart';
import { deleteAllFromCart } from '@/store/slices/cartSlice';
import { Container, Flex, Image, Stack, Text, ContainerProps } from '@chakra-ui/react';
import { FC } from 'react';
import { PiTrashBold } from 'react-icons/pi';

type CartCardProps = ContainerProps & {
	id: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
};

const CartCard: FC<CartCardProps> = ({ id, name, image, price, quantity, ...props }) => {
	const { addToCart, deleteOneFromCart, deleteSingleItemFromCart } = useCart();

	const handleAddItem = () => {
		addToCart({
			id,
			name,
			price,
			image,
		});
	};

	const handleDeleteOneItem = () => {
		deleteOneFromCart(id);
	};

	const handleDeleteSingleItem = () => {
		deleteSingleItemFromCart(id);
	};

	return (
		<Container
			p='8px'
			width='full'
			borderBottom='1px'
			borderRadius='4px'
			borderBottomColor='#F3F3EF'
			{...props}
		>
			<Flex justify='space-between'>
				<Flex w='190px' gap='18px' alignItems='center' alignSelf='stretch'>
					<Image
						src={image ? image : 'guava-fruit-fresh'}
						width='61px'
						height='55.675px'
						userSelect='none'
					/>
					<Stack justifyContent='space-between' alignSelf='stretch'>
						<Text fontSize='14px' fontWeight='600'>
							{name && name}
						</Text>
						<CartCardButton
							handleAddItem={handleAddItem}
							handleDeleteOneItem={handleDeleteOneItem}
							quantity={quantity}
						/>
					</Stack>
				</Flex>
				<Stack justifyContent='space-between' alignItems='flex-end'>
					<Text userSelect='none' fontWeight='bold'>
						৳ {price ? price * quantity : 'N/A'}
					</Text>
					<RemoveCartAlert handleDeleteSingleItem={handleDeleteSingleItem} />
				</Stack>
			</Flex>
		</Container>
	);
};

export default CartCard;
