'use client';

import PageLayout from '@/components/layout/PageLayout';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import CustomButton from '@/components/util/custom-button/CustomButton';
import CustomInput from '@/components/util/custom-input/CustomInput';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { FormEvent, useState } from 'react';

const ContactUs: NextPage = () => {
	const containerColor = useColorModeValue('container.light', 'container.dark');
	const primaryDark = useColorModeValue('primaryDark.light', 'primaryDark.dark');
	const primaryLight = useColorModeValue('primaryLight.light', 'primaryLight.dark');
	const InputBgColor = useColorModeValue('#F5F5F5', '#111111');
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(name, address, phone, email);
	};

	const FormInputs = (
		<Flex as={'form'} direction='column' gap='24px' onSubmit={handleSubmit}>
			<CustomInput
				label='Your Name'
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='eg. John Doe'
				bgColor={InputBgColor}
				h='36px'
			/>
			<CustomInput
				label='Address'
				value={address}
				onChange={e => setAddress(e.target.value)}
				placeholder='eg. xyz Street, Z City, Country'
				type='text'
				bgColor={InputBgColor}
				h='36px'
			/>
			<CustomInput
				label='Phone Number'
				type='number'
				value={phone}
				onChange={e => setPhone(e.target.value)}
				placeholder='eg. +8801XXXXXXXXX'
				bgColor={InputBgColor}
				h='36px'
			/>
			<CustomInput
				label='Email'
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='eg. bazar365@gmail.com'
				bgColor={InputBgColor}
				h='36px'
			/>
			<CustomButton
				w='68px'
				variant='proceed'
				type='submit'
				label='submit'
				bgColor={primaryDark}
				_hover={{ bgColor: primaryLight }}
			/>
		</Flex>
	);

	return (
		<PageLayout>
			<BasePadding>
				<CustomBreadcrumb />
				<Flex
					flex={1}
					direction='column'
					justifyContent='center'
					alignItems='center'
					px={{ base: '0px', lg: '274px' }}
					py={{ base: '23px', lg: '32px' }}
				>
					{/* Form Container */}
					<Flex
						direction='column'
						bgColor={containerColor}
						boxShadow='0px 5px 20px 0px rgba(68, 68, 68, 0.05)'
						px={{ base: '18px', lg: '32px' }}
						py='32px'
						borderRadius='16px'
						w='full'
						h='full'
						gap='24px'
					>
						<Text fontSize={{ base: '28px', lg: '32px' }} fontWeight={700}>
							Contact Us
						</Text>
						{/* Input fields */}
						{FormInputs}
					</Flex>
				</Flex>
			</BasePadding>
		</PageLayout>
	);
};

export default ContactUs;
