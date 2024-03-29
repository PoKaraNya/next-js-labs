'use client'
import {useGetPostById} from "@/http";
import {Error, Loading} from "@/app/_components";
import {FavouriteArticle} from "@/app/(app)/articles/favourite/FavouriteArticle";

export default function ArticleFavouritePage() {
    const post1 = useGetPostById(1)
    const post2 = useGetPostById(2)
    const post3 = useGetPostById(3)
    const posts = [post1, post2, post3]

    return (
        <div className='flex gap-2'>
            {
                posts.map((post, index) => {
                    if (post.isLoading) {
                        return <Loading key={index}/>
                    }
                    if (!post.data || post.error) {
                        return <Error key={index}/>
                    }
                    return (
                        <FavouriteArticle key={index} {...post.data}/>
                    )
                })
            }
        </div>
    )
}