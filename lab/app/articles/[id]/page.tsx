'use client'
import {useGetCommentById, useGetPostById} from "@/http";
import {Error, Loading} from "@/app/_components";
import {Comment} from "@/app/_components/Comment";

interface Params {
    params: {
        id: number
    }
}

export default function ArticlesIdPage({params}: Params) {

    const post = useGetPostById(params.id)
    const comment = useGetCommentById(params.id)

    if (post.isLoading || comment.isLoading) {
        return <Loading/>
    }

    if (post.error || !post.data || comment.error || !comment.data) {
        return <Error/>
    }

    return (
        <>
            <div>
                {post.data.title}
            </div>
            <div>
                ID: {post.data.id}
            </div>
            <div>
                UserID: {post.data.userId}
            </div>
            <div className='flex flex-col gap-2 px-2'>
                {
                    comment.data.map((element) => (
                        <Comment key={element.id} {...element}/>
                    ))
                }
            </div>
        </>
    )
}