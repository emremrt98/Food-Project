'use client'
import React, { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { useTranslation } from '@/app/_hooks/useTranslation'
import FanInfo from './FanInfo'
import RecipeBook from './RecipeBook'
import SubmittedRecipes from './SubmittedRecipes'

export default function LeftColumn({ data }) {
  const { t } = useTranslation()
  const [expandedSections, setExpandedSections] = useState({
    fanInfo: true,
    recipeBook: true,
    submittedRecipes: true
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className='flex flex-col gap-4'>
      {/* Fan Bilgileri */}
      <div className='bg-white border border-default-border rounded-[8px]'>
        <div 
          className='flex justify-between items-center p-4 cursor-pointer'
          onClick={() => toggleSection('fanInfo')}
        >
          <h3 className='text-base font-semibold text-primary'>{t('pages.profile.fanInfo')}</h3>
          {expandedSections.fanInfo ? (
            <HiOutlineChevronUp size={20} className='text-primary' />
          ) : (
            <HiOutlineChevronDown size={20} className='text-primary' />
          )}
        </div>
        {expandedSections.fanInfo && (
          <div className='px-4 pb-4'>
            <FanInfo data={data.fanInfo} />
          </div>
        )}
      </div>

      {/* Tarif Defteri */}
      <div className='bg-white border border-default-border rounded-[8px]'>
        <div 
          className='flex justify-between items-center p-4 cursor-pointer'
          onClick={() => toggleSection('recipeBook')}
        >
          <h3 className='text-base font-semibold text-primary'>{t('pages.profile.recipeBook')}</h3>
          {expandedSections.recipeBook ? (
            <HiOutlineChevronUp size={20} className='text-primary' />
          ) : (
            <HiOutlineChevronDown size={20} className='text-primary' />
          )}
        </div>
        {expandedSections.recipeBook && (
          <div className='px-4 pb-4'>
            <RecipeBook data={data.recipeBook} />
          </div>
        )}
      </div>

      {/* Gönderilen Tarifler */}
      <div className='bg-white border border-default-border rounded-[8px]'>
        <div 
          className='flex justify-between items-center p-4 cursor-pointer'
          onClick={() => toggleSection('submittedRecipes')}
        >
          <h3 className='text-base font-semibold text-primary'>{t('pages.profile.submittedRecipes')}</h3>
          {expandedSections.submittedRecipes ? (
            <HiOutlineChevronUp size={20} className='text-primary' />
          ) : (
            <HiOutlineChevronDown size={20} className='text-primary' />
          )}
        </div>
        {expandedSections.submittedRecipes && (
          <div className='px-4 pb-4'>
            <SubmittedRecipes data={data.submittedRecipes} />
          </div>
        )}
      </div>
    </div>
  )
}

