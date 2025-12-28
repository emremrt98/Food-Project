'use client'
import Title from '@/app/_components/title/Title'
import React from 'react'
import RecipeCardItem from './RecipeCardItem';
import { recipesData } from '@/app/_dummydata/recipes';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function RecipeCard() {
    const { t } = useTranslation();
    
    return (
        <div className='mt-12'>
            <Title title={t('recipeCard.title')} description={t('recipeCard.description')} showMore={true} />
            <ul className='mt-6 flex gap-6'>
                {
                    recipesData.slice(0, 2).map((data, index) => <RecipeCardItem key={index} data={data} />)
                }

            </ul>
        </div>
    )
}
