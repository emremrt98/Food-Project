'use client'
import React from 'react'
import { useTranslation } from '@/app/_hooks/useTranslation'
import Link from 'next/link'

export default function PersonalInfo({ data, onEdit }) {
  const { t } = useTranslation()

  const formatDate = (day, month, year) => {
    return `${day}.${month}.${year}`
  }

  const handleEditClick = (e) => {
    e.preventDefault()
    if (onEdit) {
      onEdit()
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div className='text-sm text-secondary'>{t('pages.profile.fullName')}</div>
        <div className='text-base text-primary font-medium'>{data.fullName}</div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-sm text-secondary'>{t('pages.profile.email')}</div>
        <div className='text-base text-primary font-medium'>{data.email}</div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-sm text-secondary'>{t('pages.profile.authorProfileName')}</div>
        <div className='text-base text-primary font-medium'>{data.authorProfileName}</div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-sm text-secondary'>{t('pages.profile.city')}</div>
        <div className='text-base text-primary font-medium'>{data.city}</div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-sm text-secondary'>{t('pages.profile.gender')}</div>
        <div className='text-base text-primary font-medium'>{data.gender}</div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-sm text-secondary'>{t('pages.profile.birthDate')}</div>
        <div className='text-base text-primary font-medium'>
          {formatDate(data.birthDate.day, data.birthDate.month, data.birthDate.year)}
        </div>
      </div>
      <Link href='#' onClick={handleEditClick} className='text-main text-sm font-medium mt-2 hover:underline'>
        {t('pages.profile.editProfile')}
      </Link>
    </div>
  )
}

