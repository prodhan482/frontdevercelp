import { useGetBannersQuery } from '@/store/services/homePageApi';
import { useGetOfferCardDataQuery } from '@/store/services/testHomeApi';
import { Grid, Image } from '@chakra-ui/react';
import React from 'react';

const StaticBannerSection = () => {
	const {data, isLoading,isSuccess} = useGetOfferCardDataQuery({})
	return (
		<Grid
			py={{ base: '18px', lg: '32px' }}
			templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
			gap='16px'>
				{data 
				&& data?.map((item:any)=>{
					return <Image
						key={item?._id}
						borderRadius='8px'
						w='full'
						objectFit='cover'
						src={`https://bazar365-test.sgp1.digitaloceanspaces.com/${item.image}`}
						alt='no-pollution'
					/>
				})}
			{/*
			<Image
				borderRadius='8px'
				w='full'
				objectFit='cover'
				src='./banners/banner1.svg'
				alt='no-pollution'
			/>
			<Image
				borderRadius='8px'
				w='full'
				objectFit='cover'
				src='./banners/banner2.svg'
				alt='no-pollution'
			/>
			<Image
				borderRadius='8px'
				w='full'
				objectFit='cover'
				src='./banners/banner3.svg'
				alt='no-pollution'
			/> */}
		</Grid>
	);
};

export default StaticBannerSection;
