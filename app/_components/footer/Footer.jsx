'use client'
import React from 'react'
import Container from '../container/Container'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className='bg-main w-full h-[450px] mt-[100px]'>
      <Container>
        <div className='py-6'>
          <div className='text-white text-2xl font-medium'>Foody</div>
          <div className='mt-4 flex justify-between'>
            <div className='flex flex-col gap-2'>
              <div className='text-base text-white font-medium'>{t('footer.categories')}</div>
              <div className='text-base text-white font-normal'>{t('footer.all')}</div>
              <div className='text-base text-white font-normal'>{t('footer.desserts')}</div>
              <div className='text-base text-white font-normal'>{t('footer.pastries')}</div>
              <div className='text-base text-white font-normal'>{t('footer.meatDishes')}</div>
              <div className='text-base text-white font-normal'>{t('footer.vegetableDishes')}</div>
              <div className='text-base text-white font-normal'>{t('footer.soup')}</div>
              <div className='text-base text-white font-normal'>{t('footer.beverages')}</div>
              <div className='text-base text-white font-normal'>{t('footer.pasta')}</div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-base text-white font-medium'>{t('footer.corporate')}</div>
              <div className='text-base text-white font-normal'>{t('footer.aboutUs')}</div>
              <div className='text-base text-white font-normal'>{t('footer.membershipAgreement')}</div>
              <div className='text-base text-white font-normal'>{t('footer.privacyPolicy')}</div>
              <div className='text-base text-white font-normal'>{t('footer.termsOfUse')}</div>
              <div className='text-base text-white font-normal'>{t('footer.cookiePolicy')}</div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-base text-white font-medium'>{t('footer.support')}</div>
              <div className='text-base text-white font-normal'>{t('footer.contact')}</div>
              <div className='text-base text-white font-normal'>{t('footer.faq')}</div>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div className='text-base text-white font-medium'>{t('footer.socialMedia')}</div>
                <div className='text-base text-white font-normal flex gap-2 items-center'>
                  <FaPhoneAlt size={24} className='text-white' />
                  <span>0212 909 89 91</span>
                </div>
                <div className='text-base text-white font-normal flex gap-2 items-center'>
                  <IoMail size={24} className='text-white' />
                  <span>info@foody.com</span>
                </div>
              </div>
              <div>
                <div className='text-base text-white font-medium'>İletişim</div>
                <div className='mt-2 flex gap-3 items-center'>
                  <div><ImLinkedin size={28} className='text-white' /></div>
                  <div><AiFillInstagram size={36} className='text-white' /></div>
                  <div><PiYoutubeLogoFill size={36} className='text-white' /></div>
                  <div><RiTwitterXLine size={32} className='text-white' /></div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t border-white mt-8'>
            <div className='text-white text-sm text-center mt-4'>{t('footer.copyright')}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
