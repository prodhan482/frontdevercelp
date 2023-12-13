'use client';

import PageLayout from '@/components/layout/PageLayout';
import ParagraphHeading from '@/components/section/static-page/ParagraphHeading';
import ParagraphText from '@/components/section/static-page/ParagraphText';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const TermsAndConditionPage: NextPage = () => {
	const paragraph1 = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Why Bazar365?</ParagraphHeading>
			<ParagraphText>
				We have been working towards developing an e-commerce for sometime now.
				The reason is not only because of the rise in e-commerce use around the
				world or any structural change in the economy after the Pandemic – but
				also because of our core purpose of creating an eco-friendly mindset
				across our population. The impact of plastic pollution is well known
				around the world. According to United Nations, 100 million tonnes of
				plastic are dumped into the ocean every year. 1 Million Plastic Bottles
				are purchased every minute, worldwide. If we pile all plastic bottles
				purchased around the world in 2018, it would be taller than Burj Khalifa
				– The world’s Tallest Building! Bangladesh alone generates 3,000 tones
				of plastic waste every day! It reaches up to a whopping 800,000 tonnes
				of plastic waste every year – equivalent to the area of the whole of
				sundarbans & a half – the Largest Mangrove Eco-System on Earth! We say
				with pride that our Government was one of the first to take initiatives
				back in 2002 to ban the use of plastic and polythene bags to stop them
				from collecting in waterways and land. However, the people of our
				country still uses them on a daily basis. This is an unfortunate example
				of how no initiative to protect the environment can be implemented if we
				as whole – the people of the world – do not prioritize healing our world
				over convenience. From that chain of thought, we got to thinking – what
				if we create a system where people would actually be benefitted for
				being environmentally conscious? It was then, that we decided on
				creating an e-commerce that would fill all the gaps in customer
				satisfaction, serve customers in biodegradable packaging & offer
				redeemable reward points for returning the plastics in the purchases. We
				realized early that no change will take place unless we start from our
				homes – and this is why exist.
			</ParagraphText>
		</Flex>
	);

	const paragraph2 = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>What We Do?</ParagraphHeading>
			<ParagraphText>
				Before working with Bazar365, we conducted a research with our Core
				Customers, to understand their behavior towards e-commerce. Despite the
				perception of this industry being saturated, 17.1% actually never tried
				any online platform for Grocery or Household items. This indicated that
				there is enough room for penetration even in this saturated market.
				Furthermore, 13.9% of them still had difficulty understanding the
				procedure of online shopping, which was the biggest indication that the
				existing solutions are lacking in terms of User Interface & Customer
				Satisfaction. That is where we wanted to build our initiative. We
				started by designing a website that focuses on a hassle free journey to
				purchasing through a simplistic user interface. Our platform allows
				users to navigate, select, purchase & receive their desired products at
				the ease of a few buttons! We aspire to become the first brand with a
				unique purpose of making people aware of plastic pollution, provide
				incentives to change actions & hence, reduce Plastic Footprints.
			</ParagraphText>
		</Flex>
	);

	const paragraph3 = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>What is Bazar365?</ParagraphHeading>
			<ParagraphText>
				Bazar365.Store is a trusted online shopping platform, with the goal of
				spanning all over Bangladesh - with 8 divisional headquarters. You can
				get fresh groceries, poultry, pantry items, skin care, home care, hair
				care products and so much more. If you can name it, we can deliver it.
				Our motive is to care for our customers as much as we care for the
				environment by ensuring the best quality product along with the best
				customer service and 100% eco-friendly shopping experience.
			</ParagraphText>
		</Flex>
	);

	return (
		<PageLayout>
			<BasePadding>
				<Flex direction='column'>
					<CustomBreadcrumb></CustomBreadcrumb>
					<Flex
						direction='column'
						pt={{ base: '13px', lg: '24px' }}
						pb='64px'
						gap={{ base: '22px', lg: '32px' }}
					>
						<Heading fontSize={{ base: '32px', lg: '48px' }} fontWeight='700'>
							Terms & Conditions
						</Heading>
						<Flex direction='column' gap={{ base: '32px', lg: '56px' }}>
							{paragraph1}
							{paragraph2}
							{paragraph3}
						</Flex>
					</Flex>
				</Flex>
			</BasePadding>
		</PageLayout>
	);
};

export default TermsAndConditionPage;
