'use client'
import Image from 'next/image'
import React from 'react'
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Link from 'next/link';
import Navbar from './Navbar';
import Menu from './Menu';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Header() {
    const { t } = useTranslation();

    return (
        <div>
            <div className='flex items-center justify-end gap-3 border-b border-weak-border py-1'>
                <Link href={"/destek"} className='flex items-center gap-1 p-2'>
                    <IoHelpBuoyOutline />
                    <span>{t('header.support')}</span>
                </Link>
                <Link href={"/iletisim"} className='flex items-center gap-1 p-2'>
                    <FiPhone />
                    <span>{t('header.contact')}</span>
                </Link>
            </div>
            <div className='flex items-center justify-between py-4'>
                <figure>
                    <Image src={"/logo.svg"} width={121} height={43} alt='logo' />
                </figure>
                <nav>
                    <Navbar />
                </nav>
                <div className='flex gap-3 items-center relative'>
                    <LanguageSwitcher />
                    <Menu />
                </div>
            </div>
        </div>
    )
}
