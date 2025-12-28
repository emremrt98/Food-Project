'use client'
import React, { useEffect } from 'react'
import Container from '@/app/_components/container/Container'
import { profileData } from '@/app/_dummydata/profile'
import LeftColumn from './_components/LeftColumn'
import RightColumn from './_components/RightColumn'
import { useAuth } from '@/app/_context/AuthContext'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  return (
    <Container>
      <div className='mt-12 mb-12'>
        <div className='flex gap-6'>
          <div className='basis-[420px]'>
            <LeftColumn data={profileData} />
          </div>
          <div className='flex-1'>
            <RightColumn data={profileData} />
          </div>
        </div>
      </div>
    </Container>
  )
}

