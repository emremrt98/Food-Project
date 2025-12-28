'use client'
import React, { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { useTranslation } from '@/app/_hooks/useTranslation'
import PersonalInfo from './PersonalInfo'
import EditPersonalInfo from './EditPersonalInfo'
import FeedbackSection from './FeedbackSection'

export default function RightColumn({ data }) {
  const { t } = useTranslation()
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    editPersonalInfo: false, // Başlangıçta kapalı
    feedback: true
  })
  const [personalInfoData, setPersonalInfoData] = useState(data.personalInfo)

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleEditClick = () => {
    setExpandedSections(prev => ({
      ...prev,
      editPersonalInfo: true
    }))
  }

  const handleSave = (updatedData) => {
    setPersonalInfoData(updatedData)
    setExpandedSections(prev => ({
      ...prev,
      editPersonalInfo: false,
      personalInfo: true
    }))
  }

  return (
    <div className='flex flex-col gap-4'>
      {/* Kişisel Bilgilerim */}
      <div className='bg-white border border-default-border rounded-[8px]'>
        <div 
          className='flex justify-between items-center p-4 cursor-pointer'
          onClick={() => toggleSection('personalInfo')}
        >
          <h3 className='text-base font-semibold text-primary'>{t('pages.profile.personalInfo')}</h3>
          {expandedSections.personalInfo ? (
            <HiOutlineChevronUp size={20} className='text-primary' />
          ) : (
            <HiOutlineChevronDown size={20} className='text-primary' />
          )}
        </div>
        {expandedSections.personalInfo && (
          <div className='px-4 pb-4'>
            <PersonalInfo data={personalInfoData} onEdit={handleEditClick} />
          </div>
        )}
      </div>

      {/* Kişisel Bilgileri Düzenle */}
      <div className='bg-white border border-default-border rounded-[8px]'>
        <div 
          className='flex justify-between items-center p-4 cursor-pointer'
          onClick={() => toggleSection('editPersonalInfo')}
        >
          <h3 className='text-base font-semibold text-primary'>{t('pages.profile.editPersonalInfo')}</h3>
          {expandedSections.editPersonalInfo ? (
            <HiOutlineChevronUp size={20} className='text-primary' />
          ) : (
            <HiOutlineChevronDown size={20} className='text-primary' />
          )}
        </div>
        {expandedSections.editPersonalInfo && (
          <div className='px-4 pb-4'>
            <EditPersonalInfo data={personalInfoData} onSave={handleSave} />
          </div>
        )}
      </div>

      {/* Görüşleriniz */}
      <div className='bg-white border border-default-border rounded-[8px]'>
        <div 
          className='flex justify-between items-center p-4 cursor-pointer'
          onClick={() => toggleSection('feedback')}
        >
          <h3 className='text-base font-semibold text-primary'>{t('pages.profile.feedbackTitle')}</h3>
          {expandedSections.feedback ? (
            <HiOutlineChevronUp size={20} className='text-primary' />
          ) : (
            <HiOutlineChevronDown size={20} className='text-primary' />
          )}
        </div>
        {expandedSections.feedback && (
          <div className='px-4 pb-4'>
            <FeedbackSection />
          </div>
        )}
      </div>
    </div>
  )
}

