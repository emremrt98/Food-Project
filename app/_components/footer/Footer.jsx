import React from 'react'
import Container from '../container/Container'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
export default function Footer() {
  return (
    <div className='bg-main w-full h-[450px] mt-[100px]'>
      <Container>
        <div className='py-6'>
          <div className='text-white text-2xl font-medium'>Foody</div>
          <div className='mt-4 flex justify-between'>
            <div className='flex flex-col gap-2'>
              <div className='text-base text-white font-medium'>Kategoriler</div>
              <div className='text-base text-white font-normal'>Tümü</div>
              <div className='text-base text-white font-normal'>Tatlılar</div>
              <div className='text-base text-white font-normal'>Hamur İşleri</div>
              <div className='text-base text-white font-normal'>Et Yemekleri</div>
              <div className='text-base text-white font-normal'>Sebze Yemekleri</div>
              <div className='text-base text-white font-normal'>Çorba</div>
              <div className='text-base text-white font-normal'>İçecekler</div>
              <div className='text-base text-white font-normal'>Makarnalar</div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-base text-white font-medium'>Kurumsal</div>
              <div className='text-base text-white font-normal'>Hakkımızda</div>
              <div className='text-base text-white font-normal'>Üyelik Sözleşmesi</div>
              <div className='text-base text-white font-normal'>Aydınlatma Metni</div>
              <div className='text-base text-white font-normal'>Kullanım Koşulları</div>
              <div className='text-base text-white font-normal'>Çerez Politikası</div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-base text-white font-medium'>Destek</div>
              <div className='text-base text-white font-normal'>İletişim</div>
              <div className='text-base text-white font-normal'>Sıkça Sorulan Sorular</div>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div className='text-base text-white font-medium'>İletişim</div>
                <div className='text-base text-white font-normal flex gap-2 items-center'>
                  <FaPhoneAlt size={24} className='text-white' />
                  <span>0212 909 89 91</span>
                </div>
                <div className='text-base text-white font-normal flex gap-2 items-center'>
                  <IoMail size={24} className='text-white' />
                  <span>info@foody.com</span>
                </div>
              </div>
              <div>
                <div className='text-base text-white font-medium'>İletişim</div>
                <div className='mt-2 flex gap-3 items-center'>
                  <div><ImLinkedin size={28} className='text-white' /></div>
                  <div><AiFillInstagram size={36} className='text-white' /></div>
                  <div><PiYoutubeLogoFill size={36} className='text-white' /></div>
                  <div><RiTwitterXLine size={32} className='text-white' /></div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t border-white mt-8'>
            <div className='text-white text-sm text-center mt-4'>© 2025, Tüm Hakları Yemek Tarifim tarafından saklıdır.</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
