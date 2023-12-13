import QuickAddCard from '@/components/cards/quick-add-card/QuickAddCard';
import { Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { Dispatch, FC, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AnimatePresence } from 'framer-motion';
import { useGetProductsByCategoryQuery } from '@/store/services/productApi';
import QuickAdsText from './QuickAdsText';
import { useAppSelector } from '@/store/slices/hooks';

const items = [
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/oranges.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/potatos.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/spinach.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/carrots.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/guava-fruit-fresh.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/oranges.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/potatos.png',
	},
];

type QuickAdsProps = {
	isAdsOpen: boolean;
	setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const QuickAds: FC<QuickAdsProps> = ({ isAdsOpen, setIsOpen }) => {
	const textColor = useColorModeValue('text.dark', 'text.light');
	const [dataItems, setDataItems] = React.useState<any>([]);
	const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery({});

	useEffect(() => {
		if (isSuccess) {
			setDataItems(data?.items);
		}
	}, [data]);

	const handleRemoveItem = (item: any) => {
		const result = dataItems.filter((element: any) => element != item);
		setDataItems(result);
	};

	return (
		<Flex>
			{!isAdsOpen && <QuickAdsText isAdsOpen={isAdsOpen} setIsOpen={setIsOpen} />}
			{/* <AnimatePresence> */}
			{isAdsOpen && (
				<Stack
					as={motion.div}
					key={`${isAdsOpen}`}
					initial={{ x: 350 }}
					animate={{ x: 0, transition: { duration: 0.3 } }}
					// exit={{
					// 	x: 350,
					// 	transition: { duration: 0.3 },
					// }}
					w='330px'
					bgColor='dark-primary.light'
					h='100vh'
					display={{ base: 'none', md: 'flex' }}
				>
					<Flex justifyContent='space-between' p='16px'>
						<Text color={textColor} fontSize='24px' fontWeight={700}>
							Quick Ads
						</Text>
						<Button
							as={motion.div}
							whileHover={{ rotate: 90, transition: { duration: 0 } }}
							variant='link'
							cursor='pointer'
						>
							<RxCross2 color='#fff' size={28} onClick={() => setIsOpen(false)} />
						</Button>
					</Flex>
					<Stack px='16px' w='100%' overflowY='auto'>
						{data?.items &&
							dataItems?.map((item: any, index: number) => (
								<QuickAddCard
									key={index}
									name={item?.name}
									sku={item.sku}
									image={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}/${item?.media_gallery_entries[0]?.file}`}
									price={item?.price}
									weight={item?.size}
									handleRemoveItem={() => handleRemoveItem(item)}
								/>
							))}
					</Stack>
				</Stack>
			)}
			{/* </AnimatePresence> */}
		</Flex>
	);
};

export default QuickAds;
