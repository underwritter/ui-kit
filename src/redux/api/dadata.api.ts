import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_KEY, BASE_URL, MetodsApi} from "./constants.api";
import {ResponceData} from "./types.api";

export const dadataApi = createApi({
  reducerPath: "dadataApi",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    searchByCityName: builder.query<ResponceData[], string>({
      query: () => ({
        url: "",
        method: MetodsApi.GET,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  keepUnusedDataFor: 1,
});

export const {useSearchByCityNameQuery} = dadataApi;
