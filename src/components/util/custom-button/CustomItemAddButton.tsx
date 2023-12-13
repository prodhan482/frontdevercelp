import {
	Button,
	ButtonProps,
	Flex,
	FlexProps,
	IconButton,
	IconButtonProps,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import React, { FC, useEffect, useRef, useState } from "react";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import useCart from "@/hooks/useCart";
import useProductInCart from "@/hooks/useProductInCart";

type CustomItemAddButtonProps = FlexProps & {
	id: string;
	name: string;
	price: number;
	image: string;
	label?: number;
};

export const CustomItemAddButton: FC<CustomItemAddButtonProps> = ({
	id,
	name,
	price,
	image,
	label,
	...props
}) => {
	const buttonColor = useColorModeValue("#FFFFFF", "#000000"); //container.light and container.dark
	const bthStroke = useColorModeValue("#11823B", "#11823B"); //bth-stroke.light and bth-stroke.dark
	const [quantity, setQuantity] = useState(0);
	const [show, setShow] = useState(false);
	const buttonRef = useRef(null);
	const { addToCart, deleteOneFromCart, deleteSingleItemFromCart } = useCart();
	const { qty } = useProductInCart(id);
	// useEffect(() => {
	// 	console.log(qty);
	// }, [qty]);

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

	const onMouseOverEvent = (e: any) => {
		e.preventDefault();
		const timeOut = setTimeout(() => setShow(false), 5000);
		return () => clearTimeout(timeOut);
	};
	return (
		<Flex position='relative'>
			<AnimatePresence>
				{qty > 0 && show ? (
					<Flex
						as={motion.div}
						key='expending-cart-button'
						w='100%'
						p='12px 16px'
						height='38px'
						justifyContent='space-between'
						alignItems='center'
						bgColor='primaryLight.light'
						border='2px solid'
						borderColor={bthStroke}
						_hover={{ bgColor: "primaryLight.light" }}
						borderRadius='30px'
						fontWeight='700'
						fontSize='18px'
						lineHeight='normal'
						onMouseLeave={onMouseOverEvent}
						position='absolute'
						top='0'
						left='0'
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
							transition: {
								delay: 0,
								duration: 0.4,
							},
						}}
						exit={{
							opacity: 0,
							transition: {
								duration: 0.4,
							},
						}}
						{...props}
					>
						<IconButton
							bgColor='primaryLight.light'
							_hover={{ bgColor: "primaryLight.light" }}
							color='white'
							borderRadius='30px'
							icon={
								qty === 1 ? (
									<MdDelete color={buttonColor} />
								) : (
									<FaMinus color={buttonColor} />
								)
							}
							onClick={(e: any) => {
								e.stopPropagation();
								handleDeleteOneItem();
								// handleDeleteSingleItem();
								setQuantity(qty - 1);
							}}
							size='16px'
							rounded='full'
							aria-label='Add to cart'
							p='2px'
						/>
						<Text color='#FFF' _dark={{ color: "#000" }}>
							{qty}
						</Text>
						<IconButton
							bgColor='primaryLight.light'
							_hover={{ bgColor: "primaryLight.light" }}
							color='white'
							borderRadius='30px'
							icon={<FaPlus color={buttonColor} />}
							onClick={(e: any) => {
								e.stopPropagation();
								handleAddItem();
								setQuantity(qty + 1);
							}}
							size='16px'
							rounded='full'
							aria-label='Add to cart'
							p='2px'
						/>
					</Flex>
				) : (
					<Flex
						as={motion.div}
						p='12px 14px'
						height='38px'
						width='38px'
						justifyContent='center'
						alignItems='center'
						bgColor='primaryLight.light'
						border='2px solid'
						borderColor={bthStroke}
						color={buttonColor}
						aria-label='Add to cart'
						_hover={{ bgColor: "primaryLight.light" }}
						borderRadius='30px'
						fontWeight='700'
						fontSize='18px'
						gap='40px'
						lineHeight='normal'
						onClick={(e: any) => {
							e.stopPropagation();
							qty === 0 && setQuantity(qty + 1);
							setShow(true);
						}}
						position='absolute'
						top='0'
						left='0'
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
							transition: {
								delay: 0.1,
								duration: 0,
							},
						}}
						exit={{
							opacity: 0,
							transition: {
								duration: 0,
							},
						}}
						{...props}
					>
						{qty === 0 ? (
							<IconButton
								bgColor='primaryLight.light'
								_hover={{ bgColor: "primaryLight.light" }}
								color='white'
								borderRadius='30px'
								icon={<FaPlus color={buttonColor} />}
								onClick={() => handleAddItem()}
								size='16px'
								rounded='full'
								aria-label='Add to cart'
								p='2px'
							/>
						) : (
							qty
						)}
					</Flex>
				)}
			</AnimatePresence>
		</Flex>
	);
};

export default CustomItemAddButton;
