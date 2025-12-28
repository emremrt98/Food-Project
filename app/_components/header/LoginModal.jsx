'use client'
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useAuth } from '@/app/_context/AuthContext';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
    const { login } = useAuth();
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        const success = login(formData.email, formData.password);
        if (success) {
            setFormData({ email: '', password: '' });
            onClose();
        } else {
            setError(t('login.error'));
        }
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
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-weak-border">
                    <h2 className="text-2xl font-bold text-primary">{t('login.title')}</h2>
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
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                                {t('login.email')}
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
                                {t('login.password')}
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
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm text-main hover:underline"
                            >
                                {t('login.forgotPassword')}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-main text-white py-3 rounded-lg font-medium hover:bg-[#8B000F] transition-colors"
                        >
                            {t('login.submit')}
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="px-6 pb-6 border-t border-weak-border pt-4">
                    <p className="text-center text-sm text-secondary">
                        {t('login.noAccount')}{' '}
                        <button
                            onClick={() => {
                                onClose();
                                onSwitchToRegister();
                            }}
                            className="text-main font-medium hover:underline"
                        >
                            {t('login.registerLink')}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

