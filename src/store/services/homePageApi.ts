
import mainApi from "./mainApi";

export const homePageApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getBanners: builder.query({
			query: () => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/mobileapps/home`,
				method: "GET",
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useGetBannersQuery } = homePageApi;
export default homePageApi;
