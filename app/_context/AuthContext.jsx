'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(null)

    // Sayfa yüklendiğinde localStorage'dan kontrol et
    useEffect(() => {
        const savedLoginStatus = localStorage.getItem('isLoggedIn')
        if (savedLoginStatus === 'true') {
            setIsLoggedIn(true)
        }
    }, [])

    const login = (email, password) => {
        // Test kullanıcı bilgileri
        if (email === 'test@test.com' && password === '123456') {
            setIsLoggedIn(true)
            localStorage.setItem('isLoggedIn', 'true')
            return true
        }
        return false
    }

    const logout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
    }

    return (
        <AuthContext.Provider value={{ 
            isLoggedIn, 
            login, 
            logout, 
            openLoginModal, 
            setOpenLoginModal 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

