'use client';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { NextPage } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import OrderItemSection from '@/components/section/checkout/OrderItemSection';
import CartSlider from '@/components/floating-card/cart-container/CartContainer';

const TestPage: NextPage = () => {
	return (
		<PageLayout>
			<Flex gap='100px'>
				<OrderItemSection />
				<CartSlider />
			</Flex>
		</PageLayout>
	);
};

export default TestPage;
