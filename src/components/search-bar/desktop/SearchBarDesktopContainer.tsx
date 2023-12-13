import {
	Button,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import SearchBarDesktop from "../desktop/SearchBarDesktop";
import { useAppDispatch, useAppSelector } from "@/store/slices/hooks";
import Link from "next/link";
import Logo from "../../util/logo/Logo";
import ProductCard from "../../cards/product-card/ProductCard";
import { useGetProductsByCategoryQuery } from "@/store/services/productApi";
import { hideSearch } from "@/store/slices/searchSlice";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
type SearchBarDesktopContainerType = {
	search: string;
	setSearch: any;
};
const SearchBarDesktopContainer: React.FC<SearchBarDesktopContainerType> = ({
	search,
	setSearch,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navColor = useColorModeValue("container.light", "container.dark");
	const bg = useColorModeValue("bg.light", "bg.dark");
	const sideIsOpen = useAppSelector((state) => state.sidebar.isOpen);
	const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery(
		{}
	);
	const isSearchOpen = useAppSelector(
		(state: any) => state.search.isSearchOpen
	);
	const dispatch = useAppDispatch();
	const closeSearch = () => {
		dispatch(hideSearch());
	};
	const searchRef: any = useRef(null);

	useEffect(() => {
		searchRef?.current?.click();
	}, []);

	const navbar = (
		<Flex
			as={motion.div}
			key='navbar'
			w={{ base: "full", lg: sideIsOpen ? "calc(100vw - 260px)" : "full" }}
			py='14px'
			px={{ base: "16px", lg: sideIsOpen ? "24px" : "92px" }}
			bgColor={navColor}
			justify='space-between'
			align='center'
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.1,
				},
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.1,
				},
			}}
		>
			<Link href='/'>
				<Logo />
			</Link>
			<Flex justify='center' align='center' w='700px' h='full'>
				<SearchBarDesktop
					as={motion.input}
					search={search}
					setSearch={setSearch}
					ref={searchRef}
				/>
			</Flex>
			<Button variant='ghost' onClick={() => closeSearch()}>
				Cancel
			</Button>
		</Flex>
	);

	const condition1 = (
		<Stack
			as={motion.div}
			key='condition-2'
			initial={{
				opacity: 0,
				x: -100,
			}}
			animate={{
				opacity: 1,
				x: 0,
				transition: {
					delay: 0.5,
					duration: 0.3,
				},
			}}
			exit={{
				opacity: 0,
				x: -100,
				transition: {
					duration: 0.3,
				},
			}}
		>
			<Heading fontSize='16px' color='logo.light'>
				Popular Search Terms
			</Heading>
			<Text fontSize='20px'>Rice</Text>
			<Text fontSize='20px'>Egg</Text>
			<Text fontSize='20px'>ACI Aerosol</Text>
			<Text fontSize='20px'>Eco Friendly Bag</Text>
		</Stack>
	);

	const condition2 = (
		<Flex gap='64px' flexDir={{ base: "column", lg: "row" }}>
			{condition1}
			<Grid
				templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }}
				gap='12px'
				as={motion.div}
				key='condition-2'
				initial={{
					opacity: 0,
					x: 100,
				}}
				animate={{
					opacity: 1,
					x: 0,
					transition: {
						delay: 0.5,
						duration: 0.3,
					},
				}}
				exit={{
					opacity: 0,
					x: 100,
					transition: {
						duration: 0.3,
					},
				}}
			>
				<ProductCard
					sku={data?.items[0]?.sku}
					name={data?.items[0]?.name}
					price={data?.items[0]?.price}
					size={data?.items[0]?.size}
					image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${data?.items[0]?.media_gallery_entries[0]?.file}`}
					ifPlasticFree={data?.items[0]?.ifPlasticFree}
					h='inherit'
					isButtonOff
				/>
				<ProductCard
					sku={data?.items[0]?.sku}
					name={data?.items[0]?.name}
					price={data?.items[0]?.price}
					size={data?.items[0]?.size}
					image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${data?.items[0]?.media_gallery_entries[0]?.file}`}
					ifPlasticFree={data?.items[0]?.ifPlasticFree}
					h='inherit'
					isButtonOff
				/>
				<ProductCard
					sku={data?.items[0]?.sku}
					name={data?.items[0]?.name}
					price={data?.items[0]?.price}
					size={data?.items[0]?.size}
					image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${data?.items[0]?.media_gallery_entries[0]?.file}`}
					ifPlasticFree={data?.items[0]?.ifPlasticFree}
					h='inherit'
					isButtonOff
				/>
				<ProductCard
					sku={data?.items[0]?.sku}
					name={data?.items[0]?.name}
					price={data?.items[0]?.price}
					size={data?.items[0]?.size}
					image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${data?.items[0]?.media_gallery_entries[0]?.file}`}
					ifPlasticFree={data?.items[0]?.ifPlasticFree}
					h='inherit'
					isButtonOff
				/>
			</Grid>
		</Flex>
	);

	const body = (
		<Flex
			py='48px'
			px={{ base: "16px", lg: sideIsOpen ? "24px" : "92px" }}
			align='center'
			justify='center'
			overflow='hidden'
			as={motion.div}
			key='floating-search-body'
			initial={{
				// height: "0px",
				opacity: 0,
			}}
			animate={{
				// height: "fit-content",
				opacity: 1,
				transition: {
					easing: easeIn,
					duration: 0.7,
				},
			}}
			exit={{
				// height: "0px",
				opacity: 0,
				transition: {
					easing: easeOut,
					duration: 0.5,
				},
			}}
		>
			{/* {condition1} */}
			{condition2}
		</Flex>
	);

	return (
		<AnimatePresence>
			{isSearchOpen && (
				<Flex
					position='fixed'
					// top='56px'
					right='0'
					left='0'
					minW='100vw'
					justify='flex-end'
					as={motion.div}
					key='floating-search'
					initial={{
						top: "55px",
					}}
					animate={{
						top: "55px",
						transition: {
							easing: easeIn,
							duration: 0.7,
						},
					}}
					exit={{
						top: "91px",
						transition: {
							easing: easeOut,
							duration: 0.3,
						},
					}}
				>
					<Flex
						w='full'
						// as={motion.div}
						// key='floating-search'
						// initial={{
						// 	y: "36px",

						// }}
						// animate={{
						// 	y: "0",
						// 	transition: {
						// 		easing: easeIn,
						// 		duration: 0.2,
						// 	},
						// }}
						// exit={{
						// 	y: "36",
						// 	transition: {
						// 		easing: easeOut,
						// 		duration: 0.2,
						// 	},
						// }}
					>
						<Flex w='full'>
							{/* <DrawerOverlay /> */}
							<Flex overflowY='auto' w='full'>
								<Stack w='full' bgColor={bg}>
									{/* {navbar} */}
									{body}
								</Stack>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
		</AnimatePresence>
	);
};
export default SearchBarDesktopContainer;
