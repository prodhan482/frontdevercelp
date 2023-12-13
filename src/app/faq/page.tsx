'use client';

import PageLayout from '@/components/layout/PageLayout';
import FaqAccordion from '@/components/section/static-page/FaqAccordion';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { useGetTestFaqDataQuery } from '@/store/services/testHomeApi';
import { Accordion, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const FAQPage: NextPage = () => {
	const container = useColorModeValue('container.light', 'container.dark'); //container.light and container.dark
	const containerShadow = useColorModeValue('#EBEBEB', 'rgba(68, 68, 68, 0.05)');
	const { data, isLoading,isSuccess } = useGetTestFaqDataQuery({})
	const Lorem = (
		<Text>
			&quot;Bazar365&quot; is a unique e-commerce platform with a purpose. Bazar365 offers you a
			hassle-free shopping experience. It delivers high-quality and authentic food products right to
			your doorstep. Along with that, it gives you a magical power to free your planet from plastic
			pollution.
		</Text>
	);

	const datas = [
		{ title: 'What is Bazar365?', answer: Lorem },
		{
			title: 'Why is "Bazar365" a distinctive online e-commerce platform?',
			answer: Lorem,
		},
		{
			title: 'Is another name for a reputable food supplier "Bazar365"?',
			answer: Lorem,
		},
		{
			title: 'I am interested in purchasing. How can I proceed?',
			answer: Lorem,
		},
		{ title: 'Can I order over the phone?', answer: Lorem },
		{
			title: 'Can I order products from outside the country?',
			answer: Lorem,
		},
		{
			title: 'For any support how can I contact the "Bazar365" team?',
			answer: Lorem,
		},
		{
			title: 'Does "Bazar365" provide home delivery services?',
			answer: Lorem,
		},
		{
			title: 'Does "Bazar365" offer online purchasing convenience?',
			answer: Lorem,
		},
		{ title: 'What is Cash on Delivery (COD)?', answer: Lorem },
		{
			title: 'Within how many days does "Bazar365" deliver products?',
			answer: Lorem,
		},
		{
			title: 'Does "Bazar365" accept returns for defective products?',
			answer: Lorem,
		},
		{ title: 'My order is wrong. What do I do?', answer: Lorem },
		{ title: 'How does "Bazar365" manage the delivery?', answer: Lorem },
	];

	return (
		<PageLayout>
			<BasePadding gap='12px'>
				<CustomBreadcrumb />

				<Flex alignItems='center' flexDir='column' justify='center' gap='32px '>
					<Flex
						flexDir='column'
						alignItems='center'
						justify='center'
						w={{ base: 'full', lg: '55%' }}
						gap='5px'
					>
						<Heading
							fontSize={{ base: '32px', lg: '44px' }}
							lineHeight={{ base: 'normal', lg: '140%' }}
							fontWeight='700'
							textAlign='center'
						>
							Frequently Asked Questions
						</Heading>
						<Text fontSize='16px' lineHeight='140%' fontWeight='400' textAlign='center'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi
						</Text>
					</Flex>

					<Flex flexDir='column' px={{ base: '0', lg: '35px' }} w='full'>
						<Accordion
							allowToggle
							bgColor={container}
							borderRadius='20px'
							boxShadow={`4px 4px 20px 0px ${containerShadow}`}
							p={{ base: '20px 15px', lg: '64px' }}
							gap='24px'
						>
							{data?.map((item:any, index:number) => (
								<FaqAccordion
									borderBottom={index === data.length - 1 ? 'none' : '1px solid #C0C0C0'}
									borderTop='none'
									key={index}
									title={item.name}
									answer={item.description}
								/>
							))}
						</Accordion>
					</Flex>
				</Flex>
			</BasePadding>
		</PageLayout>
	);
};

export default FAQPage;
