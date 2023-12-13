//this is test code for table
import { Table, TableProps, Tbody, Thead, Tr } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type customTableHeadersProps = TableProps & {
	customTableHeaders: React.ReactNode;
	children: ReactNode;
};

const TestTable: FC<customTableHeadersProps> = ({ customTableHeaders, children, ...props }) => {
	return (
		<Table {...props}>
			<Thead>
				<Tr>{customTableHeaders}</Tr>
			</Thead>
			<Tbody>{children}</Tbody>
		</Table>
	);
};

export default TestTable;
