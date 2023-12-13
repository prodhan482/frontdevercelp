/* eslint-disable react-hooks/exhaustive-deps */
import QuickAddCard from '@/components/cards/quick-add-card/QuickAddCard';
import { useGetProductsByCategoryQuery } from '@/store/services/productApi';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const QuickAdsMobile = () => {
	const textColor = useColorModeValue('text.dark', 'text.light');
	const [dataItems, setDataItems] = React.useState<any>([]);
	const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery(
		{}
	);

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
		<Flex
			direction='column'
			h='auto'
			display={{ base: 'block', md: 'none' }}
			bgColor='dark-primary.light'
			pt='4px'
		>
			<Text px='16px' color={textColor} fontSize='18px' fontWeight='700'>
				Quick Ads
			</Text>
			<Flex
				overflowX='auto'
				px='8px'
				pb='4px'
				gap='8px'
			>
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
			</Flex>
		</Flex>
	);
};

export default QuickAdsMobile;
