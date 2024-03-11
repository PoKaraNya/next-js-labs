import {useData} from "@/hooks";
import {Post} from "@/app/types/posts.types";

export const useGetPosts = () => useData<Post[]>('/posts')