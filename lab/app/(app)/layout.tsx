import {PropsWithChildren} from "react";

const menuItems = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
]

export default function AppLayout({children}: PropsWithChildren) {
    return (
        <>
            layout
            <aside className="block tablet:hidden bg-secondary">
                <ul>
                    {
                        menuItems.map((item) => (
                            <li key={item} className='block'>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </aside>
            {children}
        </>
    )
}