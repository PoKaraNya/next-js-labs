'use client'
import {useGetPosts} from "@/http/articles";

export default function ArticlesPage() {
    const {data, isLoading, error} = useGetPosts()

    if (isLoading) {
        return <>Loading...</>
    }

    if (error || !data) {
        return <>Error</>
    }

    return (
        <ol>
            {
                data.map((element, index) => (
                    <li key={index}>
                        {JSON.stringify(element)}
                    </li>
                ))
            }
        </ol>
    )
}