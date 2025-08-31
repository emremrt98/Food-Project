import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryItem({ data: { title, imageUrl, count, url } }) {
    console.log(title)
    return (
        <Link href={url} className='flex flex-col items-center gap-3'>

            <figure className='border rounded-full p-1 border-weak-border'>
                <Image src={imageUrl} width={120} height={120} alt='hamburger' />
            </figure>

            <div className='text-center'>
                <div className='text-base text-primary font-medium'>{title}</div>
                <span className='mt-1 text-sm text-secondary font-normal'>{count} adet tarif bulunmaktadır.</span>
            </div>
        </Link>
    )
}
