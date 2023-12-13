'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import MyOrdersSection from '@/components/section/dashboard/MyOrdersSection';
import { NextPage } from 'next';
import React from 'react';

const MyOrders: NextPage = () => {
	return (
		<AdminLayout active='My Orders'>
			<MyOrdersSection />
		</AdminLayout>
	);
};

export default MyOrders;
