import Title from '@/app/_components/title/Title'
import Image from 'next/image'
import React from 'react'

export default function Blogs() {
  return (
    <div className='mt-12'>
      <Title title={"Yemek blogları"} description={"Blogları okuyarak yemek kültürünüzü ilerletin"} />
      <div className='mt-6 flex gap-4'>
        <div className='flex-1'>
          <figure>
            <Image className='w-full' src={"/blog/resim1.svg"} width={630} height={314} alt='resim1' />
          </figure>
          <div className='mt-4'>
            <div className='text-base text-primary font-medium '>Biberiyenin Faydaları Nelerdir?</div>
            <p className='text-secondary text-sm mt-2'>
              Biberiye Ne İşe Yarar? Biberiye (Rosmarinus officinalis), hafızayı güçlendirmeden saç sağlığını desteklemeye kadar pek çok alanda olumlu etkileri
              bulunmaktadır. Hem yapraklarından elde edilen yağ hem de çay olarak tüketilebilen biberiye, genel sağlığı iyileştirme potansiyelin...
            </p>
            <div className='mt-4'>
              <button className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>Detaylı Bilgi</button>
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <div className='flex  gap-4 flex-1'>
            <figure className='w-full'>
              <Image className='w-full' src={"/blog/resim2.svg"} width={250} height={250} alt='resim2' />
            </figure>
            <div>
              <div className='text-base text-primary font-medium'>Kırmızı Kantaron Yağı Faydaları Nelerdir?</div>
              <p className='text-secondary text-sm'>Biberiye Ne İşe Yarar? Biberiye (Rosmarinus officinalis), hafızayı güçlendirmeden saç sağlığını desteklemeye kadar pek çok ...</p>
            </div>
          </div>
          <div className='flex  gap-4 flex-1'>
            <figure className='w-full'>
              <Image className='w-full' src={"/blog/resim3.svg"} width={305} height={162} alt='resim3' />
            </figure>
            <div>
              <div className='text-base text-primary font-medium'>En İyi C Vitamini Serum Markaları</div>
              <p className='text-secondary text-sm'>Biberiye Ne İşe Yarar? Biberiye (Rosmarinus officinalis), hafızayı güçlendirmeden saç sağlığını desteklemeye kadar pek çok ...</p>
            </div>
          </div>
          <div className='flex  gap-4 flex-1'>
            <figure className='w-full'>
              <Image className='w-full' src={"/blog/resim4.svg"} width={305} height={162} alt='resim4' />
            </figure>
            <div>
              <div className='text-base text-primary font-medium'>Tatlı Badem Yağı Faydaları, Ne İşe Yarar?</div>
              <p className='text-secondary text-sm'>Biberiye Ne İşe Yarar? Biberiye (Rosmarinus officinalis), hafızayı güçlendirmeden saç sağlığını desteklemeye kadar pek çok ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
