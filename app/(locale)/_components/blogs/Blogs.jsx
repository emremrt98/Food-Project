'use client'
import Title from '@/app/_components/title/Title'
import Image from 'next/image'
import React from 'react'
import { blogsData } from '@/app/_dummydata/blogs'
import { useTranslation } from '@/app/_hooks/useTranslation'

export default function Blogs() {
  const { t } = useTranslation();
  const mainBlog = blogsData[0];
  const sideBlogs = blogsData.slice(1);

  return (
    <div className='mt-12'>
      <Title title={t('blogs.title')} description={t('blogs.description')} />
      <div className='mt-6 flex gap-4'>
        <div className='flex-1'>
          <figure>
            <Image className='w-full' src={mainBlog.imageUrl} width={630} height={314} alt={mainBlog.title} />
          </figure>
          <div className='mt-4'>
            <div className='text-base text-primary font-medium '>{mainBlog.title}</div>
            <p className='text-secondary text-sm mt-2'>
              {mainBlog.description}
            </p>
            <div className='mt-4'>
              <button className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>{t('blogs.detailButton')}</button>
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          {sideBlogs.map((blog, index) => (
            <div key={blog.id} className='flex  gap-4 flex-1'>
              <figure className='w-full'>
                <Image className='w-full' src={blog.imageUrl} width={index === 0 ? 250 : 305} height={index === 0 ? 250 : 162} alt={blog.title} />
              </figure>
              <div>
                <div className='text-base text-primary font-medium'>{blog.title}</div>
                <p className='text-secondary text-sm'>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
