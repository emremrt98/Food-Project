'use client'
import React from 'react'
import Link from 'next/link'
import Container from './_components/container/Container'
import { useTranslation } from './_hooks/useTranslation'
import { GiKnifeFork } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12'>
            <Container>
                <div className='flex flex-col items-center justify-center text-center px-4'>
                    {/* 404 Number */}
                    <div className='mb-8'>
                        <h1 className='text-[150px] md:text-[200px] font-bold text-main/20 leading-none'>
                            404
                        </h1>
                    </div>

                    {/* Icon */}
                    <div className='mb-6'>
                        <div className='w-32 h-32 bg-main/10 rounded-full flex items-center justify-center'>
                            <GiKnifeFork className='text-main' size={64} />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
                        {t('notFound.title')}
                    </h2>

                    {/* Description */}
                    <p className='text-lg text-secondary max-w-md mb-8 leading-relaxed'>
                        {t('notFound.description')}
                    </p>

                    {/* Action Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <Link
                            href="/"
                            className='bg-main text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#8B000F] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        >
                            <HiHome size={20} />
                            <span>{t('notFound.backHome')}</span>
                        </Link>
                        
                        <Link
                            href="/"
                            className='bg-white text-main border-2 border-main px-8 py-4 rounded-lg font-semibold hover:bg-main/5 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        >
                            <BiSearch size={20} />
                            <span>{t('notFound.searchRecipes')}</span>
                        </Link>
                    </div>

                    {/* Decorative Elements */}
                    <div className='mt-16 grid grid-cols-3 gap-8 opacity-20'>
                        <div className='w-16 h-16 bg-main/30 rounded-full blur-xl'></div>
                        <div className='w-20 h-20 bg-main/20 rounded-full blur-xl'></div>
                        <div className='w-16 h-16 bg-main/30 rounded-full blur-xl'></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

