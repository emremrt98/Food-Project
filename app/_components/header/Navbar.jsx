import React from 'react'
import NavbarList from './NavbarList';

export default function Navbar() {

    const navigationUrl = [
        {
            title: "Ana Sayfa",
            pathName: "/"
        },
        {
            title: "Tariflerim",
            pathName: "/tariflerim"
        },
        {
            title: "Favorilerim",
            pathName: "/favorilerim"
        }
    ];


    return (
        <ul className='flex items-center gap-3'>
            {
                navigationUrl.map((data, index) => (
                    <NavbarList key={index} data={data} />
                ))
            }
        </ul>
    )
}
