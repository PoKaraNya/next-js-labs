import {useData} from "@/hooks";
import type {Comment} from "@/types";

export const useGetCommentById = (id: number) => useData<Comment[]>(`/posts/${id}/comments`)