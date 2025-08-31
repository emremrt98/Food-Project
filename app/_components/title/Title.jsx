import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Title({ title, description, showMore = false }) {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='text-primary text-[29px] font-bold'>{title}</h2>
                <p className='mt-1 text-secondary text-base font-normal'>{description}</p>
            </div>
            {
                showMore
                &&
                <div>
                    <Link href={'/'} className='flex items-center gap-2'>
                        <span className='text-main text-base font-medium'>Tümünü Gör</span>
                        <IoIosArrowRoundForward size={16} className='text-main' />
                    </Link>
                </div>
            }
        </div>
    )
}
