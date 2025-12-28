'use client'
import React from 'react'
import { FaMobileAlt, FaApple, FaGooglePlay } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { IoQrCodeOutline } from "react-icons/io5";
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Banner() {
    const { t } = useTranslation();
    return (
        <div className='w-full py-12 mt-12 bg-gradient-to-br from-primary via-[#1a1b1d] to-primary pl-32 overflow-hidden relative'>
            {/* Dark Background with subtle pattern */}
            <div className='absolute inset-0 opacity-30' style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-4 4H0v-2h16v2zm0-4H0v-2h16v2zm0-4H0v-2h16v2zm0-4H0V6h16v2zm4 12v-2h20v-2H20v-2h20V8H20V6h20V4H20V2h20V0H18v20h2zm0-4h20v-2H20v2zm0-4h20V8H20v2zm0-4h20V4H20v2z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            {/* Subtle decorative elements */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-main/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>
            <div className='absolute bottom-0 left-0 w-80 h-80 bg-main/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2'></div>
            
            <div className='relative h-full flex items-center justify-between px-8 md:px-12'>
                {/* Left Content */}
                <div className='flex-1 flex flex-col justify-center gap-6 z-10'>
                    <div className='flex items-center gap-3 mb-2'>
                        <div className='bg-main/20 rounded-full p-3 border border-main/30'>
                            <HiDevicePhoneMobile className='text-main' size={28} />
                        </div>
                        <div>
                            <h2 className='text-white text-3xl md:text-4xl font-bold'>
                                {t('banner.title')}
                            </h2>
                            <p className='text-white/70 text-sm mt-1'>
                                {t('banner.subtitle')}
                            </p>
                        </div>
                    </div>
                    
                    <p className='text-white/80 text-base max-w-lg leading-relaxed'>
                        {t('banner.description')} <span className='text-main font-semibold'> {t('banner.offlineMode')}</span> {t('banner.offlineDescription')}
                    </p>
                    
                    <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                        <a 
                            href="#" 
                            className='bg-white text-primary px-6 py-4 rounded-[10px] font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        >
                            <FaApple size={24} />
                            <div className='flex flex-col items-start'>
                                <span className='text-[10px] leading-tight text-secondary'>{t('banner.downloadOnAppStore')}</span>
                                <span className='text-base leading-tight font-bold text-primary'>App Store</span>
                            </div>
                        </a>
                        
                        <a 
                            href="#" 
                            className='bg-white text-primary px-6 py-4 rounded-[10px] font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        >
                            <FaGooglePlay size={24} />
                            <div className='flex flex-col items-start'>
                                <span className='text-[10px] leading-tight text-secondary'>{t('banner.getItOnGooglePlay')}</span>
                                <span className='text-base leading-tight font-bold text-primary'>Google Play</span>
                            </div>
                        </a>
                    </div>
                    
                    <div className='flex items-center gap-2 text-white/60 text-sm mt-2'>
                        <IoQrCodeOutline size={18} />
                        <span>{t('banner.qrCode')}</span>
                    </div>
                </div>
                
                {/* Right Side - Modern App Icons */}
                <div className='hidden lg:flex items-center justify-center flex-1 relative'>
                    <div className='relative flex flex-col items-center gap-6'>
                        {/* App Preview Cards */}
                        <div className='flex gap-4'>
                            <div className='w-32 h-40 bg-white rounded-2xl shadow-xl p-4 border border-default-border transform rotate-3 hover:rotate-0 transition-transform'>
                                <div className='w-full h-20 bg-gradient-to-br from-main/20 to-main/10 rounded-lg mb-3 flex items-center justify-center'>
                                    <HiDevicePhoneMobile className='text-main' size={32} />
                                </div>
                                <div className='space-y-2'>
                                    <div className='h-2 bg-box rounded w-full'></div>
                                    <div className='h-2 bg-box rounded w-3/4'></div>
                                </div>
                            </div>
                            
                            <div className='w-32 h-40 bg-white rounded-2xl shadow-xl p-4 border border-default-border transform -rotate-3 hover:rotate-0 transition-transform mt-8'>
                                <div className='w-full h-20 bg-gradient-to-br from-main/20 to-main/10 rounded-lg mb-3 flex items-center justify-center'>
                                    <HiDevicePhoneMobile className='text-main' size={32} />
                                </div>
                                <div className='space-y-2'>
                                    <div className='h-2 bg-box rounded w-full'></div>
                                    <div className='h-2 bg-box rounded w-2/3'></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className='absolute -top-8 -right-8 w-24 h-24 bg-main/10 rounded-full blur-2xl'></div>
                        <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-main/5 rounded-full blur-2xl'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
