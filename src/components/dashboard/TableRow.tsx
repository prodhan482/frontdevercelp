import { TableRowProps, Tr } from '@chakra-ui/react';
import React from 'react';

type CustomTableRowProps = TableRowProps & {
	children: React.ReactNode;
};

const TableRow: React.FC<CustomTableRowProps> = ({ children, ...props }) => {
	return <Tr {...props}>{children}</Tr>;
};

export default TableRow;
