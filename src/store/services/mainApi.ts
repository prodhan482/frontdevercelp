import { Provider } from "react-redux";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tags = ["cart"];
export const mainApi = createApi({
	reducerPath: "mainApi",
	baseQuery: fetchBaseQuery({
		baseUrl: ``,

		prepareHeaders: (headers, { getState }) => {
			const token: string = (getState() as any).auth?.token;
			headers.set("content-type", "application/json");
			headers.set("accept", "*/*");
			// headers.set('accept', 'application/json');
			// headers.set("Authorization", token);
			// return headers;
			if (token) {
				headers.set("authorization", token);
				return headers;
			} else {
				headers.set("authorization", `${process.env.NEXT_PUBLIC_TOKEN}`);
				return headers;
			}
		},
	}),
	tagTypes: tags,
	endpoints: (builder) => ({
		getSelf: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/default/V1/customers/me`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetSelfQuery } = mainApi;
export default mainApi;
