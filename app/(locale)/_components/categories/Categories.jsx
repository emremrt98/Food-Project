'use client'
import Title from '@/app/_components/title/Title'
import React from 'react'
import CategoryItem from './CategoryItem'
import { categoriesData } from '@/app/_dummydata/categories'
import { useTranslation } from '@/app/_hooks/useTranslation'

export default function Categories() {
    const { t } = useTranslation();
    

    return (
        <div className='mt-12'>
            <Title title={t('categories.title')} description={t('categories.description')} showMore={true} />

            <div className='flex items-center gap-3 mt-6'>
                {
                    categoriesData.map((data, index) => (
                        <CategoryItem data={data} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
