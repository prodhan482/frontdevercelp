import { Flex } from '@chakra-ui/react';
import React from 'react';

import ProfileCard from './ProfileCard';
import Navigation from './Navigation';
type DashboardNavigationProps = {
	active?: string;
	data: any;
};

const DashboardNavigation: React.FC<DashboardNavigationProps> = ({ active, data }) => {
	return (
		<>
			<Flex
				flex={1}
				borderRadius='16px'
				flexDir='column'
				bgColor='container.light'
				_dark={{
					bgColor: 'container.dark',
				}}
				pt='36px'
				gap='20px'
				pb='16px'
				h='fit-content'
			>
				<ProfileCard data={data} />
				<Navigation active={active} />
			</Flex>
		</>
	);
};

export default DashboardNavigation;
