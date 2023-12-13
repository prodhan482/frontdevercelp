'use client';

import PageLayout from '@/components/layout/PageLayout';
import ParagraphHeading from '@/components/section/static-page/ParagraphHeading';
import ParagraphText from '@/components/section/static-page/ParagraphText';
import BasePadding from '@/components/util/base-padding/BasePadding';
import CustomBreadcrumb from '@/components/util/custom-breadcrumb/CustomBreadcrumb';
import { Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const PrivacyPolicy: NextPage = () => {
	const privacyPolicy = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>About our Privacy Policy</ParagraphHeading>
			<ParagraphText>
				We take your privacy very seriously. That is why we have developed a
				Privacy Policy that covers how we collect, use, disclose, transfer, and
				store your information. Please take a moment to familiarize yourself
				with our privacy practices and let us know if you have any questions. If
				you have any query, please do call us at +8801842088300.
			</ParagraphText>
		</Flex>
	);

	const personalInformation = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>
				Collection and Use of Personal Information
			</ParagraphHeading>
			<ParagraphText>
				Personal information is data that can be used to uniquely identify or
				contact a single person. You may be asked to provide your personal
				information anytime you are in contact with Bazar365 or a Bazar365
				affiliated company. Bazar365 and its affiliates may share this personal
				information with each other and use it according to the terms of this
				Privacy Policy. They may also combine it with other information to
				provide and improve our products, services, content, and advertising. We
				may collect the following information:
			</ParagraphText>
			<UnorderedList ms='26px'>
				<ListItem>Name</ListItem>
				<ListItem>Contact information including email address</ListItem>
				<ListItem>
					Demographic information such as postcode, preferences and interests
				</ListItem>
				<ListItem>
					Other information relevant to customer surveys and/or offers
				</ListItem>
			</UnorderedList>
			<ParagraphText>
				Here are some examples of the types of personal information Bazar365 may
				collect and how we may use it:
			</ParagraphText>
			<UnorderedList ms='26px'>
				<ListItem>
					The personal information we collect allows us to keep you posted on
					Bazar365’s latest product announcements, software updates, upcoming
					events, services updates, content and advertising. If you don’t want
					to be on our mailing list, you can opt out anytime by updating your
					preferences.
				</ListItem>
				<ListItem>
					From time to time, we may use your personal information to send
					important notices, such as communications/notifications/information
					about purchases and changes to our terms, conditions, and policies.
					Because this information is important to your interaction with
					Bazar365, you may not opt out of receiving these communications.
				</ListItem>
				<ListItem>
					We may also use personal information for internal purposes such as
					auditing, data analysis, and research to improve Bazar365’s products,
					services, and customer communications.
				</ListItem>
				<ListItem>
					If you enter into a sweepstake, contest, or similar promotion we may
					use the information you provide to administer those programs.
				</ListItem>
			</UnorderedList>
		</Flex>
	);

	const nonPersonalInformation = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>
				Collection and Use of Non-Personal Information
			</ParagraphHeading>
			<ParagraphText>
				We also collect non-personal information − data in a form that does not
				permit direct association with any specific individual. We may collect,
				use, transfer, and disclose non-personal information for any purpose.
				The following are some examples of non-personal information that we
				collect and how we may use it:
			</ParagraphText>
			<UnorderedList ms='26px'>
				<ListItem>
					We may collect information such as occupation, language, zip code,
					area code, unique device identifier, location, and the time zone where
					a Bazar365 product is used so that we can better understand customer
					behavior and improve our products, services, and advertising.
				</ListItem>
				<ListItem>
					We also may collect information regarding customer activities on our
					website or from our other products and services. This information is
					aggregated and used to help us provide more useful information to our
					customers and to understand which parts of our website, products, and
					services are of most interest. Aggregated data is considered
					non-personal information for the purposes of this Privacy Policy.If we
					do combine non-personal information with personal information, the
					combined information will be treated as personal information for as
					long as it remains combined.
				</ListItem>
			</UnorderedList>
		</Flex>
	);

	const cookies = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Cookies and Other Technologies</ParagraphHeading>
			<ParagraphText>
				Bazar365’s website, online services, interactive applications, email
				messages, and advertisements may use “cookies” and other technologies
				such as pixel tags and web beacons. These technologies help us better
				understand user behavior, tells us which parts of our website people
				have visited, and facilitates and measures the effectiveness of
				advertisements and web searches. We treat information collected by
				cookies and other technologies as non-personal information. However, to
				the extent that Internet Protocol (IP) addresses or similar identifiers
				are considered personal information by local law, we treat these
				identifiers as personal information. Similarly, to the extent that
				non-personal information is combined with personal information, we treat
				the combined information as personal information for the purposes of
				this Privacy Policy.Bazar365 and its partners use cookies and other
				technologies in mobile advertising services to control the number of
				times you see a given ad, deliver ads that relate to your interests, and
				measure the effectiveness of ad campaigns. You may still see ads related
				to the content on a web page or in an application or based on other
				non-personal information. This opt-out applies only to Bazar365
				advertising services and does not affect interest-based advertising from
				other advertising networks.Bazar365 and our partners also use cookies
				and other technologies to remember personal information when you use our
				website, online services, and applications. Our goal in these cases is
				to make your experience with Bazar365 more convenient, personally and
				friendly. For example, knowing your first name allows us to welcome you
				the next time you visit the Bazar365 Online Store. Knowing your country
				and language − and if you are an educator, your school − helps us
				provide a customized and more useful shopping experience. Knowing
				someone using your computer or device has shopped for a certain product
				or used a particular service helps us make our advertising and email
				communications more relevant to your interests.If you want to disable
				cookies and you’re using the Safari web browser, go to Safari
				preferences and then to the privacy pane to disable cookies. On your
				Bazar365 mobile device, go to Settings, then Safari, and then to the
				Cookies section. For other browsers, check with your provider to find
				out how to disable cookies. Please note that certain features of the
				Bazar365 website will not be available once cookies are disabled.As is
				true of most websites, we gather some information automatically and
				store it in log files. This information includes Internet Protocol (IP)
				addresses, browser type and language, Internet service provider (ISP),
				referring and exit pages, operating system, date/time stamp, and
				clickstream data.We use this information to understand and analyze
				trends, to administer the site, to learn about user behavior on the
				site, and to gather demographic information about our user base as a
				whole. Bazar365 may use this information in our marketing and
				advertising services.In some of our email messages, we use a
				“click-through URL” linked to content on the Bazar365 website. When
				customers click one of these URLs, they pass through a separate web
				server before arriving at the destination page on our website. We track
				this click-through data to help us determine interest in particular
				topics and measure the effectiveness of our customer communications. If
				you prefer not to be tracked in this way, you should not click text or
				graphic links in the email messages.Pixel tags enable us to send email
				messages in a format which customers can read, and they tell us whether
				mail has been opened. We may use this information to reduce or eliminate
				messages sent to customers.
			</ParagraphText>
		</Flex>
	);

	const disclosure = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Disclosure to Third Parties</ParagraphHeading>
			<ParagraphText>
				At times Bazar365 may make certain personal information available to
				strategic partners that work with Bazar365 to provide products and
				services, or that help Bazar365 market to customers. For example, when
				you purchase and activate your iPhone, you authorize Bazar365 and its
				carrier to exchange the information you provide during the activation
				process to carry out service. If you are approved for service, your
				account will be governed by Bazar365 and its carrier’s respective
				privacy policies. Personal information will only be shared by Bazar365
				to provide or improve our products, services and advertising; it will
				not be shared with third parties for their marketing purposes.
			</ParagraphText>
		</Flex>
	);

	const serviceProviders = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Service Providers</ParagraphHeading>
			<ParagraphText>
				Bazar365 shares personal information with companies who provide services
				such as information processing, extending credit, fulfilling customer
				orders, delivering products to you, managing and enhancing customer
				data, providing customer service, assessing your interest in our
				products and services, and conducting customer research or satisfaction
				surveys. These companies are obligated to protect your information and
				may be located wherever Bazar365 operates.
			</ParagraphText>
		</Flex>
	);

	const others = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Others</ParagraphHeading>
			<ParagraphText>
				It may be necessary − by law, legal process, litigation, and/or requests
				from public and governmental authorities within or outside your country
				of residence − for Bazar365 to disclose your personal information. We
				may also disclose information about you if we determine that for
				purposes of national security, law enforcement, or other issues of
				public importance, disclosure is necessary or appropriate. We may also
				disclose information about you if we determine that disclosure is
				reasonably necessary to enforce our terms and conditions or protect our
				operations or users. Additionally, in the event of a reorganization,
				merger, or sale we may transfer any and all personal information we
				collect to the relevant third party.
			</ParagraphText>
		</Flex>
	);

	const protectPersonalInformation = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Protection of Personal Information</ParagraphHeading>
			<ParagraphText>
				Bazar365 takes precautions — including administrative, technical, and
				physical measures — to safeguard your personal information against loss,
				theft, and misuse, as well as against unauthorized access, disclosure,
				alteration, and destruction.
			</ParagraphText>
			<ParagraphText>
				Bazar365 online services such as the Bazar365 Online Store uses Secure
				Sockets Layer (SSL) encryption on all web pages where personal
				information is collected. To make purchases from these services, you
				must use an SSL-enabled browser such as Safari, Firefox, or Internet
				Explorer. Doing so protects the confidentiality of your personal
				information while it’s transmitted over the Internet.
			</ParagraphText>
			<ParagraphText>
				When you use some Bazar365 products, services, or applications or post
				on anBazar365 forum, chat room, or social networking service, the
				personal information you share is visible to other users and can be
				read, collected, or used by them. You are responsible for the personal
				information you choose to submit in these instances. For example, if you
				list your name and email address in a forum posting, that information is
				public. Please take care when using these features.
			</ParagraphText>
		</Flex>
	);

	const integrityAndRetention = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>
				Integrity and Retention of Personal Information
			</ParagraphHeading>
			<ParagraphText>
				Bazar365 makes it easy for you to keep your personal information
				accurate, complete, and up to date. We will retain your personal
				information for the period necessary to fulfill the purposes outlined in
				this Privacy Policy unless a longer retention period is required or
				permitted by law.
			</ParagraphText>
		</Flex>
	);

	const accessPersonalInformation = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Access to Personal Information</ParagraphHeading>
			<ParagraphText>
				You can help ensure that your contact information and preferences are
				accurate, complete, and up to date by logging in to your account at
				www.Bazar365.store. For other personal information, we make good faith
				efforts to provide you with access so you can request that we correct
				the data if it is inaccurate or delete the data if Bazar365 is not
				required to retain it by law or for legitimate business purposes. We may
				decline to process requests that are unreasonably repetitive, require
				disproportionate technical effort, jeopardize the privacy of others, are
				extremely impractical, or for which access is not otherwise required by
				local law. Access, correction, or deletion requests can be made through
				the regional Privacy Contact Form.
			</ParagraphText>
		</Flex>
	);

	const children = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Children</ParagraphHeading>
			<ParagraphText>
				We do not knowingly collect personal information from children under 13
				except where a parent has set up a Bazar365 ID for their child through
				the Bazar365 ID for Students program and provided Bazar365 with verified
				parental consent. Learn more about the Bazar365 ID for Students program
				and device parental controls. If we learn that we have collected the
				personal information of a child under 13 without first receiving
				verifiable parental consent, we will take steps to delete the
				information as soon as possible.
			</ParagraphText>
		</Flex>
	);

	const locationBasedService = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Location Based Services</ParagraphHeading>
			<ParagraphText>
				To provide location-based services on Bazar365 products, Bazar365 and
				our partners and licensees may collect, use, and share precise location
				data, including the real-time geographic location of your Bazar365
				computer or device. This location data is collected anonymously in a
				form that does not personally identify you and is used by Bazar365 and
				our partners and licensees to provide and improve location-based
				products and services. For example, we may share geographic location
				with application providers when you opt in to their location services.
			</ParagraphText>
		</Flex>
	);

	const thirdPartyServices = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Third-Party Sites and Services</ParagraphHeading>
			<ParagraphText>
				Bazar365 websites, products, applications, and services may contain
				links to third-party websites, products, and services. Our products and
				services may also use or offer products or services from third parties −
				for example, a third-party iPhone app. Information collected by third
				parties, which may include such things as location data or contact
				details, is governed by their privacy practices. We encourage you to
				learn about the privacy practices of those third parties.
			</ParagraphText>
		</Flex>
	);

	const companyCommitment = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>
				Our Company wide Commitment to Your Privacy
			</ParagraphHeading>
			<ParagraphText>
				To make sure your personal information is secure; we communicate our
				privacy and security guidelines to Bazar365 employees and strictly
				enforce privacy safeguards within the company.
			</ParagraphText>
		</Flex>
	);

	const changesInPolicy = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Changes in Policy</ParagraphHeading>
			<ParagraphText>
				Bazar365 may need to amend the Privacy Policy from time to time. Any
				such amendment will take effect as soon as it is posted on the website.
				When we change the policy in a material way, a notice will be posted on
				our website along with the updated Privacy Policy.
			</ParagraphText>
			<ParagraphText>
				Please let us know if the personal information which we hold about you
				needs to be corrected or updated and for that please keep yourself
				posted of our website on a day to day basis.
			</ParagraphText>
		</Flex>
	);

	const privacyQuestion = (
		<Flex direction='column' gap={{ base: '4px', lg: '12px' }}>
			<ParagraphHeading>Privacy Questions</ParagraphHeading>
			<ParagraphText>
				If you have any questions or concerns about Bazar365’s Privacy Policy or
				data processing, please feel free to contact us.
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
							Privacy Policy
						</Heading>
						<Flex direction='column' gap={{ base: '32px', lg: '56px' }}>
							{privacyPolicy}
							{personalInformation}
							{nonPersonalInformation}
							{cookies}
							{disclosure}
							{serviceProviders}
							{others}
							{protectPersonalInformation}
							{integrityAndRetention}
							{accessPersonalInformation}
							{children}
							{locationBasedService}
							{thirdPartyServices}
							{companyCommitment}
							{changesInPolicy}
							{privacyQuestion}
						</Flex>
					</Flex>
				</Flex>
			</BasePadding>
		</PageLayout>
	);
};

export default PrivacyPolicy;
