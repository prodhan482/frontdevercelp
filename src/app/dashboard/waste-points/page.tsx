'use client';
import AdminLayout from '@/components/layout/AdminLayout';
import WastePointsSection from '@/components/section/dashboard/WastePointsSection';
import { NextPage } from 'next';
import React from 'react';

// export default page
const WastePoints: NextPage = () => {
	return (

		<AdminLayout active='Waste Points'>
			<WastePointsSection />
		</AdminLayout>
	);
};

export default WastePoints;
