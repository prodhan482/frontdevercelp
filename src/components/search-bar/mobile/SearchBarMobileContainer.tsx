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
} from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../desktop/SearchBarDesktop';
import { useAppSelector } from '@/store/slices/hooks';
import Link from 'next/link';
import Logo from '../../util/logo/Logo';
import ProductCard from '../../cards/product-card/ProductCard';
import { useGetProductsByCategoryQuery } from '@/store/services/productApi';
import SearchBarDesktop from '../desktop/SearchBarDesktop';
import SearchBarMobile from './SearchBarMobile';

const SearchBarMobileContainer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navColor = useColorModeValue('container.light', 'container.dark');
	const bg = useColorModeValue('bg.light', 'bg.dark');
	const sideIsOpen = useAppSelector(state => state.sidebar.isOpen);
	const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery({});

	const navbar = (
		<Flex
			w={{ base: 'full', lg: sideIsOpen ? 'calc(100vw - 260px)' : 'full' }}
			py='14px'
			px={{ base: '16px', lg: sideIsOpen ? '24px' : '92px' }}
			bgColor={navColor}
			justify='space-between'
			align='center'
		>
			<Link href='/'>
				<Logo />
			</Link>
			<Flex justify='center' align='center' w='120px' h='full'>
				<SearchBarDesktop />
			</Flex>
			<Button variant='ghost' onClick={onClose}>
				Cancel
			</Button>
		</Flex>
	);

	const condition1 = (
		<Stack>
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
		<Flex gap='64px' flexDir={{ base: 'column', lg: 'row' }}>
			{condition1}
			<Grid templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }} gap='12px'>
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
			px={{ base: '16px', lg: sideIsOpen ? '24px' : '92px' }}
			align='center'
			justify='center'
		>
			{/* {condition1} */}
			{condition2}
		</Flex>
	);

	return (
		<>
			<Flex w={{ base: 'auto', lg: '400px' }} onClick={onOpen}>
				<SearchBarMobile />
			</Flex>
			<Drawer isOpen={isOpen} placement='top' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent overflowY='auto' >
					<Stack w='full' bgColor={bg}>
						{navbar}
						{body}
					</Stack>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SearchBarMobileContainer;
