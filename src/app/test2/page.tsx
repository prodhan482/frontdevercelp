'use client';
import { Text } from '@chakra-ui/react';
import React from 'react';
import { NextPage } from 'next';
import PageLayout from '@/components/layout/PageLayout';

const items = [
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/oranges.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/potatos.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/spinach.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/carrots.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/guava-fruit-fresh.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/oranges.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/strawberries.png',
	},
	{
		name: 'Qdol Pokemon Limited Edition Soda',
		weight: '250gm',
		price: 790,
		image: '/product-image/potatos.png',
	},
];

const TestPage: NextPage = () => {
	return (
		<PageLayout isNotCart>
			<Text>This is a test page</Text>
		</PageLayout>
	);
};

export default TestPage;
