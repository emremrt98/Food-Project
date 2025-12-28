"use client"
import React, { useState, useEffect } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Filter({ slug }) {
    const { t } = useTranslation();
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Filtre state'leri
    const [sortBy, setSortBy] = useState(searchParams.get('sort') || '');
    const [minScore, setMinScore] = useState(searchParams.get('score') || '');
    const [servings, setServings] = useState(searchParams.get('servings')?.split(',') || []);

    // URL'den gelen parametreleri yükle
    useEffect(() => {
        setSortBy(searchParams.get('sort') || '');
        setMinScore(searchParams.get('score') || '');
        const servingsParam = searchParams.get('servings');
        setServings(servingsParam ? servingsParam.split(',') : []);
    }, [searchParams]);

    const handleSortChange = (value) => {
        setSortBy(value);
    };

    const handleScoreChange = (value) => {
        setMinScore(value);
    };

    const handleServingChange = (value, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setServings(prev => {
            if (prev.includes(value)) {
                return prev.filter(s => s !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const handleApply = () => {
        const params = new URLSearchParams();
        
        if (sortBy) {
            params.set('sort', sortBy);
        }
        if (minScore) {
            params.set('score', minScore);
        }
        if (servings.length > 0) {
            params.set('servings', servings.join(','));
        }
        
        const queryString = params.toString();
        const url = queryString ? `/search/${slug}?${queryString}` : `/search/${slug}`;
        router.push(url);
    };

    const handleClear = () => {
        setSortBy('');
        setMinScore('');
        setServings([]);
        router.push(`/search/${slug}`);
    };

    return (
        <div className='filter'>
            <div className='flex justify-between items-center'>
                <div className='text-[20px] text-primary font-semibold'>{t('filter.title')}</div>
                <span onClick={handleClear} className='text-sm text-main font-medium cursor-pointer'>{t('filter.clear')}</span>
            </div>
            <div className='border-b border-weak-border py-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-base font-semibold text-primary'>{t('filter.sortTitle')}</div>
                        <HiOutlineChevronDown size={24} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='filter__radio-btn' onClick={() => handleSortChange('popular')}>
                            <input type="radio" hidden name='custom-radio' checked={sortBy === 'popular'} onChange={() => {}} />
                            <span>{t('filter.popular')}</span>
                        </label>
                        <label className='filter__radio-btn' onClick={() => handleSortChange('new')}>
                            <input type="radio" hidden name='custom-radio' checked={sortBy === 'new'} onChange={() => {}} />
                            <span>{t('filter.new')}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='border-b border-weak-border py-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-base font-semibold text-primary'>{t('filter.scoreTitle')}</div>
                        <HiOutlineChevronDown size={24} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='filter__radio-btn' onClick={() => handleScoreChange('9')}>
                            <input type="radio" hidden name='point-radio-btn' checked={minScore === '9'} onChange={() => {}} />
                            <span>9 {t('filter.scoreAndAbove')}</span>
                        </label>
                        <label className='filter__radio-btn' onClick={() => handleScoreChange('8')}>
                            <input type="radio" hidden name='point-radio-btn' checked={minScore === '8'} onChange={() => {}} />
                            <span>8 {t('filter.scoreAndAbove')}</span>
                        </label>
                        <label className='filter__radio-btn' onClick={() => handleScoreChange('7')}>
                            <input type="radio" hidden name='point-radio-btn' checked={minScore === '7'} onChange={() => {}} />
                            <span>7 {t('filter.scoreAndAbove')}</span>
                        </label>
                        <label className='filter__radio-btn' onClick={() => handleScoreChange('6')}>
                            <input type="radio" hidden name='point-radio-btn' checked={minScore === '6'} onChange={() => {}} />
                            <span>6 {t('filter.scoreAndAbove')}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='py-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-base font-semibold text-primary'>{t('filter.servingsTitle')}</div>
                        <HiOutlineChevronDown size={24} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className={`filter__checkbox-btn ${servings.includes('1-2') ? 'filter__checkbox-btn--checked' : ''}`} onClick={(e) => handleServingChange('1-2', e)}>
                            <input type="checkbox" hidden checked={servings.includes('1-2')} onChange={(e) => handleServingChange('1-2', e)} />
                            <span>
                                {t('filter.servings1-2')}
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className={`filter__checkbox-btn ${servings.includes('2-4') ? 'filter__checkbox-btn--checked' : ''}`} onClick={(e) => handleServingChange('2-4', e)}>
                            <input type="checkbox" hidden checked={servings.includes('2-4')} onChange={(e) => handleServingChange('2-4', e)} />
                            <span>
                                {t('filter.servings2-4')}
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className={`filter__checkbox-btn ${servings.includes('4-6') ? 'filter__checkbox-btn--checked' : ''}`} onClick={(e) => handleServingChange('4-6', e)}>
                            <input type="checkbox" hidden checked={servings.includes('4-6')} onChange={(e) => handleServingChange('4-6', e)} />
                            <span>
                                {t('filter.servings4-6')}
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className={`filter__checkbox-btn ${servings.includes('6-8') ? 'filter__checkbox-btn--checked' : ''}`} onClick={(e) => handleServingChange('6-8', e)}>
                            <input type="checkbox" hidden checked={servings.includes('6-8')} onChange={(e) => handleServingChange('6-8', e)} />
                            <span>
                                {t('filter.servings6-8')}
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <button onClick={handleClear} className='w-full border border-main text-main text-base font-medium px-4 py-3 rounded-[8px] hover:bg-main/5 transition-colors'>{t('filter.clear')}</button>
                </div>
                <div className='flex-1'>
                    <button onClick={handleApply} className='w-full border border-main text-white bg-main text-base font-medium px-4 py-3 rounded-[8px] hover:bg-main/90 transition-colors'>{t('filter.apply')}</button>
                </div>
            </div>
        </div>
    )
}
