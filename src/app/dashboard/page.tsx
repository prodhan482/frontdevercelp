'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import AccountInformationSection from '@/components/section/dashboard/AccountInformationSection';
import { NextPage } from 'next';
import React from 'react';

const DashboardPage: NextPage = () => {
	return (
		<AdminLayout active='Dashboard'>
			<AccountInformationSection />
		</AdminLayout>
	);
};

export default DashboardPage;
