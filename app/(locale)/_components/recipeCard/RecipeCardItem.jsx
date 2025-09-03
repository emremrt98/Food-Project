'use client'
import React, { useEffect, useState } from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
import Image from 'next/image'
import Link from 'next/link';


export default function RecipeCardItem({ data: { imageUrl, tinyImageData, surveyScore, title, description, categories, bookMarkCount, readCount, url } }) {
    const [surveyScoreText, setSurveyScoreText] = useState("");
    useEffect(() => {
        if (surveyScore > 9) {
            setSurveyScoreText("Mükemmel");
        } else if (surveyScore > 8) {
            setSurveyScoreText("Çok iyi");
        } else if (surveyScore > 7) {
            setSurveyScoreText("İyi");
        } else if (surveyScore > 6) {
            setSurveyScoreText("Ortalama");
        }
    }, [])

    return (
        <li className='border border-default-border rounded-[8px]'>
            <div className='flex gap-4'>
                <div className='flex gap-[1px]'>
                    <div>
                        <figure>
                            <Image src={imageUrl} width={150} height={200} alt={title} />
                        </figure>
                    </div>
                    <div>
                        <figure className='flex flex-col gap-[1px]'>

                            {
                                tinyImageData.map((tinyImage, index) => (
                                    <Image key={index} src={tinyImage.imageUrl} width={150} height={200} alt={tinyImage.imageTitle} />
                                ))
                            }
                        </figure>
                    </div>
                </div>
                <div className='py-4 pr-4'>
                    {
                        surveyScore > 6 && <div className='flex items-center gap-4'>
                            <span className='bg-box rounded-full text-primary text-sm font-medium px-4 py-3'>{surveyScore}</span>
                            <span className='text-primary text-sm'>{surveyScoreText}</span>
                        </div>
                    }
                    <div className='mt-3'>
                        <div className='text-primary text-base font-medium'>{title}</div>
                        <p className='mt-1 text-secondary text-sm font-normal'>{description}</p>
                    </div>
                    <ul className='flex gap-3 items-center mt-6'>
                        {
                            categories.map((category, index) => (
                                <li key={index} className='bg-box text-primary text-sm px-4 py-3 rounded-[4px]'>{category}</li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <div className='px-4 py-6 flex justify-between items-center'>
                <div>
                    <div className='flex items-center gap-1'>
                        <BsFillInfoCircleFill size={16} className='text-primary' />
                        <span className='text-sm text-primary'>{readCount} kişi tarafından okundu</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <TiHeartFullOutline size={16} className='text-primary' />
                        <span className='text-sm text-primary'>{bookMarkCount} kişi tarafından kaydedildi</span>
                    </div>
                </div>
                <div>
                    <Link href={url} className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>Tarifi İncele</Link>
                </div>
            </div>
        </li>
    )
}
