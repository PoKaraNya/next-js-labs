'use client'
import {PropsWithChildren} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import classNames from "classnames";
import "@/styles/modules/layout.scss"
import s from "@/styles/modules/menu.module.scss"

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
        <main className="layout">
            <nav>
                <ul className="flex gap-2">
                    {
                        articlesRoutes.map(({title, path}, index) => (
                            <li key={index} className={s.link}>
                                <Link
                                    href={path}
                                    className={classNames('text-2xl underline', {
                                        [s.link_active]: pathname === path
                                    })}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <hr/>
            {children}
        </main>
    )
}
