import React, { FC } from 'react';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Flex,
	Stack,
	Image,
	Text,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store/slices/hooks';
import { changeIndex, changeItem } from '@/store/slices/accordionSlice';
import Link from 'next/link';
import { useGetAllCategoriesQuery } from '@/store/services/productApi';
import { categoryXImage } from '@/lib/categoryMap';
import AccordionSkeleton from '@/components/skeletons/accordion-skeleton/AccordionSkeleton';
import { useRouter } from 'next/navigation';

type CategoryAccordionProps = {};

const CategoryAccordion: FC<CategoryAccordionProps> = () => {
	const router = useRouter();
	const { index } = useAppSelector((state) => state.accordion);
	const dispatch = useAppDispatch();
	const { data: categories, isLoading, isError } = useGetAllCategoriesQuery(null);

	return (
		<Stack>
			{isLoading && <AccordionSkeleton />}

			<Accordion allowToggle defaultIndex={[index]}>
				{categories?.children_data?.map((item: any, index: number) => {
					return (
						<EachSideBarItem
							onClick={() => {
								if (item?.children_data?.length === 0) {
									return router.push(
										`/category/${item?.id}?categoryName=${encodeURIComponent(item?.name)}`
									);
								}
								dispatch(changeIndex(item.id));
							}}
							data={item}
							key={index}
						/>
					);
				})}
			</Accordion>
		</Stack>
	);
};

export default CategoryAccordion;

type EachSideBarItemProps = {
	data: any;
	onClick?: () => void;
};
const EachSideBarItem: FC<EachSideBarItemProps> = ({ data, ...props }) => {
	const dispatch = useAppDispatch();

	return (
		<AccordionItem border='none' {...props}>
			<AccordionButton px={0} justifyContent='space-between' cursor='pointer'>
				<Flex align='center' gap={3}>
					<Image
						src={
							categoryXImage?.filter((item) => item.id === data?.id)?.length === 0
								? '/category/1.svg'
								: categoryXImage?.filter((item) => item.id === data?.id)[0]?.image
						}
						alt={data?.name}
						w='24px'
						h='auto'
					/>
					<Text fontSize='16px' fontWeight='600'>
						{data?.name && data.name}
					</Text>
				</Flex>

				<AccordionIcon color='gray' />
			</AccordionButton>
			{data?.children_data?.length !== 0 && (
				<AccordionPanel h='fit-content'>
					<Flex direction='column' borderLeft='2px solid' borderColor='primaryDark.light' gap='8px'>
						{data?.children_data?.map((item: any, index: number) => (
							<Flex
								pl={4}
								as={Link}
								href={`/category/${item?.id}?categoryName=${encodeURIComponent(item?.name)}`}
								key={index}
								align='center'
								w='full'
								onClick={() => {
									dispatch(changeItem(data?.id));
								}}
							>
								<Text fontSize='14px'>{item?.name && item.name}</Text>
							</Flex>
						))}
					</Flex>
				</AccordionPanel>
			)}
		</AccordionItem>
	);
};
