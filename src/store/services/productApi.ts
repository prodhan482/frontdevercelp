import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import mainApi from "./mainApi";

export const productApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllCategories: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/categories`,
				method: "GET",
			}),
		}),
		getSelfTest: builder.query({
			query: () => ({
				url: `https://bazar365.com/rest/default/V1/customers/me`,
				method: "GET",
			}),
		}),
		getProductsByCategory: builder.query({
			query: ({
				categoryId = 54,
				sort = "name",
				order = "ASC",
				limit = 15,
				page = 1,
			}) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/products`,
				method: "GET",
				params: {
					"searchCriteria[filterGroups][0][filters][0][field]": "category_id",
					"searchCriteria[filterGroups][0][filters][0][value]": categoryId,
					"searchCriteria[filterGroups][0][filters][0][conditionType]": "eq",
					"searchCriteria[sortOrders][0][field]": sort,
					"searchCriteria[sortOrders][0][direction]": order,
					"searchCriteria[pageSize]": limit,
					"searchCriteria[currentPage]": page,
				},
			}),
		}),
		getProducts: builder.query({
			query: ({ sort = "name", order = "ASC", limit = 10, page = 1 }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/products`,
				method: "GET",
				params: {
					"searchCriteria[sortOrders][0][field]": sort,
					"searchCriteria[sortOrders][0][direction]": order,
					"searchCriteria[pageSize]": limit,
					"searchCriteria[currentPage]": page,
				},
			}),
		}),
		searchProductsId: builder.query({
			query: ({ search = "" }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/search`,
				method: "GET",
				params: {
					"searchCriteria[filter_groups][0][filters][0][field]": "search_term",
					"searchCriteria[filter_groups][0][filters][0][value]": search,
					"searchCriteria[filter_groups][0][filters][0][condition_type]": "eq",
					"searchCriteria[requestName]": "quick_search_container",
				},
			}),
		}),
		getSearchProducts: builder.query({
			query: ({ limit = 10, ids = "" }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/products`,
				method: "GET",
				params: {
					"searchCriteria[pageSize]": limit,
					"searchCriteria[filter_groups][0][filters][0][field]": "entity_id",
					"searchCriteria[filter_groups][0][filters][0][value]": ids,
					"searchCriteria[filter_groups][0][filters][0][condition_type]": "in",
				},
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetAllCategoriesQuery,
	useGetProductsByCategoryQuery,
	useGetProductsQuery,
	useSearchProductsIdQuery,
	useGetSearchProductsQuery,
	useGetSelfTestQuery,
} = productApi;
export default productApi;
