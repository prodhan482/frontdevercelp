"use client";
import PageLayout from "@/components/layout/PageLayout";
import CheckoutHeader from "@/components/section/checkout/CheckoutHeader";
import DeliveryDate from "@/components/section/checkout/DeliveryDate";
import OrderItemSection from "@/components/section/checkout/OrderItemSection";
import QuickAdsItem from "@/components/section/checkout/QuickAdsItem";
import SelectPayment from "@/components/section/checkout/SelectPayment";
import ShippingAddress from "@/components/section/checkout/ShippingAddress";
import { useGetSelfTestQuery } from "@/store/services/productApi";
import { Flex, Grid, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const CheckoutPage: NextPage = () => {
	const [selectedAddress, setSelectedAddress] = React.useState<any>(null);
	const [selectedDelevery, setSelectedDelivery] = React.useState<any>(null);

	const {
		data: self,
		isLoading: selfIsLoading,
		isError: selfIsError,
	} = useGetSelfTestQuery({});

	return (
		<PageLayout isNotCart isNotFooter>
			<Grid templateColumns={{ base: "1fr", lg: "3fr 1fr" }} w='full'>
				{/* Left Section */}
				<Flex direction='column' gap='24px'>
					<CheckoutHeader />

					<Grid
						templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
						gap={{ base: "24px", lg: "8px" }}
						p='16px'
					>
						<ShippingAddress
							selectedAddress={selectedAddress}
							setSelectedAddress={setSelectedAddress}
							self={self}
							isSelfLoading={selfIsLoading}
							isSelfError={selfIsError}
						/>
						<DeliveryDate />
						<SelectPayment />
					</Grid>

					<Flex
						direction='column'
						p='16px'
						gap='18px'
						display={{ base: "none", lg: "flex" }}
					>
						<Heading fontSize='32px' fontWeight='700'>
							Quick Ads
						</Heading>
						<Grid templateColumns='repeat(3, 1fr)' gap='8px'>
							<QuickAdsItem />
							<QuickAdsItem />
							<QuickAdsItem />
						</Grid>
					</Flex>
				</Flex>

				{/* Right Section */}
				<OrderItemSection />
			</Grid>
		</PageLayout>
	);
};

export default CheckoutPage;
