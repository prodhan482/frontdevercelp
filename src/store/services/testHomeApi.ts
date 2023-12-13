import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tags = ['testHomeSlider'];

export const testHomeSlider = createApi({
  reducerPath: 'testHomeSlider',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://backend-test.bazar365.com/api`,
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),
  tagTypes: tags,
  endpoints: (builder) => ({
    getTestHomeSliderData: builder.query({
      query: () => ({
        url: '/generalSetting/homeSliders',
        method: 'GET',
      }),
    }),
    getTestFaqData: builder.query({
      query: () => ({
        url: '/generalSetting/faqs',
        method: 'GET',
      }),
    }),
    getOfferCardData: builder.query({
      query: () => ({
        url: 'generalSetting/offerCards',
        method: 'GET',
      }),
    }),
  }),
  
});

export const { 
  useGetTestHomeSliderDataQuery,
  useGetTestFaqDataQuery,
  useGetOfferCardDataQuery
} = testHomeSlider;
export default testHomeSlider;