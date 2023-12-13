import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import mainApi from "./mainApi";

export const otherApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getAddresses: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/kas-directory/directory_data`,
				method: "GET",
			}),
		}),
		addShippingAddress: builder.mutation({
			query: (address) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/customers/me/shippingAddress`,
				method: "POST",
				body: {
					addressInformation: {},
				},
			}),
		}),
		// getDeliverySlot: builder.mutation({
		// 	query: () => ({

		// 	}),
		// }),
		getRewardPointsBalance: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/rewards/mine/balance`,
				method: "GET",
			}),
		}),
		applyRewardPoints: builder.mutation({
			query: (point) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/carts/mine/points/${point}`,
				method: "PUT",
			}),
		}),
		getRewardPointsHistory: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/rewards/mine/history`,
				method: "GET",
			}),
		}),
		getRewardPointsExpiration: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/rewards/mine/expiration`,
				method: "GET",
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetAddressesQuery,
	useGetRewardPointsBalanceQuery,
	useApplyRewardPointsMutation,
	useGetRewardPointsHistoryQuery,
	useGetRewardPointsExpirationQuery,
} = otherApi;
export default otherApi;
