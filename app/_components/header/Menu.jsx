'use client'
import React, { useState } from 'react'
import { TbMenu2 } from "react-icons/tb";
import MenuContainer from './MenuContainer';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import useClickOutside from '@/app/_hooks/useClickOutside';
import { useAuth } from '@/app/_context/AuthContext';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Menu() {
    const { isLoggedIn, openLoginModal, setOpenLoginModal } = useAuth();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const menuRef = useClickOutside(() => setIsOpen(false));

    // Context'ten gelen openLoginModal değişikliklerini dinle
    React.useEffect(() => {
        if (openLoginModal) {
            setIsLoginModalOpen(true);
            setOpenLoginModal(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openLoginModal]);

    const handleSetOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleOpenLogin = () => {
        setIsLoginModalOpen(true);
    }

    const handleOpenRegister = () => {
        setIsRegisterModalOpen(true);
    }

    const handleCloseLogin = () => {
        setIsLoginModalOpen(false);
    }

    const handleCloseRegister = () => {
        setIsRegisterModalOpen(false);
    }

    return (
        <>
            <div ref={menuRef}>
                <div className='px-4 py-3 flex gap-4 border rounded-full border-default-border hover:bg-gray-50 cursor-pointer' onClick={handleSetOpen}>
                    <TbMenu2 size={24} className='text-primary' />
                    <span className='text-primary text-base font-medium'>{isLoggedIn ? t('header.menu') : t('header.login')}</span>
                </div>

                {
                    isOpen && (
                        <MenuContainer 
                            setIsOpen={setIsOpen} 
                            onOpenLogin={handleOpenLogin}
                            onOpenRegister={handleOpenRegister}
                        />
                    )
                }
            </div>

            <LoginModal 
                isOpen={isLoginModalOpen}
                onClose={handleCloseLogin}
                onSwitchToRegister={handleOpenRegister}
            />

            <RegisterModal 
                isOpen={isRegisterModalOpen}
                onClose={handleCloseRegister}
                onSwitchToLogin={handleOpenLogin}
            />
        </>
    )
}
