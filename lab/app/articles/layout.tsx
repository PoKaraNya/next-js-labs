import {PropsWithChildren} from "react";

export default function ArticlesLayout({children}: PropsWithChildren) {
    return (
        <>
            ArticlesLayout
            <hr/>
            {children}
        </>
    )
}
