'use client'
import React from 'react'
import NavbarList from './NavbarList';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Navbar() {
    const { t } = useTranslation();

    const navigationUrl = [
        {
            titleKey: "nav.home",
            pathName: "/"
        },
        {
            titleKey: "nav.myRecipes",
            pathName: "/tariflerim"
        },
        {
            titleKey: "nav.favorites",
            pathName: "/favorilerim"
        }
    ];


    return (
        <ul className='flex items-center gap-3'>
            {
                navigationUrl.map((data, index) => (
                    <NavbarList key={index} data={{ ...data, title: t(data.titleKey) }} />
                ))
            }
        </ul>
    )
}
