'use client';

import PageLayout from '@/components/layout/PageLayout';
import ParagraphHeading from '@/components/section/static-page/ParagraphHeading';
import ParagraphText from '@/components/section/static-page/ParagraphText';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const ReturnAndRefund: NextPage = () => {
  const HeadingSection = (
		<Heading fontSize={{ base: '32px', lg: '48px' }} fontWeight='700'>
			Return & Refund Policy
		</Heading>
	);

	const aboutReturnPolicy = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>About our Return Policy</ParagraphHeading>
			<ParagraphText>
				Your satisfaction is our utmost priority at Bazar365. We understand that
				sometimes you may want to return a product to us. That is why we have
				developed a simple Return Policy, so that you can return an item at
				ease. Please take a moment to familiarize yourself with our Return
				Policy & Procedures. If you have any query, please do call us at
				+8801842088300.
			</ParagraphText>
		</Flex>
	);
	const returnPolicy = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Return Policy</ParagraphHeading>
			<ParagraphText>
				If your product is damaged (physically destroyed or broken), defective
				(anything that renders the product not reasonably safe), incorrect
				(presentation different on website) or incomplete (missing parts) at the
				time of delivery, please contact us within 3 hours of delivery. Your
				product may be eligible for replacement depending on the product
				category and condition.
			</ParagraphText>
		</Flex>
	);
	const returnProcedure = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Procedure of Return</ParagraphHeading>
			<ParagraphText>
				You have 3 hours after item delivery, to notify us that you want to
				return your product. If your item meets all the requirements, your
				return can be initiated by calling our Customer Service at
				+8801842088300. Then simply follow the 6 steps stated below:
			</ParagraphText>
			<UnorderedList ms='26px'>
				<ListItem>
					Step 1: Check if your product meets all the conditions for returning a
					product.
				</ListItem>
				<ListItem>
					Step 2: Contact Bazar365&apos;s Customer Service to submit a complaint
					/ request for replacement or exchange.
				</ListItem>
				<ListItem>Step 3: Write the return details on the invoice.</ListItem>
				<ListItem>
					Step 4: Choose your preferred method of product return when you call
					Customer Service.
				</ListItem>
				<ListItem>
					Step 5: Your returned product will go through a Quality Check.
				</ListItem>
				<ListItem>
					Step 6: If validated, you will get product Replacement/Exchange.
				</ListItem>
			</UnorderedList>
		</Flex>
	);
	const returnConditions = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Conditions of Return</ParagraphHeading>
			<UnorderedList ms='26px'>
				<ListItem>
					The product must be unused, unworn, unwashed and without any flaws.
				</ListItem>
				<ListItem>
					The product must include the original tags, user manual, warranty
					cards, freebies and accessories
				</ListItem>
				<ListItem>
					The product must be returned in the original and undamaged
					manufacturer packaging / box. If the product was delivered in a second
					layer of Bazar365 packaging, it must be returned in the same condition
					with return shipping label attached. Do not put tape or stickers on
					the manufacturers box.
				</ListItem>
				<ListItem>
					If a product is returned to us in an inadequate condition, we reserve
					the right to send it back to you.
				</ListItem>
			</UnorderedList>
		</Flex>
	);
	const refundTerms = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Refund Terms</ParagraphHeading>
			<UnorderedList ms='26px'>
				<ListItem>Voucher: 2-3 Business Days.</ListItem>
				<ListItem>Bank Transfer: 7-14 Business Days.</ListItem>
				<ListItem>MFS or Credit Card Reversal: 14-21 Business Days.</ListItem>
				<ListItem>
					In case of any postage fee incurred during the returns, please send us
					your postage fee with receipt for us to refund to you. Processing time
					will be the same as bank transfer method.
				</ListItem>
			</UnorderedList>
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
						{aboutReturnPolicy}
						{returnPolicy}
						{returnProcedure}
						{returnConditions}
						{refundTerms}
					</Flex>
				</Flex>
			</BasePadding>
		</PageLayout>
	);
};

export default ReturnAndRefund;
