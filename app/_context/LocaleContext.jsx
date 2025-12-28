'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

const LocaleContext = createContext()

const LOCALE_STORAGE_KEY = 'app_locale'

export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState('tr')

    // Load locale from localStorage on mount
    useEffect(() => {
        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
        if (savedLocale && (savedLocale === 'tr' || savedLocale === 'en')) {
            setLocale(savedLocale)
        }
    }, [])

    const changeLocale = (newLocale) => {
        if (newLocale === 'tr' || newLocale === 'en') {
            setLocale(newLocale)
            localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
        }
    }

    return (
        <LocaleContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LocaleContext.Provider>
    )
}

export function useLocale() {
    const context = useContext(LocaleContext)
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider')
    }
    return context
}

