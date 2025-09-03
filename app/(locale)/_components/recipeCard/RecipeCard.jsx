import Title from '@/app/_components/title/Title'

import React from 'react'

import RecipeCardItem from './RecipeCardItem';
export default function RecipeCard() {
    const recipeDummyData = [
        {
            imageUrl: "/dummy/hamburger2.svg",
            tinyImageData: [
                {
                    imageUrl: "/dummy/hamburger3.svg",
                    imageTitle: "hamburger3",
                },
                {
                    imageUrl: "/dummy/hamburger4.svg",
                    imageTitle: "hamburger4",
                }
            ],
            surveyScore: 8.5,
            title: "Tavuklu Kaşarlı Alfredo",
            description: "Sizlere enfes bir tarif ile birlikte geldim. Bugün ki menümüzde Tavuklu Kaşarlı ...",
            categories: ["Türk yemek...", "Tavuk", "Akşam ye..."],
            bookMarkCount: 375,
            readCount: 1100,
            url: "/"
        },
        {
            imageUrl: "/dummy/hamburger2.svg",
            tinyImageData: [
                {
                    imageUrl: "/dummy/hamburger3.svg",
                    imageTitle: "hamburger3",
                },
                {
                    imageUrl: "/dummy/hamburger4.svg",
                    imageTitle: "hamburger4",
                }
            ],
            surveyScore: 5,
            title: "Tavuklu Kaşarlı Alfredo",
            description: "Sizlere enfes bir tarif ile birlikte geldim. Bugün ki menümüzde Tavuklu Kaşarlı ...",
            categories: ["Türk yemek...", "Tavuk", "Akşam ye..."],
            bookMarkCount: 375,
            readCount: 1100,
            url: "/"
        }
    ]
    return (
        <div className='mt-12'>
            <Title title={"Öne çıkanlar"} description={"En çok tercih edilen yemek tarifleri"} showMore={true} />
            <ul className='mt-6 flex gap-6'>
                {
                    recipeDummyData.map((data, index) => <RecipeCardItem key={index} data={data} />)
                }

            </ul>
        </div>
    )
}
