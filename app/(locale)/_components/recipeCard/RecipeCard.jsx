import Title from '@/app/_components/title/Title'
import Image from 'next/image'
import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
export default function RecipeCard() {
    return (
        <div className='mt-12'>
            <Title title={"Öne çıkanlar"} description={"En çok tercih edilen yemek tarifleri"} showMore={true} />
            <ul className='mt-6 flex gap-6'>
                <li className='border border-default-border rounded-[8px]'>
                    <div className='flex gap-4'>
                        <div className='flex gap-[1px]'>
                            <div>
                                <figure>
                                    <Image src={"/dummy/hamburger2.svg"} width={150} height={200} alt='hamburger2' />
                                </figure>
                            </div>
                            <div>
                                <figure className='flex flex-col gap-[1px]'>
                                    <Image src={"/dummy/hamburger3.svg"} width={150} height={200} alt='hamburger3' />
                                    <Image src={"/dummy/hamburger4.svg"} width={150} height={200} alt='hamburger4' />
                                </figure>
                            </div>
                        </div>
                        <div className='py-4 pr-4'>
                            <div className='flex items-center gap-4'>
                                <span className='bg-box rounded-full text-primary text-sm font-medium px-4 py-3'>9.6</span>
                                <span className='text-primary text-sm'>Mükemmel</span>
                            </div>
                            <div className='mt-3'>
                                <div className='text-primary text-base font-medium'>Tavuklu Kaşarlı Alfredo</div>
                                <p className='mt-1 text-secondary text-sm font-normal'>Sizlere enfes bir tarif ile birlikte geldim. Bugün ki menümüzde Tavuklu Kaşarlı ...</p>
                            </div>
                            <ul className='flex gap-3 items-center mt-6'>
                                <li className='bg-box text-primary text-sm px-4 py-3 rounded-[4px]'>Türk yemek...</li>
                                <li className='bg-box text-primary text-sm px-4 py-3 rounded-[4px]'>Tavuk</li>
                                <li className='bg-box text-primary text-sm px-4 py-3 rounded-[4px]'>Akşam ye...</li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-4 py-6 flex justify-between items-center'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <BsFillInfoCircleFill size={16} className='text-primary' />
                                <span className='text-sm text-primary'>1.100 kişi tarafından okundu</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <TiHeartFullOutline size={16} className='text-primary' />
                                <span className='text-sm text-primary'>375 kişi tarafından kaydedildi</span>
                            </div>
                        </div>
                        <div>
                            <button className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>Tarifi İncele</button>
                        </div>
                    </div>
                </li>
                <li className='border border-default-border rounded-[8px]'>
                    <div className='flex gap-4'>
                        <div className='flex gap-[1px]'>
                            <div>
                                <figure>
                                    <Image src={"/dummy/hamburger2.svg"} width={150} height={200} alt='hamburger2' />
                                </figure>
                            </div>
                            <div>
                                <figure className='flex flex-col gap-[1px]'>
                                    <Image src={"/dummy/hamburger3.svg"} width={150} height={200} alt='hamburger3' />
                                    <Image src={"/dummy/hamburger4.svg"} width={150} height={200} alt='hamburger4' />
                                </figure>
                            </div>
                        </div>
                        <div className='py-4 pr-4'>
                            <div className='flex items-center gap-4'>
                                <span className='bg-box rounded-full text-primary text-sm font-medium px-4 py-3'>9.6</span>
                                <span className='text-primary text-sm'>Mükemmel</span>
                            </div>
                            <div className='mt-3'>
                                <div className='text-primary text-base font-medium'>Tavuklu Kaşarlı Alfredo</div>
                                <p className='mt-1 text-secondary text-sm font-normal'>Sizlere enfes bir tarif ile birlikte geldim. Bugün ki menümüzde Tavuklu Kaşarlı ...</p>
                            </div>
                            <ul className='flex gap-3 items-center mt-6'>
                                <li className='bg-box text-primary text-sm px-4 py-3 rounded-[4px]'>Türk yemek...</li>
                                <li className='bg-box text-primary text-sm px-4 py-3 rounded-[4px]'>Tavuk</li>
                                <li className='bg-box text-primary text-sm px-4 py-3 rounded-[4px]'>Akşam ye...</li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-4 py-6 flex justify-between items-center'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <BsFillInfoCircleFill size={16} className='text-primary' />
                                <span className='text-sm text-primary'>1.100 kişi tarafından okundu</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <TiHeartFullOutline size={16} className='text-primary' />
                                <span className='text-sm text-primary'>375 kişi tarafından kaydedildi</span>
                            </div>
                        </div>
                        <div>
                            <button className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>Tarifi İncele</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
