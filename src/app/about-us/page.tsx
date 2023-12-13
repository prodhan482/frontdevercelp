'use client';

import PageLayout from '@/components/layout/PageLayout';
import ParagraphHeading from '@/components/section/static-page/ParagraphHeading';
import ParagraphText from '@/components/section/static-page/ParagraphText';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const AboutUs: NextPage = () => {
	const HeadingSection = (
		<Heading fontSize={{ base: '32px', lg: '48px' }} fontWeight='700'>
			About Us
		</Heading>
	);
	const mission = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Our Mission</ParagraphHeading>
			<ParagraphText>
				Bazar365 is not just an online grocery shopping platform; we are a dynamic force for
				positive change. Our purpose is to empower every individual to actively participate in the
				global movement to combat plastic waste, thereby contributing to the achievement of
				Sustainable Development Goals (SDGs) 11, 12, and 13. Through innovative solutions, we aim to
				create a community of conscious consumers who not only shop responsibly but also embrace a
				lifestyle that harmonizes with nature. Our mission extends beyond convenience; it&apos;s
				about making eco-friendly living effortlessly easy and incredibly rewarding for everyone.
			</ParagraphText>
		</Flex>
	);
	const vision = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Our Vision</ParagraphHeading>
			<ParagraphText>
				Our vision is to inspire a profound shift in consumer behavior, leading to a world where
				every choice matters and contributes to a healthier planet. Through our pioneering business
				model, we aspire to set new industry standards, redefining the relationship between
				consumers and their ecological footprint. We see a society where Sustainable Development
				Goals are not just lofty aspirations but lived realities. Our vision is to create resilient
				and sustainable urban areas, driven by communities that prioritize cleanliness,
				environmental consciousness, and responsible consumption. By taking bold steps to address
				plastic pollution at its core, we envision a world where individuals, united through
				Bazar365, become catalysts for climate action, fostering a planet that thrives through the
				collective power of responsible choices.
			</ParagraphText>
		</Flex>
	);
	const Achievement = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Our Achievement</ParagraphHeading>
			<Flex direction='column' gap={{ base: '3px', lg: '6px' }}>
				<ParagraphText
					fontSize={{ base: '20px', lg: '24px' }}
					fontWeight='700'
					lineHeight={{ base: '30px', lg: '34px' }}
				>
					IAA (International Advertising Association) Olive Crown Awards 2023 in the category
					&ldquo;New Green Initiative&rdquo;
				</ParagraphText>
				<ParagraphText>
					Bazar365, the country&apos;s first green-tech-focused online grocery store recently
					received IAA (International Advertising Association) Olive Crown Awards 2023 in the
					category &ldquo;New Green Initiative&rdquo; on 5th April 2023.The Olive Crown Awards are
					the first and only awards of their kind in Asia for creative excellence in communicating
					sustainability also honor corporations and individuals who have made a significant
					contribution to a greener, cleaner planet.Bazar365 is overwhelmed with positive responses
					from its consumers, and the company believes its consumers have the magical power to save
					Mother Nature. By choosing sustainable grocery shopping, we all can create change and stop
					plastic pollution.
				</ParagraphText>
			</Flex>
		</Flex>
	);
	const Innovation = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<Flex direction='column' gap={{ base: '3px', lg: '6px' }}>
				<ParagraphText
					fontSize={{ base: '20px', lg: '24px' }}
					fontWeight='700'
					lineHeight={{ base: '30px', lg: '34px' }}
				>
					Bangabandhu Innovation Grant Big (2023)
				</ParagraphText>
				<ParagraphText>
					Bazar365, the first eco-friendly grocery store in the country, has been recognized as one
					of the top 52 startups in the Bangabandhu Innovation Grant (BIG) competition in 2023. The
					competition, organized by the &ldquo;Innovation and Entrepreneurship Development
					Academy&rdquo; Establishment Project and the &quot;Bangladesh Computer Council
					(BCC)&quot;, aims to inspire young entrepreneurs and startups. Out of more than 7000
					startups and innovators across Bangladesh, Bazar365 has emerged as one of the top 52.
				</ParagraphText>
			</Flex>
		</Flex>
	);

	return (
		<PageLayout>
			<Flex direction='column' py={{ base: '18px', lg: '32px' }}>
				<Flex px={{ base: '24px', lg: '44px' }}>
					<CustomBreadcrumb />
				</Flex>

				<BasePadding>
					<Flex flexDir='column' px={{ base: '8px', lg: '0px' }}>
						<Flex direction='column' pb='64px' gap={{ base: '22px', lg: '32px' }}>
							{HeadingSection}
							<Flex direction='column' gap={{ base: '32px', lg: '56px' }}>
								{mission}
								{vision}
								{Achievement}
								{Innovation}
							</Flex>
						</Flex>
					</Flex>
				</BasePadding>
			</Flex>
		</PageLayout>
	);
};

export default AboutUs;
