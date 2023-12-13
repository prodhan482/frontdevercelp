import { TableBodyProps, TableCellProps, Td } from "@chakra-ui/react";
import React from "react";

type CustomTableDataProps = TableCellProps & {
    children: React.ReactNode
}

const TableData: React.FC<CustomTableDataProps> = ({children, ...props}) => {
	return <Td {...props}>{children}</Td>;
};

export default TableData;
