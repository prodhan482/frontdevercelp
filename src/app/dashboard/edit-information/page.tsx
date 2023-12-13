'use client';
import AdminLayout from '@/components/layout/AdminLayout';
import EditInformationSection from '@/components/section/dashboard/EditInformationSection';
import { NextPage } from 'next';
import React from 'react';

const DashboardPage: NextPage = () => {
	return (
		<AdminLayout active='Edit Information'>
			<EditInformationSection />
		</AdminLayout>
	);
};

export default DashboardPage;
