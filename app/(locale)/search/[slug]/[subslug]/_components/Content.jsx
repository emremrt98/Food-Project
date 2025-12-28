"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Content({ recipeData }) {
    const { t, locale } = useTranslation();
    const [activeTab, setActiveTab] = useState('overview');
    const [showAllIngredients, setShowAllIngredients] = useState(false);
    const [showAllInstructions, setShowAllInstructions] = useState(false);

    const data = recipeData || {};
    const images = data.images || [];
    const mainImage = images[0] || { imageUrl: "/onePage/image1.svg", width: 472, height: 417, alt: "Ana görsel" };
    const sideImages = images.slice(1) || [];

    return (
        <div className='mt-6'>
            <div className='flex gap-[1px]'>
                <figure>
                    <Image className='w-full h-full object-cover' src={mainImage.imageUrl} width={mainImage.width} height={mainImage.height} alt={mainImage.alt} />
                </figure>
                {sideImages.length  > 0 && (
                    <div className='flex flex-col gap-[1px]'>
                        {sideImages.map((img, index) => (
                            <figure key={index}>
                                <Image  src={img.imageUrl} width={img.width} height={img.height} alt={img.alt} />
                            </figure>
                        ))}
                    </div>
                )}
            </div>
            <div className='mt-6'>
                <div className='flex  gap-6 items-center border-b border-weak-border pb-2'>
                    <label 
                        onClick={() => setActiveTab('overview')}
                        className={`text-sm font-semibold text-primary cursor-pointer relative before:content-[""] before:absolute before:-bottom-[8px] before:z-10 before:w-full before:border-b before:border-text-primary ${activeTab === 'overview' ? 'font-semibold' : 'font-normal'}`}
                    >
                        {t('recipe.overview')}
                    </label>
                    <label 
                        onClick={() => setActiveTab('tips')}
                        className={`text-sm cursor-pointer ${activeTab === 'tips' ? 'font-semibold text-primary' : 'font-normal text-primary'}`}
                    >
                        {t('recipe.tips')}
                    </label>
                    <label 
                        onClick={() => setActiveTab('info')}
                        className={`text-sm cursor-pointer ${activeTab === 'info' ? 'font-semibold text-primary' : 'font-normal text-primary'}`}
                    >
                        {t('recipe.importantInfo')}
                    </label>
                </div>
                <div className='mt-6'>
                    {activeTab === 'overview' && (
                        <>
                            <p className='text-sm text-primary mb-6'>{data.overview || "Lezzetli, pratik ve sofraların vazgeçilmezi olacak bu soslu tavuk tarifini hem akşam yemeklerinde hem de misafir ağırlarken rahatlıkla yapabilirsiniz."}</p>
                            <div className='mb-4'>
                                <div className='text-base text-primary font-semibold mb-1'>{t('recipe.ingredients')}</div>
                                <ul className='pl-4'>
                                    {(showAllIngredients ? data.ingredients : data.ingredients?.slice(0, 3) || []).map((ingredient, index) => (
                                        <li key={index} className='!list-disc text-primary text-sm'>{ingredient}</li>
                                    ))}
                                    {data.ingredients?.length > 3 && !showAllIngredients && (
                                        <span 
                                            onClick={() => setShowAllIngredients(true)}
                                            className='text-main text-sm cursor-pointer'
                                        >
                                            {t('recipe.seeMore')}
                                        </span>
                                    )}
                                </ul>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-primary font-semibold mb-1'>{t('recipe.instructions')}</div>
                                <ol className='pl-4'>
                                    {(showAllInstructions ? data.instructions : data.instructions?.slice(0, 3) || []).map((instruction, index) => (
                                        <li key={index} className='!list-decimal text-primary text-sm'>{instruction}</li>
                                    ))}
                                    {data.instructions?.length > 3 && !showAllInstructions && (
                                        <span 
                                            onClick={() => setShowAllInstructions(true)}
                                            className='text-main text-sm cursor-pointer'
                                        >
                                            {t('recipe.seeMore')}
                                        </span>
                                    )}
                                </ol>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-primary font-semibold mb-1'>{t('recipe.servingSuggestions')}</div>
                                <ul className='pl-4'>
                                    {(data.servingSuggestions || []).map((suggestion, index) => (
                                        <li key={index} className='!list-disc text-primary text-sm'>{suggestion}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                    {activeTab === 'tips' && (
                        <div className='mb-4'>
                            <ul className='pl-4'>
                                {(data.tips || []).map((tip, index) => (
                                    <li key={index} className='!list-disc text-primary text-sm mb-2'>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'info' && (
                        <div className='mb-4'>
                            <ul className='pl-4'>
                                {(data.importantInfo || []).map((info, index) => (
                                    <li key={index} className='!list-disc text-primary text-sm mb-2'>{info}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Revenue Section */}
            {recipeData.readCount && (
                <div className='mt-8 border border-default-border rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-6'>
                    <div className='flex items-start gap-4'>
                        <div className='flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                            <MdAttachMoney className='text-green-600' size={24} />
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2 mb-2'>
                                <HiOutlineEye className='text-secondary' size={18} />
                                <span className='text-sm text-secondary font-medium'>
                                    {t('recipe.viewCount')}
                                </span>
                            </div>
                            <div className='text-2xl font-bold text-primary mb-1'>
                                {recipeData.readCount.toLocaleString(locale === 'en' ? 'en-US' : 'tr-TR')}
                            </div>
                            <div className='flex items-baseline gap-2 mt-3 pt-3 border-t border-green-200'>
                                <span className='text-sm text-secondary'>{t('recipe.revenuePerView')}</span>
                                <span className='text-sm font-semibold text-green-700'>0,10 ₺</span>
                            </div>
                            <div className='mt-2'>
                                <div className='text-sm text-secondary mb-1'>{t('recipe.averageRevenue')}</div>
                                <div className='text-3xl font-bold text-green-600'>
                                    {(recipeData.readCount * 0.10).toLocaleString(locale === 'en' ? 'en-US' : 'tr-TR', { 
                                        minimumFractionDigits: 2, 
                                        maximumFractionDigits: 2 
                                    })} ₺
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
