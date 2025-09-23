import Container from '@/app/_components/container/Container';
import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import Header from './_components/Header';
import Content from './_components/Content';
export default async function OnePage({ params }) {
    const { slug, subslug } = await params;

    return (
        <Container>
            <div className='flex gap-1 items-center mt-3'>
                <span className='text-secondary text-sm'>Foody.com</span>
                <HiOutlineChevronRight className='text-secondary text-sm' />
                <span className='text-secondary text-sm'>{slug}</span>
                <HiOutlineChevronRight className='text-secondary text-sm' />
                <span className='text-primary text-sm'>{subslug}</span>
            </div>
            <div className='mt-6'>
                <div className='flex gap-6'>
                    <div className='flex-1'>
                        <Header />
                        <Content />
                    </div>
                    <div className='basis-[320px] py-3 px-4'>
                        <div className='text-primary text-base font-medium mb-3'>İçerik</div>
                        <div className='text-sm text-primary font-semibold mb-2'>Yemek resimleri</div>
                        <div className='text-sm text-primary mb-2'>Malzemeler</div>
                        <div className='text-sm text-primary mb-2'>Yapılışı</div>
                        <div className='text-sm text-primary mb-2'>Servis önerisi</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
