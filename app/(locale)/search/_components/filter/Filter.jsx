import React from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
export default function Filter() {
    return (
        <div className='filter'>
            <div className='flex justify-between items-center'>
                <div className='text-[20px] text-primary font-semibold'>Filtreler</div>
                <span className='text-sm text-main font-medium'>Temizle</span>
            </div>
            <div className='border-b border-weak-border py-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-base font-semibold text-primary'>Sıralama</div>
                        <HiOutlineChevronDown size={24} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='filter__radio-btn'>
                            <input type="radio" hidden name='custom-radio' />
                            <span>Popüler tarifler</span>
                        </label>
                        <label className='filter__radio-btn'>
                            <input type="radio" hidden name='custom-radio' />
                            <span>Yeni tarifler</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='border-b border-weak-border py-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-base font-semibold text-primary'>Yemek Puanı</div>
                        <HiOutlineChevronDown size={24} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                9 ve üzeri
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                8 ve üzeri
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                7 ve üzeri
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                6 ve üzeri
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='py-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-base font-semibold text-primary'>Kaç Kişilik</div>
                        <HiOutlineChevronDown size={24} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                1-2 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                2-4 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                4-6 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input type="checkbox" hidden />
                            <span>
                                6-8 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
