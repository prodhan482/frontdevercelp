import React, { FC } from 'react';
import PageLayout from './PageLayout';
import BasePadding from '../util/base-padding/BasePadding';
import CustomBreadcrumb from '../util/custom-breadcrumb/CustomBreadcrumb';
import DashboardNavigation from '../dashboard/DashboardNavigation';
import { Grid, GridProps } from '@chakra-ui/react';
import { useGetSelfTestQuery } from '@/store/services/productApi';

type AdminLayoutProps = {
	children: React.ReactNode;
	active: string;
};

const AdminLayout: FC<AdminLayoutProps> = ({ children, active }) => {
	const { data, isSuccess, isLoading } = useGetSelfTestQuery({});
	return (
		<PageLayout>
			<BasePadding>
				<CustomBreadcrumb />
				<Container columnGap='24px' py={8}>
					<DashboardNavigation active={active} data={data} />
					{children}
				</Container>
			</BasePadding>
		</PageLayout>
	);
};

export default AdminLayout;

type ContainerProps = GridProps & {
	children: React.ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
	return (
		<Grid templateColumns={{ base: '1fr', lg: '3fr 9fr' }} gap='16px' {...props}>
			{children}
		</Grid>
	);
};
