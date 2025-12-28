'use client'
import React from 'react'
import { useTranslation } from '@/app/_hooks/useTranslation'

export default function SubmittedRecipes({ data }) {
  const { t } = useTranslation()

  return (
    <div className='flex gap-3'>
      <div className='bg-white border border-default-border rounded-[8px] p-4 flex-1 items-center'>
        <div className='text-sm text-primary font-medium text-center'>{t('pages.profile.published')}</div>
        <div className='text-base text-primary font-semibold mt-1 text-center'>
          {data.published} {t('pages.profile.items')}
        </div>
      </div>
      <div className='bg-white border border-default-border rounded-[8px] p-4 flex-1 items-center'>
        <div className='text-sm text-primary font-medium text-center'>{t('pages.profile.unpublished')}</div>
        <div className='text-base text-primary font-semibold mt-1 text-center'>
          {data.unpublished} {t('pages.profile.items')}
        </div>
      </div>
    </div>
  )
}

