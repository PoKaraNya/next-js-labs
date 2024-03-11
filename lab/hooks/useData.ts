import useSWR from "swr"
import axios from "axios";
import {API_HOST} from "@/constants";

const httpClient = axios.create({
    baseURL: API_HOST,
    method: "GET"
})

const fetcher = (url: string) => httpClient(url).then(({data}) => data)

export function useData<T>(url: string) {
    return useSWR<T>(url, fetcher)
}