import CartCard from "@/components/cards/cart-card/CartCard";
import usePostLoginCart from "@/hooks/usePostLoginCart";
import { useGetLoginCartQuery } from "@/store/services/cartApi";
import { useAppSelector } from "@/store/slices/hooks";
import {
	Button,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { FC } from "react";

type OrderItemSectionProps = {
	onOpen?: () => void;
	onClose?: () => void;
};

const OrderItemSection: FC<OrderItemSectionProps> = () => {
	const container = useColorModeValue("container.light", "container.dark");
	const { postCartWithQuote, createQuote } = usePostLoginCart();

	const cart = useAppSelector((state) => state.cart);
	const primaryLight = useColorModeValue(
		"primaryLight.light",
		"primaryLight.dark"
	);
	const primaryDark = useColorModeValue(
		"primaryDark.light",
		"primaryDark.dark"
	);

	const {
		data: cartData,
		isLoading: cartLoading,
		isError: cartError,
	} = useGetLoginCartQuery(null);

	React.useEffect(() => {
		if (cart.quoteId === null) {
			createQuote();
		} else {
			postCartWithQuote();
		}
	}, [cart]);

	// React.useEffect(() => {

	// }, []);

	const cartHeader = (
		<Flex flex={1} flexDir='column' p='16px' gap='8px'>
			<Text fontSize='24px' fontWeight='700'>
				Order Items
			</Text>
			<Flex fontSize='12px' fontWeight='600'>
				Add
				<Text fontWeight='bold' color={primaryLight}>
					17tk
				</Text>
				to checkout,
				<Text fontWeight='bold' color={primaryLight}>
					30tk
				</Text>
				for free shopping
			</Flex>
			<Flex h='6px' borderRadius='8px' bg='#D9D9D9'>
				<Flex w='full' h='6px' borderRadius='8px' bg={primaryLight} />
			</Flex>
		</Flex>
	);

	const cartItems = (
		<Flex
			flex={8}
			flexDirection='column'
			overflowY='scroll'
			px='16px'
			gap='8px'
			w='full'
		>
			<Text fontSize='16px' fontWeight='700'>
				Your Items
			</Text>
			<Stack>
				{cart?.cartItems?.map((item: any, index: number) => (
					<CartCard
						id={item?.id}
						name={item?.name}
						image={item?.image}
						price={item?.price}
						quantity={item?.quantity}
						key={index}
					/>
				))}
			</Stack>
		</Flex>
	);

	const cartFooter = (
		<Stack
			flex={1}
			p='16px'
			pb={6}
			bgColor={container}
			boxShadow='0px -2px 20px 0px rgba(0, 0, 0, 0.10)'
			gap='12px'
			minH='fit-content'
			position={{ base: "fixed", lg: "static" }}
			bottom={{ base: "0", lg: "auto" }}
			w={{ base: "100vw", lg: "auto" }}
		>
			<InputGroup size='sm' pr='0px'>
				<Input
					pr='4.5rem'
					type='text'
					placeholder='Apply Discount'
					borderRadius='30px'
				/>
				<InputRightElement width='4.5rem'>
					<Button
						h='2rem'
						size='md'
						borderRightRadius='30px'
						borderLeftRadius='0px'
						bg={primaryDark}
						color={container}
						_hover={{ bg: { primaryLight }, color: "white" }}
						fontSize='14px'
						fontWeight='600'
						px='18px'
						py='7px'
					>
						Apply
					</Button>
				</InputRightElement>
			</InputGroup>

			<Flex justify='space-between'>
				<Text fontSize='16px' fontWeight='600'>
					Total
				</Text>
				<Text fontSize='16px' fontWeight='600'>
					Tk. 641
				</Text>
			</Flex>
			<Button
				fontSize='14px'
				fontWeight='700'
				alignItems='center'
				px='60px'
				py='5px'
				lineHeight='24px'
				borderRadius='30px'
				bg={primaryLight}
				justifyContent='center'
				border='2px solid'
				borderColor='bth-stroke'
				cursor='pointer'
				_hover={{ bg: primaryDark, color: "white" }}
				color={container}
				onClick={() => {
					// postCartWithQuote();
				}}
			>
				Confirm and place order
			</Button>
		</Stack>
	);

	return (
		<Flex
			maxH='calc(100vh - 92px)'
			flexDir='column'
			bgColor={container}
			position={{ base: "static", lg: "fixed" }}
			top={{ base: "auto", lg: "92px" }}
			bottom={{ base: "auto", lg: "0" }}
			right={{ base: "auto", lg: "0" }}
			
		>
			{cartHeader}
			{cartItems}
			{cartFooter}
			<Flex
				w='full'
				h='160px'
				display={{ base: "block", lg: "none" }}
			></Flex>
		</Flex>
	);
};

export default OrderItemSection;
