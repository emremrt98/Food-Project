'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useAuth } from '@/app/_context/AuthContext';

export default function NavbarList({ data }) {
    const pathname = usePathname();
    const { isLoggedIn, setOpenLoginModal } = useAuth();

    // Korunan sayfalar listesi
    const protectedPages = ['/tariflerim', '/favorilerim'];

    const handleClick = (e) => {
        // Eğer sayfa korumalıysa ve kullanıcı giriş yapmamışsa
        if (protectedPages.includes(data.pathName) && !isLoggedIn) {
            e.preventDefault();
            setOpenLoginModal(true);
        }
    };

    return (
        <Link 
            href={data.pathName} 
            onClick={handleClick}
            className={`px-4 text-primary text-base font-medium py-3 rounded-full ${pathname == data.pathName ? 'active' : ''}`}
        >
            {data.title}
        </Link>
    )
}
