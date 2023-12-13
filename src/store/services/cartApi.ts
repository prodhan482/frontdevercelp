import mainApi from "./mainApi";

export const cartApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getLoginCart: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API_2}/carts/mine/items`,
				method: "GET",
			}),
			providesTags: ["cart"],
		}),
		createQuote: builder.mutation({
			query: () => ({
				url: `https://bazar365.com/rest/V1/carts/mine`,
				method: "POST",
			}),
		}),
		updateLoginCart: builder.mutation({
			query: ({ qty, quoteId, sku }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API_2}/carts/mine/items`,
				method: "PUT",
				body: {
					cartItem: {
						qty: qty,
						quote_id: quoteId,
						sku: sku,
					},
				},
			}),
		}),
		deleteLoginCart: builder.mutation({
			query: ({ itemId }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/carts/mine/items/${itemId}`,
				method: "DELETE",
			}),
		}),
		loginCartTotal: builder.mutation({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/carts/mine/totals-information`,
				method: "POST",
			}),
		}),
		addToCart: builder.mutation({
			query: ({ qty, quoteId, sku }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API_2}/carts/mine`,
				method: "POST",
				body: {
					cartItem: {
						qty: qty,
						quote_id: quoteId,
						sku: sku,
					},
				},
			}),
			invalidatesTags: ["cart"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetLoginCartQuery,
	useCreateQuoteMutation,
	useDeleteLoginCartMutation,
	useAddToCartMutation,
	useUpdateLoginCartMutation,
	useLoginCartTotalMutation,
} = cartApi;
export default cartApi;
