import mainApi from "./mainApi";

export const userApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		updateSelf: builder.mutation({
			query: (body) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/customers/me`,
				method: "PUT",
				body,
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useUpdateSelfMutation } = userApi;
export default userApi;
