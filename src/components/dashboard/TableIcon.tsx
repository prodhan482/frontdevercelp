import React from 'react';
import { IconProps } from '@chakra-ui/react';
type TableIconProps = IconProps & {
	Icon: any;
};

const TableIcon: React.FC<TableIconProps> = ({ Icon, ...props }) => {


	return (
		<Icon size='16px' {...props} />
	);
};

export default TableIcon;
