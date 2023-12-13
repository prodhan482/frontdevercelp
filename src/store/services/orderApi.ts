import mainApi from './mainApi';

export const orderApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getOrders: builder.query({
			query: ({ customerId, order = 'DESC', limit = 15, page = 1 }) => ({
				// url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/mobileapps/orders/}`,
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/mobileapps/orders?searchCriteria[filter_groups][0][filters][0][field]=customer_id&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][0][filters][0][value]=${customerId}&searchCriteria[sortOrders][0][direction]=${order}&searchCriteria[sortOrders][1][field]=increment_id&searchCriteria[sortOrders][1][direction]=${order}&searchCriteria[pageSize]=${limit}&searchCriteria[currentPage]=${page}`,
				method: 'GET',
				// params: {
				// 	"searchCriteria[filter_groups][0][filters][0][field]": "customer_id",
				// 	"searchCriteria[sortOrders][0][field]": "created_at",
				// 	"searchCriteria[filter_groups][0][filters][0][condition_type]": "eq",
				// 	"searchCriteria[filter_groups][0][filters][0][value]": customerId,
				// 	"searchCriteria[sortOrders][0][direction]": order,
				// 	"searchCriteria[sortOrders][1][field]": "increment_id",
				// 	"searchCriteria[sortOrders][1][direction]": order,
				// 	"searchCriteria[pageSize]": limit,
				// 	"searchCriteria[currentPage]": page,
				// },
			}),
		}),
		getSingleOrder: builder.query({
			query: ({ orderId }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/mobileapps/orders/${orderId}`,
				method: 'GET',
			}),
		}),

		createPayment: builder.mutation({
			query: (body) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/carts/mine/payment-information`,
				method: 'POST',
				body,
			}),
		}),
	}),

	overrideExisting: false,
});

export const { useGetOrdersQuery, useGetSingleOrderQuery } = orderApi;
export default orderApi;
