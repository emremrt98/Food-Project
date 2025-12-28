'use client'
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert(t('register.passwordMismatch'));
            return;
        }
        // Register logic here
        console.log('Register:', formData);
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-weak-border sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold text-primary">{t('register.title')}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <IoClose size={24} className="text-primary" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                                {t('register.name')}
                            </label>
                            <div className="relative">
                                <HiOutlineUser 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" 
                                    size={20} 
                                />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Adınız Soyadınız"
                                    className="w-full pl-10 pr-4 py-3 border border-default-border rounded-lg focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                                {t('register.email')}
                            </label>
                            <div className="relative">
                                <HiOutlineMail 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" 
                                    size={20} 
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ornek@email.com"
                                    className="w-full pl-10 pr-4 py-3 border border-default-border rounded-lg focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                                {t('register.password')}
                            </label>
                            <div className="relative">
                                <HiOutlineLockClosed 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" 
                                    size={20} 
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 border border-default-border rounded-lg focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                                {t('register.confirmPassword')}
                            </label>
                            <div className="relative">
                                <HiOutlineLockClosed 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" 
                                    size={20} 
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 border border-default-border rounded-lg focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-secondary">
                                {t('register.terms')}
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-main text-white py-3 rounded-lg font-medium hover:bg-[#8B000F] transition-colors"
                        >
                            {t('register.submit')}
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="px-6 pb-6 border-t border-weak-border pt-4">
                    <p className="text-center text-sm text-secondary">
                        {t('register.hasAccount')}{' '}
                        <button
                            onClick={() => {
                                onClose();
                                onSwitchToLogin();
                            }}
                            className="text-main font-medium hover:underline"
                        >
                            {t('register.loginLink')}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

