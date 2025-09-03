"use client"
import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import { GiKnifeFork } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export default function SearchBox() {
    const [text, setText] = useState("");
    const [datas, setDatas] = useState([]);
    const autocompleteDatas = [
        { label: "Hamburger", value: "Hamburger" },
        { label: "Lahmacun", value: "Lahmacun" },
        { label: "Döner", value: "Döner" },
        { label: "Pide", value: "Pide" },
        { label: "Poğaça Tarifleri", value: "Poğaça Tarifleri" },
        { label: "Salata Tarifleri", value: "Salata Tarifleri" },
        { label: "Tavuk Salatası", value: "Tavuk Salatası" },
        { label: "Akdeniz Salatası", value: "Akdeniz Salatası" },
        { label: "Sezar Salatası", value: "Sezar Salatası" },
        { label: "Çoban Salatası", value: "Çoban Salatası" },
        { label: "Ton Balıklı Salata", value: "Ton Balıklı Salata" },
        { label: "Kinoalı Salata", value: "Kinoalı Salata" },
        { label: "Cheeseburger", value: "Cheeseburger" },
        { label: "Mantar Burger", value: "Mantar Burger" },
        { label: "Vejetaryen Burger", value: "Vejetaryen Burger" },
        { label: "Falafel Burger", value: "Falafel Burger" },
        { label: "Tavuk Şiş", value: "Tavuk Şiş" },
        { label: "Tavuk Sote", value: "Tavuk Sote" },
        { label: "Tavuk Fajita", value: "Tavuk Fajita" },
        { label: "Tavuk Döner", value: "Tavuk Döner" },
        { label: "Tavuk Tandır", value: "Tavuk Tandır" },
        { label: "Tavuk Kanat", value: "Tavuk Kanat" },
        { label: "Ballı Hardallı Tavuk", value: "Ballı Hardallı Tavuk" },
        { label: "İnegöl Köfte", value: "İnegöl Köfte" },
        { label: "Kaşarlı Köfte", value: "Kaşarlı Köfte" },
        { label: "Izgara Köfte", value: "Izgara Köfte" },
        { label: "Adana Kebap", value: "Adana Kebap" },
        { label: "Urfa Kebap", value: "Urfa Kebap" },
        { label: "İskender Kebap", value: "İskender Kebap" },
        { label: "Beyti Kebap", value: "Beyti Kebap" },
        { label: "Çöp Şiş", value: "Çöp Şiş" },
        { label: "Pizza Margherita", value: "Pizza Margherita" },
        { label: "Pizza Pepperoni", value: "Pizza Pepperoni" },
        { label: "Dört Peynirli Pizza", value: "Dört Peynirli Pizza" },
        { label: "Karışık Pizza", value: "Karışık Pizza" },
        { label: "Makarna Napoliten", value: "Makarna Napoliten" },
        { label: "Makarna Bolonez", value: "Makarna Bolonez" },
        { label: "Fettucine Alfredo", value: "Fettucine Alfredo" },
        { label: "Pesto Makarna", value: "Pesto Makarna" },
        { label: "Mercimek Çorbası", value: "Mercimek Çorbası" },
        { label: "Ezogelin Çorbası", value: "Ezogelin Çorbası" },
        { label: "Tavuk Suyu Çorba", value: "Tavuk Suyu Çorba" },
        { label: "Domates Çorbası", value: "Domates Çorbası" },
        { label: "Menemen", value: "Menemen" },
        { label: "Sucuklu Yumurta", value: "Sucuklu Yumurta" },
        { label: "Karışık Omlet", value: "Karışık Omlet" },
        { label: "Pankek", value: "Pankek" },
        { label: "French Toast", value: "French Toast" },
        { label: "Somon Izgara", value: "Somon Izgara" },
        { label: "Levrek Izgara", value: "Levrek Izgara" },
        { label: "Hamsi Tava", value: "Hamsi Tava" },
        { label: "Kalamar Tava", value: "Kalamar Tava" },
        { label: "Karides Güveç", value: "Karides Güveç" },
        { label: "Kuru Fasulye", value: "Kuru Fasulye" },
        { label: "Nohut Yemeği", value: "Nohut Yemeği" },
        { label: "Barbunya Pilaki", value: "Barbunya Pilaki" },
        { label: "Zeytinyağlı Enginar", value: "Zeytinyağlı Enginar" },
        { label: "Yaprak Sarma", value: "Yaprak Sarma" },
        { label: "Şehriyeli Pilav", value: "Şehriyeli Pilav" },
        { label: "Bulgur Pilavı", value: "Bulgur Pilavı" },
        { label: "Mantı", value: "Mantı" },
        { label: "Patates Kızartması", value: "Patates Kızartması" },
        { label: "Fırın Patates", value: "Fırın Patates" },
        { label: "Patates Püresi", value: "Patates Püresi" },
        { label: "Patates Salatası", value: "Patates Salatası" },
        { label: "Et Sote", value: "Et Sote" },
        { label: "Dana Antrikot", value: "Dana Antrikot" },
        { label: "Bonfile Mantar Soslu", value: "Bonfile Mantar Soslu" },
        { label: "Et Döner", value: "Et Döner" },
        { label: "Kavurma", value: "Kavurma" },
        { label: "Hünkar Beğendi", value: "Hünkar Beğendi" },
        { label: "Tas Kebabı", value: "Tas Kebabı" },
        { label: "Musakka", value: "Musakka" },
        { label: "İmam Bayıldı", value: "İmam Bayıldı" },
        { label: "Karnıyarık", value: "Karnıyarık" },
        { label: "Kabak Mücver", value: "Kabak Mücver" },
        { label: "Taze Fasulye", value: "Taze Fasulye" },
        { label: "Çiğköfte", value: "Çiğköfte" },
        { label: "İçli Köfte", value: "İçli Köfte" },
        { label: "Mantarlı Risotto", value: "Mantarlı Risotto" },
        { label: "Sushi California Roll", value: "Sushi California Roll" },
        { label: "Pad Thai", value: "Pad Thai" },
        { label: "Burrito", value: "Burrito" },
        { label: "Taco", value: "Taco" },
        { label: "Quesadilla", value: "Quesadilla" },
        { label: "Guacamole", value: "Guacamole" },
        { label: "Humus", value: "Humus" },
        { label: "Baba Ganuş", value: "Baba Ganuş" },
        { label: "Tabbouleh", value: "Tabbouleh" },
        { label: "Shakshuka", value: "Shakshuka" },
        { label: "Baklava", value: "Baklava" },
        { label: "Künefe", value: "Künefe" },
        { label: "Sütlaç", value: "Sütlaç" },
        { label: "Kazandibi", value: "Kazandibi" },
        { label: "Profiterol", value: "Profiterol" },
        { label: "Tiramisu", value: "Tiramisu" },
        { label: "Dondurma Çikolatalı", value: "Dondurma Çikolatalı" },
        { label: "Brownie", value: "Brownie" },
        { label: "Cheesecake", value: "Cheesecake" }
    ];


    useEffect(() => {
        if (text.length >= 3) {
            const result = autocompleteDatas.filter((autocompleteData) => autocompleteData.value.toLowerCase().includes(text))
            setDatas(result);
        } else {
            setDatas([]);
        }
    }, [text])

    const setAutocompleteData = (event) => {
        setText(event.target.value);
    }

    return (
        <div className='bg-[url(/search-bg.svg)] relative h-[375px] w-full bg-no-repeat bg-cover before:content-[""] before:absolute before:inset-0 before:bg-black/50'>
            <Container>
                <div className='relative flex flex-col justify-center gap-6 h-full'>
                    <div>
                        <h1 className='text-white text-[32px] leading-[38px] font-bold'>Foody ile lezzetli tarifleri bulun!</h1>
                        <p className='text-white text-base font-medium'>Ne yemek istiyorsunuz?</p>
                    </div>
                    <div className='bg-white rounded-[8px] p-4 flex justify-between items-center'>
                        <div className='flex items-center gap-4 flex-1 relative'>
                            <div>
                                <GiKnifeFork size={32} className='text-primary' />
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <span className='text-sm text-secondary font-normal'>Ne yemek istiyorsun?</span>
                                <input onChange={setAutocompleteData} className='outline-none text-base text-primary font-medium placeholder:text-primary placeholder:text-base placeholder:font-medium' name='autocomplete' placeholder='Hamburger, pizza, kebap veya lahmacun arayın' value={text} type="text" />
                            </div>
                            {
                                datas.length > 0 &&
                                <ul className='bg-white shadow-xl rounded-[8px] w-full absolute min-h-[50px] max-h-[350px] overflow-y-auto top-[65px] left-12 border border-weak-border z-10'>
                                    {
                                        datas.map((data, index) => <li className='hover:bg-box cursor-pointer p-4 rounded-[8px]' key={index}>{data.label}</li>)
                                    }
                                </ul>
                            }
                        </div>
                        <div>
                            <button className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>Yemekleri Listele</button>
                        </div>
                    </div>
                    <div>
                        <div className='text-white text-base font-medium mb-3'>Son Aramalar</div>
                        <ul className='flex gap-3 items-center'>
                            <li className='flex gap-2 items-center bg-white px-4 py-3 rounded-[8px] cursor-pointer'>
                                <span className='text-sm font-normal text-primary'>Lahmacun</span>
                                <CgClose size={16} className='text-primary' />
                            </li>
                            <li className='flex gap-2 items-center bg-white px-4 py-3 rounded-[8px] cursor-pointer'>
                                <span className='text-sm font-normal text-primary'>Hamburger</span>
                                <CgClose size={16} className='text-primary' />
                            </li>
                            <li className='flex gap-2 items-center bg-white px-4 py-3 rounded-[8px] cursor-pointer'>
                                <span className='text-sm font-normal text-primary'>Döner</span>
                                <CgClose size={16} className='text-primary' />
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}
