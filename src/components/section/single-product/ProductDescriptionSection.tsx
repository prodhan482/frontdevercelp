import { Divider, Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type ProductDescriptionSectionProps = FlexProps & {};

const ProductDescriptionSection: FC<ProductDescriptionSectionProps> = () => {
	const descriptionItems = [
		{
			title: 'Details',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		},
		{
			title: 'More Information',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		},
	];

	const [activeTab, setActiveTab] = useState<string>('Details');

	return (
		<Flex flexDir='column' gap='21px'>
			<Flex gap='24px' borderBottom='1px solid #E0E0E0'>
				{descriptionItems.map((item, index) => {
					return (
						<TabSection
							key={index}
							title={item.title}
							isActive={activeTab === item.title}
							onClick={() => setActiveTab(item.title)}
						/>
					);
				})}
			</Flex>
			<Text fontSize='16px' fontWeight='600'>
				{activeTab === 'Details'
					? descriptionItems[0].description
					: descriptionItems[1].description}
			</Text>
		</Flex>
	);
};

export default ProductDescriptionSection;

type TabSectionProps = TextProps & {
	title: string;
	isActive?: boolean;
	onClick?: () => void;
};

const TabSection: FC<TabSectionProps> = ({ title, isActive, ...props }) => {
	return (
		<Text
			fontSize='26px'
			fontWeight='600'
			borderBottom='2px solid'
			borderColor={isActive ? 'primaryLight.light' : 'transparent'}
			cursor={isActive ? 'default' : 'pointer'}
			{...props}>
			{title}
		</Text>
	);
};
