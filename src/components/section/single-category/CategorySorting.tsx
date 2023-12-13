import CustomSelect from "@/components/util/custom-select/CustomSelect";
import PageHeading from "@/components/util/text/page-heading/PageHeading";
import { Flex, Heading, IconButton, IconButtonProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
type CategorySortingTypes = {
	categoryName?: string;
};
const CategorySorting: FC<CategorySortingTypes> = ({ categoryName }) => {
	const selectItems = ["Position", "Rating", "Price"];
	const selectItems2 = ["10", "20", "30"];

	return (
		<Flex
			flexDir={{ base: "column", lg: "row" }}
			justify='space-between'
			gap='8px'
		>
			<PageHeading
				color='dark-primary.light'
				_dark={{
					color: "dark-primary.dark",
				}}
				flex={2}
			>
				{/* Fruits & Vegetables */}
				{categoryName && categoryName}
			</PageHeading>
			<Flex gap='8px'>
				<CustomSelect flex={3} items={selectItems} placeholder='Sort By' />
				<SortIcon flex={1} isAscending aria-label='paginator' />
				<CustomSelect flex={2} items={selectItems2} placeholder='Show' />
			</Flex>
		</Flex>
	);
};

export default CategorySorting;

type SortIconProps = IconButtonProps & {
	isAscending: boolean;
};
const SortIcon: FC<SortIconProps> = ({ isAscending, ...props }) => {
	return (
		<IconButton bgColor='transparent' _hover={{}} {...props}>
			{isAscending ? <BsSortAlphaDown /> : <BsSortAlphaUp />}
		</IconButton>
	);
};
