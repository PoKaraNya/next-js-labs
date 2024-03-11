import {useData} from "@/hooks";
import type {Post} from "@/types";

export const useGetPosts = () => useData<Post[]>('/posts')

export const useGetPostById = (id: number) => useData<Post>(`/posts/${id}`)
