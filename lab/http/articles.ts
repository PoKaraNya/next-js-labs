import {useData} from "@/hooks";
import {Post} from "@/app/types";

export const useGetPosts = () => useData<Post[]>('/posts')

export const useGetPostById = (id: number) => useData<Post>(`/posts/${id}`)
