'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import AddressBookSection from '@/components/section/dashboard/AddressBookSection';
import { NextPage } from 'next';
import React from 'react';

const AddressBook: NextPage = () => {
	return (
		<AdminLayout active='Address Book'>
			<AddressBookSection />
		</AdminLayout>
	);
};

export default AddressBook;
