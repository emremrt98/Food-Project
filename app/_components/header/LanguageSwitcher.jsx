'use client'
import React from 'react'
import { TbWorld } from "react-icons/tb";
import { useLocale } from '@/app/_context/LocaleContext';

export default function LanguageSwitcher() {
    const { locale, changeLocale } = useLocale();

    const languages = [
        { code: 'tr', name: 'Türkçe' },
        { code: 'en', name: 'English' }
    ];

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    const handleClick = () => {
        // Mevcut dilin tersine geç
        const newLocale = locale === 'tr' ? 'en' : 'tr';
        changeLocale(newLocale);
    };

    return (
        <button
            onClick={handleClick}
            className='px-4 py-3 flex gap-2 items-center hover:bg-gray-50 cursor-pointer rounded-full'
        >
            <TbWorld size={24} className='text-primary' />
            <span className='text-primary text-base font-medium'>{currentLanguage.name}</span>
        </button>
    )
}

