import { Select, SelectProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomSelectProps = SelectProps & {
	items: string[];
};

const CustomSelect: FC<CustomSelectProps> = ({ items, ...props }) => {
	return (
		<Select
			bgColor='container.light'
			minW='fit-content'
			borderRadius='8px'
			defaultValue={items[0]}
			_dark={{
				bgColor: 'container.dark',
			}}
			{...props}>
			{items &&
				items.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
		</Select>
	);
};

export default CustomSelect;
