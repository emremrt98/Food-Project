import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between items-start'>
            <div>
                <h1 className='text-3xl text-primary font-bold mb-[2px]'>Soslu Tavuk Tarifi</h1>
                <p className='text-base text-secondary'>Yazar : Emre Mert</p>
            </div>
            <div className='flex gap-1 items-center'>
                <span className='text-base text-primary font-medium'>Mükemmel</span>
                <div className='px-4 py-2 bg-main rounded-[8px] text-white text-base font-medium'>9.2</div>
            </div>
        </div>
    )
}
