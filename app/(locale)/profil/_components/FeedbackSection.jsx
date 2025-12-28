'use client'
import React from 'react'
import { useTranslation } from '@/app/_hooks/useTranslation'
import { HiExclamationTriangle } from "react-icons/hi2";
import { FaRegCommentDots } from "react-icons/fa";

export default function FeedbackSection() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-4'>
      <p className='text-sm text-primary leading-relaxed'>
        {t('pages.profile.feedbackDescription')}
      </p>
      <div className='flex gap-3'>
        <button className='flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white text-base font-medium py-3 px-4 rounded-[8px] hover:bg-orange-600 transition-colors'>
          <HiExclamationTriangle size={20} />
          {t('pages.profile.reportBug')}
        </button>
        <button className='flex-1 flex items-center justify-center gap-2 bg-green-500 text-white text-base font-medium py-3 px-4 rounded-[8px] hover:bg-green-600 transition-colors'>
          <FaRegCommentDots size={20} />
          {t('pages.profile.giveFeedback')}
        </button>
      </div>
    </div>
  )
}

