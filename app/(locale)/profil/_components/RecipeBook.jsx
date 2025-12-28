'use client'
import React from 'react'
import { useTranslation } from '@/app/_hooks/useTranslation'

export default function RecipeBook({ data }) {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-3'>
      <div className='bg-white border border-default-border rounded-[8px] p-4 text-center'>
        <div className='text-sm text-primary font-medium'>{t('pages.profile.recipesInBook')}</div>
        <div className='text-base text-primary font-semibold mt-1'>
          {data.recipesInBook} {t('pages.profile.items')}
        </div>
      </div>
    </div>
  )
}

