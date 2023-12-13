import { Tag, TagProps } from '@chakra-ui/react';
import { FC } from 'react';

type CustomTagProps = TagProps & {
	label?: string;
	variant: 'custom' | 'plastic' | 'discount' | 'product-category';
};

const CustomTag: FC<CustomTagProps> = ({ label, variant, ...props }) => {
	return (
		<>
			{variant === 'plastic' && (
				<Tag fontSize='12px' w='fit-content' bgColor='teal.100' color='teal.800' {...props}>
					{label ? label : 'PLASTIC FREE'}
				</Tag>
			)}
			{variant === 'discount' && (
				<Tag fontSize='12px' w='fit-content' bgColor='orange.100' color='yellow.800' {...props}>
					{label ? label : '10% Discount'}
				</Tag>
			)}
			{variant === 'custom' && <Tag w='fit-content' {...props}></Tag>}
			{variant === 'product-category' && (
				<Tag fontSize='12px' w='fit-content' bgColor='green.100' color='green.800' {...props}>
					{label ? label : 'PLASTIC FREE'}
				</Tag>
			)}
		</>
	);
};

export default CustomTag;
