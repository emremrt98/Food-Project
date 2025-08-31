import React from 'react'
import Container from '../container/Container'
import { GiKnifeFork } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
export default function SearchBox() {
    return (
        <div className='bg-[url(/search-bg.svg)] relative h-[375px] w-full bg-no-repeat bg-cover before:content-[""] before:absolute before:inset-0 before:bg-black/50'>
            <Container>
                <div className='relative flex flex-col justify-center gap-6 h-full'>
                    <div>
                        <h1 className='text-white text-[32px] leading-[38px] font-bold'>Foody ile lezzetli tarifleri bulun!</h1>
                        <p className='text-white text-base font-medium'>Ne yemek istiyorsunuz?</p>
                    </div>
                    <div className='bg-white rounded-[8px] p-4 flex justify-between items-center'>
                        <div className='flex items-center gap-4 flex-1'>
                            <div>
                                <GiKnifeFork size={32} className='text-primary' />
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <span className='text-sm text-secondary font-normal'>Ne yemek istiyorsun?</span>
                                <input className='outline-none text-base text-primary font-medium placeholder:text-primary placeholder:text-base placeholder:font-medium' name='autocomplete' placeholder='Hamburger, pizza, kebap veya lahmacun arayın' type="text" />
                            </div>
                        </div>
                        <div>
                            <button className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>Yemekleri Listele</button>
                        </div>
                    </div>
                    <div>
                        <div className='text-white text-base font-medium mb-3'>Son Aramalar</div>
                        <ul className='flex gap-3 items-center'>
                            <li className='flex gap-2 items-center bg-white px-4 py-3 rounded-[8px] cursor-pointer'>
                                <span className='text-sm font-normal text-primary'>Lahmacun</span>
                                <CgClose size={16} className='text-primary' />
                            </li>
                            <li className='flex gap-2 items-center bg-white px-4 py-3 rounded-[8px] cursor-pointer'>
                                <span className='text-sm font-normal text-primary'>Hamburger</span>
                                <CgClose size={16} className='text-primary' />
                            </li>
                            <li className='flex gap-2 items-center bg-white px-4 py-3 rounded-[8px] cursor-pointer'>
                                <span className='text-sm font-normal text-primary'>Döner</span>
                                <CgClose size={16} className='text-primary' />
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}
