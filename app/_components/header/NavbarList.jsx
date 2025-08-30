'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export default function NavbarList({ data }) {
    const pathname = usePathname();

    return (
        <Link href={data.pathName} className={`px-4 text-primary text-base font-medium py-3 rounded-full ${pathname == data.pathName ? 'active' : ''}`}>{data.title}</Link>
    )
}
