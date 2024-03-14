import {httpClient} from "@/hooks";
import {Comment} from "@/app/_components"

interface Params {
    params: {
        id: number
    }
}

export function generateStaticParams() {
    return new Array(10)
        .fill(null)
        .map((_value, index) => (index + 1).toString());
}

export default async function ArticlesIdPage({params}: Params) {

    const post = await httpClient(`/posts/${params.id}`).then(({data}) => data)
    const comment = await httpClient(`/posts/${params.id}/comments`).then(({data}) => data)

    return (
        <>
            <div>
                {post?.title}
            </div>
            <div>
                ID: {post?.id}
            </div>
            <div>
                UserID: {post?.userId}
            </div>
            <div className='flex flex-col gap-2 px-2'>
                {
                    comment.map((element: any) => (
                        <Comment key={element.id} {...element}/>
                    ))
                }
            </div>
        </>
    )
}