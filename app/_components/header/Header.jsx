import Image from 'next/image'
import React from 'react'
import { TbWorld, TbMenu2 } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Link from 'next/link';
export default function Header() {
    return (
        <div>
            <div className='flex items-center justify-end gap-3 border-b border-weak-border py-1'>
                <Link href={"/destek"} className='flex items-center gap-1 p-2'>
                    <IoHelpBuoyOutline />
                    <span>Destek Al</span>
                </Link>
                <Link href={"/iletisim"} className='flex items-center gap-1 p-2'>
                    <FiPhone />
                    <span>İletişim</span>
                </Link>
            </div>
            <div className='flex items-center justify-between py-4'>
                <figure>
                    <Image src={"/logo.svg"} width={121} height={43} alt='logo' />
                </figure>
                <nav>
                    <ul className='flex items-center gap-3'>
                        <Link href={"/"} className='px-4 text-white text-base font-medium py-3 rounded-full bg-main'>Ana Sayfa</Link>
                        <Link href={"/tariflerim"} className='px-4 text-primary text-base font-medium py-3 rounded-full'>Tariflerim</Link>
                        <Link href={"/favorilerim"} className='px-4 text-primary text-base font-medium py-3 rounded-full'>Favorilerim</Link>
                    </ul>
                </nav>
                <div className='flex gap-3 items-center'>
                    <div className='px-4 py-3 flex gap-1'>
                        <TbWorld size={24} className='text-primary' />
                        <span className='text-primary text-base font-medium'>Türkçe</span>
                    </div>
                    <div className='px-4 py-3 flex gap-4 border rounded-full border-default-border'>
                        <TbMenu2 size={24} className='text-primary' />
                        <span className='text-primary text-base font-medium'>Giriş Yap</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
