'use client'
import React, { useState } from 'react'
import { useTranslation } from '@/app/_hooks/useTranslation'
import { HiOutlineUser } from "react-icons/hi";
import { MdLocationCity } from "react-icons/md";
import { FaVenusMars } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

export default function EditPersonalInfo({ data, onSave }) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: data.name || '',
    surname: data.surname || '',
    authorProfileName: data.authorProfileName || '',
    city: data.city || '',
    gender: data.gender || '',
    day: data.birthDate.day || '',
    month: data.birthDate.month || '',
    year: data.birthDate.year || ''
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    const updatedData = {
      ...data,
      name: formData.name,
      surname: formData.surname,
      authorProfileName: formData.authorProfileName,
      city: formData.city,
      gender: formData.gender,
      fullName: `${formData.name} ${formData.surname}`,
      birthDate: {
        day: formData.day,
        month: formData.month,
        year: formData.year
      }
    }
    
    if (onSave) {
      onSave(updatedData)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <label className='text-sm text-secondary'>{t('pages.profile.name')}</label>
        <div className='relative'>
          <input
            type='text'
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 text-base text-primary focus:outline-none focus:border-main'
          />
          <HiOutlineUser size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm text-secondary'>{t('pages.profile.surname')}</label>
        <div className='relative'>
          <input
            type='text'
            value={formData.surname}
            onChange={(e) => handleChange('surname', e.target.value)}
            className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 text-base text-primary focus:outline-none focus:border-main'
          />
          <HiOutlineUser size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm text-secondary'>{t('pages.profile.authorProfileName')}</label>
        <div className='relative'>
          <input
            type='text'
            value={formData.authorProfileName}
            onChange={(e) => handleChange('authorProfileName', e.target.value)}
            className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 text-base text-primary focus:outline-none focus:border-main'
          />
          <HiOutlineUser size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm text-secondary'>{t('pages.profile.city')}</label>
        <div className='relative'>
          <input
            type='text'
            value={formData.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 pr-10 text-base text-primary focus:outline-none focus:border-main'
          />
          <MdLocationCity size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
          <HiOutlineChevronDown size={20} className='absolute right-3 top-1/2 -translate-y-1/2 text-secondary' />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm text-secondary'>{t('pages.profile.gender')}</label>
        <div className='relative'>
          <input
            type='text'
            value={formData.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 pr-10 text-base text-primary focus:outline-none focus:border-main'
          />
          <FaVenusMars size={18} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
          <HiOutlineChevronDown size={20} className='absolute right-3 top-1/2 -translate-y-1/2 text-secondary' />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm text-secondary'>{t('pages.profile.birthDate')}</label>
        <div className='flex gap-2'>
          <div className='flex-1 relative'>
            <input
              type='text'
              value={formData.day}
              onChange={(e) => handleChange('day', e.target.value)}
              placeholder={t('pages.profile.day')}
              className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 pr-8 text-base text-primary focus:outline-none focus:border-main'
            />
            <HiOutlineCalendar size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
            <div className='absolute right-2 top-1/2 -translate-y-1/2 flex flex-col'>
              <HiOutlineChevronUp size={16} className='text-secondary cursor-pointer' />
              <HiOutlineChevronDown size={16} className='text-secondary cursor-pointer -mt-1' />
            </div>
          </div>
          <div className='flex-1 relative'>
            <input
              type='text'
              value={formData.month}
              onChange={(e) => handleChange('month', e.target.value)}
              placeholder={t('pages.profile.month')}
              className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 pr-8 text-base text-primary focus:outline-none focus:border-main'
            />
            <HiOutlineCalendar size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
            <div className='absolute right-2 top-1/2 -translate-y-1/2 flex flex-col'>
              <HiOutlineChevronUp size={16} className='text-secondary cursor-pointer' />
              <HiOutlineChevronDown size={16} className='text-secondary cursor-pointer -mt-1' />
            </div>
          </div>
          <div className='flex-1 relative'>
            <input
              type='text'
              value={formData.year}
              onChange={(e) => handleChange('year', e.target.value)}
              placeholder={t('pages.profile.year')}
              className='w-full border border-default-border rounded-[8px] px-4 py-3 pl-10 pr-8 text-base text-primary focus:outline-none focus:border-main'
            />
            <HiOutlineCalendar size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary' />
            <div className='absolute right-2 top-1/2 -translate-y-1/2 flex flex-col'>
              <HiOutlineChevronUp size={16} className='text-secondary cursor-pointer' />
              <HiOutlineChevronDown size={16} className='text-secondary cursor-pointer -mt-1' />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleSave}
        className='w-full bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] mt-2 hover:bg-main/90 transition-colors'
      >
        {t('pages.profile.save')}
      </button>
    </div>
  )
}

