'use client'
import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/app/_context/AuthContext';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function MenuContainer({ setIsOpen, onOpenLogin, onOpenRegister }) {
    const { isLoggedIn, logout } = useAuth();
    const { t } = useTranslation();

    const handleLogout = () => {
        logout();
        setIsOpen(false);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {
                isLoggedIn ?

                    <ul className='bg-white border border-default-border rounded-sm w-full absolute top-[52px] z-10'>
                        <li>
                            <Link 
                                href="/profil" 
                                className='block text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer'
                                onClick={handleLinkClick}
                            >
                                {t('header.profile')}
                            </Link>
                        </li>
                        <li className='text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer'>{t('header.recipeBook')}</li>
                        <li>
                            <Link 
                                href="/favorilerim" 
                                className='block text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer'
                                onClick={handleLinkClick}
                            >
                                {t('nav.favorites')}
                            </Link>
                        </li>
                        <li 
                            className='border-t border-weak-border text-sm text-[#DC2626] font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer'
                            onClick={handleLogout}
                        >
                            {t('header.logout')}
                        </li>
                    </ul>
                    :
                    <ul className='bg-white border border-default-border rounded-sm w-full absolute top-[52px] z-10'>
                        <li 
                            className='text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer'
                            onClick={() => {
                                setIsOpen(false);
                                onOpenLogin();
                            }}
                        >
                            {t('header.login')}
                        </li>
                        <li 
                            className='text-sm text-primary font-normal px-3 py-2 hover:bg-gray-100 cursor-pointer'
                            onClick={() => {
                                setIsOpen(false);
                                onOpenRegister();
                            }}
                        >
                            {t('header.register')}
                        </li>
                    </ul>
            }
        </>
    )
}
