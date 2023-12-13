"use client";
import { Divider, Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Logo from "../util/logo/Logo";
import FooterText from "./FooterText";
import { MdOutlineHeadphones } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import CustomFooterImage from "./CustomFooterImage";
import Link from "next/link";

const Footer = () => {
	const leftItems = (
		<Stack spacing='16px' align='flex-start'>
			<Logo h='32px' />
			<FooterText
				fontSize={{ base: "12px", lg: "14px" }}
				lineHeight='1.2'
				fontWeight='500'
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</FooterText>

			<Stack spacing={{ base: "12px", lg: "20px" }} w='60%'>
				<Flex gap='8px'>
					<MdOutlineHeadphones size='16px' />
					<Stack spacing='0'>
						<FooterText fontWeight='600'>Hotline 24/7</FooterText>
						<FooterText fontSize='16px' fontWeight='600'>
							(+880) 9643 365 365
						</FooterText>
					</Stack>
				</Flex>
				<Flex gap='8px'>
					<FiHome size='16px' />
					<Stack spacing='0'>
						<FooterText fontWeight='600'>House 91/C Rd 24</FooterText>
						<FooterText fontWeight='600'> Dhaka 1212 Bangladesh</FooterText>
					</Stack>
				</Flex>
				<Flex gap='8px'>
					<HiOutlineMail size='16px' />
					<Stack spacing='0'>
						<FooterText fontWeight='600' hoverActive>
							Care@bazar365.biz
						</FooterText>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);

	const centerItems = (
		<Grid templateColumns='1fr 1fr 1fr' gap={{ base: 2, md: 8 }} minW='100%'>
			<Stack>
				<Heading fontSize='16px' fontWeight='600' my='12px'>
					Useful Links
				</Heading>
				<Link href='/about-us'>
					<FooterText hoverActive>About Us</FooterText>
				</Link>
				<FooterText hoverActive>Contact</FooterText>
				<Link href='/faq'>
					<FooterText hoverActive>FAQ</FooterText>
				</Link>
				<FooterText hoverActive>Offer</FooterText>
				<FooterText hoverActive>Blog</FooterText>
			</Stack>
			<Stack>
				<Heading fontSize='16px' fontWeight='600' my='12px'>
					Policy
				</Heading>
				<Link href='/terms-and-conditions'>
					<FooterText hoverActive>Terms & Conditions</FooterText>
				</Link>
				<Link href='/privacy-policy'>
					<FooterText hoverActive>Privacy Policy</FooterText>
				</Link>
				<Link href='/return-and-refund-policy'>
					<FooterText hoverActive>Return & Refund</FooterText>
				</Link>
				<Link href='/reward-redemption'>
					<FooterText hoverActive>Reward Redemption</FooterText>
				</Link>
			</Stack>
			<Stack>
				<Heading fontSize='16px' fontWeight='600' my='12px'>
					Account
				</Heading>
				<Link href='/auth/login'>
					<FooterText hoverActive>Sign In</FooterText>
				</Link>
				<FooterText hoverActive>View Cart</FooterText>
				<Link href='/wishlist'>
					<FooterText hoverActive>My Wishlist</FooterText>
				</Link>
			</Stack>
		</Grid>
	);

	const rightItems = (
		<Flex flexDir='column' justify='space-between' gap='32px'>
			<Stack spacing={{ base: "16px", lg: "24px" }}>
				<Heading fontSize='16px' fontWeight='600' mt='12px'>
					Install App
				</Heading>
				<FooterText fontSize='14px' fontWeight='600' lineHeight='1.2'>
					Download Our App from App Store or <br /> Google Play Store
				</FooterText>
				<Flex gap='8px'>
					<CustomFooterImage h='32px' src='/footer/App-Store.svg' />
					<CustomFooterImage h='32px' src='/footer/Google-Play.svg' />
				</Flex>
			</Stack>
			<Stack spacing='12px'>
				<Heading fontSize='16px' fontWeight='600'>
					Our secured gateways
				</Heading>
				<Flex gap='6px'>
					<CustomFooterImage h='22px' src='/footer/visa.svg' />
					<CustomFooterImage h='22px' src='/footer/mastercard.svg' />
					<CustomFooterImage h='22px' src='/footer/Bkash.svg' />
				</Flex>
			</Stack>
		</Flex>
	);

	return (
		<Stack
			w='full'
			px={{ base: 6, lg: "92px" }}
			py={{ base: "24px", lg: "32px" }}
			bgColor='footer.light'
			spacing='24px'
			_dark={{
				bgColor: "footer.dark",
			}}
		>
			<Stack gap='24px' py='32px'>
				<Grid
					templateColumns={{ base: "1fr", lg: "1fr 2fr 1fr" }}
					gap={{ base: "32px", lg: "64px" }}
					w='full'
				>
					{leftItems}
					{centerItems}
					{rightItems}
				</Grid>
			</Stack>
			<Divider orientation='horizontal' size='xl' />
			<FooterText fontSize='14px' fontWeight='600'>
				© 2023{" "}
				<span
					style={{
						fontWeight: "700",
					}}
				>
					BAZAR365
				</span>
				, All Rights Reserved
			</FooterText>
		</Stack>
	);
};

export default Footer;
