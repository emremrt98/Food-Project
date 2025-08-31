import Title from '@/app/_components/title/Title'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function Categories() {

    const dummyCategoryData = [
        {
            title: "Hamburger",
            imageUrl: "/dummy/hamburger.svg",
            url: "/",
            count: 120,
        },
        {
            title: "Döner",
            imageUrl: "/dummy/hamburger.svg",
            url: "/",
            count: 60,
        },
        {
            title: "Lahmacun",
            imageUrl: "/dummy/hamburger.svg",
            url: "/favorilerim",
            count: 80,
        },
        {
            title: "Pizza",
            imageUrl: "/dummy/hamburger.svg",
            url: "/",
            count: 32,
        },
        {
            title: "Pizza",
            imageUrl: "/dummy/hamburger.svg",
            url: "/",
            count: 32,
        },
    ]

    return (
        <div className='mt-12'>
            <Title title={"En çok tercih edilenler"} description={"En çok tercih edilen kategoriler"} showMore={true} />

            <div className='flex items-center gap-3 mt-6'>
                {
                    dummyCategoryData.map((data, index) => (
                        <CategoryItem data={data} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
