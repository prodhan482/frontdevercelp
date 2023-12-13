'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import RewardPointsSection from '@/components/section/dashboard/RewardPointsSection';
import { NextPage } from 'next';
import React from 'react';

const RewardPoints: NextPage = () => {
	return (
		<AdminLayout active='Reward Points'>
			<RewardPointsSection />
		</AdminLayout>
	);
};

export default RewardPoints;
