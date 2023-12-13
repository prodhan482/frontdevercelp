import { Flex, Th } from "@chakra-ui/react";
import React from "react";

type TableHeadingProps =  {
    header: string;
    icon: React.ReactNode;

}

const TableHeader: React.FC<TableHeadingProps> = ({
	header,
	icon,
	...props
}) => {
	return (
		<Th textTransform='capitalize' {...props}>
			<Flex fontWeight={700} fontSize='14px' alignItems='center' gap={1}>
				<Flex>{icon}</Flex>
				{header}
			</Flex>
		</Th>
	);
};

export default TableHeader;
