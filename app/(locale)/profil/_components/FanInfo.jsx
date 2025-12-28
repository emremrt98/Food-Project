'use client'
import React from 'react'
import { useTranslation } from '@/app/_hooks/useTranslation'

export default function FanInfo({ data }) {
  const { t } = useTranslation()

  return (
    <div className='flex gap-3'>
      <div className='bg-white border border-default-border rounded-[8px] p-4 flex-1 text-center'>
        <div className='text-sm text-primary font-medium'>{t('pages.profile.followers')}</div>
        <div className='text-base text-primary font-semibold mt-1'>
          {data.followers.toLocaleString('tr-TR')} {t('pages.profile.people')}
        </div>
      </div>
      <div className='bg-white border border-default-border rounded-[8px] p-4 flex-1 text-center'>
        <div className='text-sm text-primary font-medium'>{t('pages.profile.following')}</div>
        <div className='text-base text-primary font-semibold mt-1'>
          {data.following.toLocaleString('tr-TR')} {t('pages.profile.people')}
        </div>
      </div>
    </div>
  )
}

