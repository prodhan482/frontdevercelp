'use client';

import PageLayout from '@/components/layout/PageLayout';
import ParagraphHeading from '@/components/section/static-page/ParagraphHeading';
import ParagraphText from '@/components/section/static-page/ParagraphText';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { Flex, Heading,  } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const RewardRedemption: NextPage = () => {
	const HeadingSection = (
		<Heading fontSize={{ base: '32px', lg: '48px' }} fontWeight='700'>
			Reward Redemption
		</Heading>
	);
	const purpose = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>
				Our Purpose - Why do we do what we do?
			</ParagraphHeading>
			<Flex direction='column' gap={{ base: '18px', lg: '24px' }}>
				<ParagraphText>
					We are working with the sole purpose of creating an
					environmentally-friendly eco-system. We believe we are responsible for
					our own actions, especially if the consequences of our actions are
					beared by other living beings. This is essentially why we developed a
					system that allows you to be aware of the plastic you consume &
					provides you an opportunity to return the plastics you consumed, in
					order to be properly recycled. On top, you also get rewarded for your
					cautiousness in the form of reward points! Let us show you how the
					system works.
				</ParagraphText>
				<ParagraphText>
					First, you get to see the plastics you have consumed while confirming
					your order. Upon purchasing, you get a notification saying that
					you&apos;ll get reward points if you return these plastics in your
					next purchases. For every gram of plastic you return to us, you will
					get 1 point! The Reward Points Mechanism is briefly explained below.
				</ParagraphText>
			</Flex>
		</Flex>
	);
	const reward = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Reward Redemption</ParagraphHeading>
			<Flex direction='column' gap={{ base: '64px', lg: '24px' }}>
				<ParagraphText>
					As mentioned earlier, for every gram of plastic you return you will
					get 1 point. For every thousand points accumulated, you get rewards in
					the form of discounts, premium offers & cash-back!
				</ParagraphText>
				<ParagraphText fontWeight='600'>
					Please note, you will be entitled to reward points only for returning
					the plastics you have purchased from Bazar365 only.
				</ParagraphText>
			</Flex>
		</Flex>
	);

	return (
		<PageLayout>
			<BasePadding>
				<CustomBreadcrumb />

				<Flex
					direction='column'
					pt={{ base: '13px', lg: '24px' }}
					pb='64px'
					gap={{ base: '22px', lg: '32px' }}
				>
					{HeadingSection}
          
					<Flex direction='column' gap={{ base: '32px', lg: '56px' }}>
						{purpose}
						{reward}
					</Flex>
				</Flex>
			</BasePadding>
		</PageLayout>
	);
};

export default RewardRedemption;
