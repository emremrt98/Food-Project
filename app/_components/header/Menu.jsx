'use client'
import React, { useState } from 'react'
import { TbMenu2 } from "react-icons/tb";
import MenuContainer from './MenuContainer';
import useClickOutside from '@/app/_hooks/useClickOutside';

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useClickOutside(() => setIsOpen(false));

    const handleSetOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div ref={menuRef}>
            <div className='px-4 py-3 flex gap-4 border rounded-full border-default-border hover:bg-gray-50 cursor-pointer' onClick={handleSetOpen}>
                <TbMenu2 size={24} className='text-primary' />
                <span className='text-primary text-base font-medium'>Giriş Yap</span>
            </div>

            {
                isOpen && <MenuContainer setIsOpen={setIsOpen} />

            }

        </div>
    )
}
