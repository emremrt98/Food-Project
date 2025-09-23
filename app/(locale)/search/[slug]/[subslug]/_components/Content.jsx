import Image from 'next/image'
import React from 'react'

export default function Content() {
    return (
        <div className='mt-6'>
            <div className='flex gap-[1px]'>
                <figure>
                    <Image src={"/onePage/image1.svg"} width={472} height={417} alt='image1' />
                </figure>
                <div className='flex flex-col gap-[1px]'>
                    <figure>
                        <Image src={"/onePage/image2.svg"} width={471} height={208} alt='image1' />
                    </figure>
                    <figure>
                        <Image src={"/onePage/image3.svg"} width={471} height={208} alt='image1' />
                    </figure>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex  gap-6 items-center border-b border-weak-border pb-2'>
                    <label className='text-sm font-semibold text-primary relative before:content-[""] before:absolute before:-bottom-[8px] before:z-10 before:w-full before:border-b before:border-text-primary'>Genel Bakış</label>
                    <label className='text-sm font-normal text-primary'>Püf Noktalar</label>
                    <label className='text-sm font-normal text-primary'>Önemli Bilgiler</label>
                </div>
                <div className='mt-6'>
                    <p className='text-sm text-primary mb-6'>Lezzetli, pratik ve sofraların vazgeçilmezi olacak bu soslu tavuk tarifini hem akşam yemeklerinde hem de misafir ağırlarken rahatlıkla yapabilirsiniz.</p>
                    <div className='mb-4'>
                        <div className='text-base text-primary font-semibold mb-1'>Malzemeler</div>
                        <ul className='pl-4'>
                            <li className='!list-disc text-primary text-sm'>600 gr tavuk göğsü veya but (kuşbaşı doğranmış)</li>
                            <li className='!list-disc text-primary text-sm'>2 yemek kaşığı zeytinyağı</li>
                            <li className='!list-disc text-primary text-sm'>1 adet orta boy soğan</li>
                            <span className='text-main text-sm'>Devamını Gör</span>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <div className='text-base text-primary font-semibold mb-1'>Yapılışı</div>
                        <ol className='pl-4'>
                            <li className='!list-decimal text-primary text-sm'>Tavukları yıkayıp süzdükten sonra kuşbaşı doğrayın.</li>
                            <li className='!list-decimal text-primary text-sm'>Geniş bir tavada zeytinyağını ısıtın, tavukları ekleyip yüksek ateşte renkleri dönene kadar kavurun.</li>
                            <li className='!list-decimal text-primary text-sm'>Yemeklik doğranmış soğan ve ince kıyılmış sarımsağı ekleyip kavurmaya devam edin.</li>
                            <span className='text-main text-sm'>Devamını Gör</span>
                        </ol>
                    </div>
                    <div className='mb-4'>
                        <div className='text-base text-primary font-semibold mb-1'>Servis Önerisi</div>
                        <ul className='pl-4'>
                            <li className='!list-disc text-primary text-sm'>Soslu tavuğu pilav, makarna veya közlenmiş sebzelerle servis edebilirsiniz.</li>
                            <li className='!list-disc text-primary text-sm'>Üzerine taze kıyılmış maydanoz serpiştirerek hem görselliğini hem de lezzetini artırabilirsiniz.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
