'use client'

import React, { useReducer } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const filterReducer = (state, action) => {
    switch (action.type) {
        case "Set_Filter":
            return {
                ...state,
                [action.payload.name]: action.payload.val,
            }

        case "Clear_Filter":
            return {
                recipes: null,
                foodPoint: null,
                servingSizes: null
            }
    }
}

export default function Filter() {

    const [state, dispatch] = useReducer(filterReducer, {
        recipes: null,
        foodPoint: null,
        servingSizes: null
    });

    const handleChangeFilter = (event) => {
        const name = event.target.name;
        const val = event.target.dataset.val;
        dispatch({
            type: "Set_Filter",
            payload: {
                name,
                val
            }
        })
    }

    const applyFilter = () => {
        console.log("State değeri : ", state)
    }

    const clearFilter = () => {
        dispatch({
            type: "Clear_Filter",
        })
        console.log("State değerleri temizlendi : ", state)
    }
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
                            <input onChange={handleChangeFilter} type="radio" hidden data-val="popular-recipes" name='recipes' />
                            <span>Popüler tarifler</span>
                        </label>
                        <label className='filter__radio-btn'>
                            <input onChange={handleChangeFilter} type="radio" hidden data-val="new-recipes" name='recipes' />
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
                        <label className='filter__radio-btn'>
                            <input onChange={handleChangeFilter} type="radio" hidden data-val="9+" name='foodPoint' />
                            <span>
                                9 ve üzeri
                            </span>
                        </label>
                        <label className='filter__radio-btn'>
                            <input onChange={handleChangeFilter} type="radio" hidden data-val="8+" name='foodPoint' />
                            <span>
                                8 ve üzeri
                            </span>
                        </label>
                        <label className='filter__radio-btn'>
                            <input onChange={handleChangeFilter} type="radio" hidden data-val="7+" name='foodPoint' />
                            <span>
                                7 ve üzeri
                            </span>
                        </label>
                        <label className='filter__radio-btn'>
                            <input onChange={handleChangeFilter} type="radio" hidden data-val="6+" name='foodPoint' />
                            <span>
                                6 ve üzeri
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
                            <input onChange={handleChangeFilter} data-val="1-2" name='servingSizes' type="checkbox" hidden />
                            <span>
                                1-2 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input onChange={handleChangeFilter} data-val="2-4" name='servingSizes' type="checkbox" hidden />
                            <span>
                                2-4 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input onChange={handleChangeFilter} data-val="4-6" name='servingSizes' type="checkbox" hidden />
                            <span>
                                4-6 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                        <label className='filter__checkbox-btn'>
                            <input onChange={handleChangeFilter} data-val="6-8" name='servingSizes' type="checkbox" hidden />
                            <span>
                                6-8 kişilik
                                <FaCheck size={13} className='filter__checkbox-btn__icon' />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <button onClick={clearFilter} className='cursor-pointer w-full border border-main text-main text-base font-medium px-4 py-3 rounded-[8px]'>Temizle</button>
                </div>
                <div className='flex-1'>
                    <button onClick={applyFilter} className='cursor-pointer w-full border border-main text-white bg-main text-base font-medium px-4 py-3 rounded-[8px]'>Uygula</button>
                </div>
            </div>
        </div>
    )
}
