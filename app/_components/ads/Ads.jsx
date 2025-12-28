'use client'
import React from 'react'
import { PiChefHat } from "react-icons/pi";
import { HiSparkles } from "react-icons/hi";
import { IoArrowForward } from "react-icons/io5";
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Ads() {
  const { t } = useTranslation();
  return (
    <div className='py-12 w-full rounded-[8px] mt-12 overflow-hidden relative bg-gradient-to-r from-main/90 via-main/95 to-main/90'>
      <div className='absolute inset-0 opacity-10' style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className='relative h-full flex items-center justify-between px-8'>
        <div className='flex-1 flex flex-col justify-center gap-4'>
          <div className='flex items-center gap-3'>
            <div className='bg-white/15 backdrop-blur-sm rounded-full p-2.5'>
              <PiChefHat className='text-white' size={22} />
            </div>
            <div className='flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20'>
              <HiSparkles className='text-yellow-200' size={16} />
              <span className='text-white text-sm font-semibold'>{t('ads.specialOffer')}</span>
            </div>
          </div>

          <div>
            <h3 className='text-white text-2xl font-bold mb-2'>
              {t('ads.premiumMembership')}
            </h3>
            <h3 className='text-white text-2xl font-bold mb-3'>
              {t('ads.unlimitedRecipes')}
            </h3>
            <p className='text-white/85 text-sm mb-4 max-w-md leading-relaxed'>
              {t('ads.description')}
            </p>
            <button className='bg-white text-main px-6 py-3 rounded-[8px] font-semibold text-sm hover:bg-gray-50 transition-all flex items-center gap-2 group shadow-md hover:shadow-lg'>
              {t('ads.startButton')}
              <IoArrowForward className='group-hover:translate-x-1 transition-transform' size={18} />
            </button>
          </div>
        </div>

        <div className='hidden md:flex items-center justify-center flex-1 relative'>
          <div className='flex flex-col items-center gap-6'>
            {/* Discount Badge */}
            <div className='relative'>
              <div className='w-40 h-40 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/25 shadow-lg'>
                <div className='text-center'>
                  <div className='text-white text-5xl font-bold leading-none'>%50</div>
                  <div className='text-white/80 text-xs font-medium mt-1'>{t('ads.discount')}</div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className='absolute -top-2 -right-2 w-6 h-6 bg-yellow-200 rounded-full animate-pulse'></div>
              <div className='absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-200/70 rounded-full animate-pulse delay-300'></div>
            </div>
            
            {/* Feature Icons */}
            <div className='flex gap-4'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-12 h-12 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20'>
                  <PiChefHat className='text-white' size={24} />
                </div>
                <span className='text-white/80 text-xs text-center'>{t('ads.unlimitedRecipesLabel')}</span>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-12 h-12 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20'>
                  <HiSparkles className='text-yellow-200' size={24} />
                </div>
                <span className='text-white/80 text-xs text-center'>{t('ads.premiumContent')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
