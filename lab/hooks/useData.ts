import useSWR from "swr"
import axios from "axios";
import {API_HOST} from "@/constants";

const httpClient = axios.create({
    baseURL: API_HOST,
    method: "GET"
})

const fetcher = (url: string) => httpClient(url).then(({data}) => data)

export function useData(url: string) {
    return useSWR(url, fetcher)
}