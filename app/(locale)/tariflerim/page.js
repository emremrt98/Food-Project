'use client'
import React from 'react'
import Container from '@/app/_components/container/Container'
import Title from '@/app/_components/title/Title'
import RecipeCardItem from '../_components/recipeCard/RecipeCardItem'
import { myRecipesData } from '@/app/_dummydata/myRecipes'
import { useTranslation } from '@/app/_hooks/useTranslation'

export default function RecipePage() {
  const { t } = useTranslation();
  
  return (
    <Container>
      <div className='mt-12'>
        <Title title={t('pages.myRecipes.title')} description={t('pages.myRecipes.description')} />
        <div className='mt-6'>
          <ul className='flex flex-col gap-6'>
            {myRecipesData.map((data, index) => (
              <RecipeCardItem key={index} data={data} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
