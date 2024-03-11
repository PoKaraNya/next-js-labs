'use client'
import {PropsWithChildren} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import classNames from "classnames";

const articlesRoutes = [
    {
        title: 'Favourite',
        path: '/articles/favourite'
    },
    {
        title: 'Create',
        path: '/articles/create'
    }
]

export default function ArticlesLayout({children}: PropsWithChildren) {

    const pathname = usePathname()

    return (
        <>
            <nav>
                <ul className="flex gap-2">
                    {
                        articlesRoutes.map(({title, path}, index) => (
                            <menu key={index}>
                                <Link
                                    href={path}
                                    className={classNames('text-2xl underline', {
                                        'text-red-500': pathname === path
                                    })}
                                >
                                    {title}
                                </Link>
                            </menu>
                        ))
                    }
                </ul>
            </nav>
            <hr/>
            {children}
        </>
    )
}
