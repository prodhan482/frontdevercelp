import mainApi from "./mainApi";

export const authApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		isPhoneAvailable: builder.mutation({
			query: (mobile) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/EasyLogin/isMobileAvailable`,
				method: "POST",
				body: {
					customerMobile: mobile,
					websiteId: 1,
				},
			}),
		}),
		isEmailAvailable: builder.mutation({
			query: (email) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/customers/isEmailAvailable`,
				method: "POST",
				body: {
					customerEmail: email,
					websiteId: 1,
				},
			}),
		}),
		registerNewUser: builder.mutation({
			query: ({ phoneNumber, email, firstName, lastName, password }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/default/V1/customers`,
				method: "POST",
				body: {
					customer: {
						custom_attributes: [
							{
								attribute_code: "mobilenumber",
								value: phoneNumber,
							},
						],
						email: email,
						firstname: firstName,
						lastname: lastName,
						website_id: 1,
					},
					password: password,
				},
			}),
		}),
		loginWithMobile: builder.mutation({
			query: ({ mobile, password }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/easylogin/customerTokenMobile`,
				method: "POST",
				body: {
					mobile: mobile,
					password: password,
				},
			}),
		}),
		loginWithEmail: builder.mutation({
			query: ({ username, password }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/integration/customer/token`,
				method: "POST",
				body: {
					username,
					password,
				},
			}),
		}),
		sendForgetPasswordOTP: builder.query({
			query: (mobile) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/easylogin/forgetpass/${mobile}`,
				method: "GET",
			}),
		}),
		forgetPassword: builder.mutation({
			query: ({ mobile, otp, password, confirmPassword }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND_API}/V1/easylogin/resetpassword`,
				method: "POST",
				body: {
					mobile,
					otp,
					password,
					confirmPassword,
				},
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useIsPhoneAvailableMutation,
	useIsEmailAvailableMutation,
	useRegisterNewUserMutation,
	useLoginWithMobileMutation,
	useLoginWithEmailMutation,
	useSendForgetPasswordOTPQuery,
	useForgetPasswordMutation,
} = authApi;
export default authApi;
