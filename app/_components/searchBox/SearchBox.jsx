"use client"
import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import { GiKnifeFork } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import useClickOutside from '@/app/_hooks/useClickOutside';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const router = useRouter()
    const [selectedVal, setSelectedVal] = useState("");
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);
    const [skipEffect, setSkipEffect] = useState(false);
    const [datas, setDatas] = useState([]);
    const autocompleteDatas = [
        { label: "Hamburger", value: "hamburger" },
        { label: "Lahmacun", value: "lahmacun" },
        { label: "Döner", value: "doner" },
        { label: "Pide", value: "pide" },
        { label: "Poğaça Tarifleri", value: "pogaca-tarifleri" },
        { label: "Salata Tarifleri", value: "salata-tarifleri" },
        { label: "Tavuk Salatası", value: "tavuk-salatasi" },
        { label: "Akdeniz Salatası", value: "akdeniz-salatasi" },
        { label: "Sezar Salatası", value: "sezar-salatasi" },
        { label: "Çoban Salatası", value: "coban-salatasi" },
        { label: "Ton Balıklı Salata", value: "ton-balikli-salata" },
        { label: "Kinoalı Salata", value: "kinoali-salata" },
        { label: "Cheeseburger", value: "cheeseburger" },
        { label: "Mantar Burger", value: "mantar-burger" },
        { label: "Vejetaryen Burger", value: "vejetaryen-burger" },
        { label: "Falafel Burger", value: "falafel-burger" },
        { label: "Tavuk Şiş", value: "tavuk-sis" },
        { label: "Tavuk Sote", value: "tavuk-sote" },
        { label: "Tavuk Fajita", value: "tavuk-fajita" },
        { label: "Tavuk Döner", value: "tavuk-doner" },
        { label: "Tavuk Tandır", value: "tavuk-tandir" },
        { label: "Tavuk Kanat", value: "tavuk-kanat" },
        { label: "Ballı Hardallı Tavuk", value: "balli-hardalli-tavuk" },
        { label: "İnegöl Köfte", value: "inegol-kofte" },
        { label: "Kaşarlı Köfte", value: "kasarli-kofte" },
        { label: "Izgara Köfte", value: "izgara-kofte" },
        { label: "Adana Kebap", value: "adana-kebap" },
        { label: "Urfa Kebap", value: "urfa-kebap" },
        { label: "İskender Kebap", value: "iskender-kebap" },
        { label: "Beyti Kebap", value: "beyti-kebap" },
        { label: "Çöp Şiş", value: "cop-sis" },
        { label: "Pizza Margherita", value: "pizza-margherita" },
        { label: "Pizza Pepperoni", value: "pizza-pepperoni" },
        { label: "Dört Peynirli Pizza", value: "dort-peynirli-pizza" },
        { label: "Karışık Pizza", value: "karisik-pizza" },
        { label: "Makarna Napoliten", value: "makarna-napoliten" },
        { label: "Makarna Bolonez", value: "makarna-bolonez" },
        { label: "Fettucine Alfredo", value: "fettucine-alfredo" },
        { label: "Pesto Makarna", value: "pesto-makarna" },
        { label: "Mercimek Çorbası", value: "mercimek-corbasi" },
        { label: "Ezogelin Çorbası", value: "ezogelin-corbasi" },
        { label: "Tavuk Suyu Çorba", value: "tavuk-suyu-corba" },
        { label: "Domates Çorbası", value: "domates-corbasi" },
        { label: "Menemen", value: "menemen" },
        { label: "Sucuklu Yumurta", value: "sucuklu-yumurta" },
        { label: "Karışık Omlet", value: "karisik-omlet" },
        { label: "Pankek", value: "pankek" },
        { label: "French Toast", value: "french-toast" },
        { label: "Somon Izgara", value: "somon-izgara" },
        { label: "Levrek Izgara", value: "levrek-izgara" },
        { label: "Hamsi Tava", value: "hamsi-tava" },
        { label: "Kalamar Tava", value: "kalamar-tava" },
        { label: "Karides Güveç", value: "karides-guvec" },
        { label: "Kuru Fasulye", value: "kuru-fasulye" },
        { label: "Nohut Yemeği", value: "nohut-yemegi" },
        { label: "Barbunya Pilaki", value: "barbunya-pilaki" },
        { label: "Zeytinyağlı Enginar", value: "zeytinyagli-enginar" },
        { label: "Yaprak Sarma", value: "yaprak-sarma" },
        { label: "Şehriyeli Pilav", value: "sehriyeli-pilav" },
        { label: "Bulgur Pilavı", value: "bulgur-pilavi" },
        { label: "Mantı", value: "manti" },
        { label: "Patates Kızartması", value: "patates-kizartmasi" },
        { label: "Fırın Patates", value: "firin-patates" },
        { label: "Patates Püresi", value: "patates-puresi" },
        { label: "Patates Salatası", value: "patates-salatasi" },
        { label: "Et Sote", value: "et-sote" },
        { label: "Dana Antrikot", value: "dana-antrikot" },
        { label: "Bonfile Mantar Soslu", value: "bonfile-mantar-soslu" },
        { label: "Et Döner", value: "et-doner" },
        { label: "Kavurma", value: "kavurma" },
        { label: "Hünkar Beğendi", value: "hunkar-begendi" },
        { label: "Tas Kebabı", value: "tas-kebabi" },
        { label: "Musakka", value: "musakka" },
        { label: "İmam Bayıldı", value: "imam-bayildi" },
        { label: "Karnıyarık", value: "karniyarik" },
        { label: "Kabak Mücver", value: "kabak-mucver" },
        { label: "Taze Fasulye", value: "taze-fasulye" },
        { label: "Çiğköfte", value: "cigkofte" },
        { label: "İçli Köfte", value: "icli-kofte" },
        { label: "Mantarlı Risotto", value: "mantarli-risotto" },
        { label: "Sushi California Roll", value: "sushi-california-roll" },
        { label: "Pad Thai", value: "pad-thai" },
        { label: "Burrito", value: "burrito" },
        { label: "Taco", value: "taco" },
        { label: "Quesadilla", value: "quesadilla" },
        { label: "Guacamole", value: "guacamole" },
        { label: "Humus", value: "humus" },
        { label: "Baba Ganuş", value: "baba-ganus" },
        { label: "Tabbouleh", value: "tabbouleh" },
        { label: "Shakshuka", value: "shakshuka" },
        { label: "Baklava", value: "baklava" },
        { label: "Künefe", value: "kunefe" },
        { label: "Sütlaç", value: "sutlac" },
        { label: "Kazandibi", value: "kazandibi" },
        { label: "Profiterol", value: "profiterol" },
        { label: "Tiramisu", value: "tiramisu" },
        { label: "Dondurma Çikolatalı", value: "dondurma-cikolata" },
        { label: "Brownie", value: "brownie" },
        { label: "Cheesecake", value: "cheesecake" }
    ];

    const autocompleteRef = useClickOutside(() => setShow(false));

    useEffect(() => {

        if (skipEffect) {
            setSkipEffect(false);
            return;
        }
        if (text.length >= 3) {
            const result = autocompleteDatas.filter((autocompleteData) => autocompleteData.label.toLowerCase().includes(text.toLowerCase()))
            setDatas(result);
            setShow(true);
        } else {
            setDatas([]);
            setShow(false);
        }

    }, [text])

    const setAutocompleteData = (event) => {
        setText(event.target.value);
    }

    const selectInputData = (event) => {
        const { label, value } = event.target.dataset
        setSelectedVal(value);
        setText(label)
        setDatas([]);
        setShow(false);
        setSkipEffect(true);
    }

    const handleSearch = () => {
        console.log("Value : ",);
        router.push(`/search/?query=${selectedVal}`)
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
                        <div ref={autocompleteRef} className='flex items-center gap-4 flex-1 relative'>
                            <div>
                                <GiKnifeFork size={32} className='text-primary' />
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <span className='text-sm text-secondary font-normal'>Ne yemek istiyorsun?</span>
                                <input autoComplete='off' onChange={setAutocompleteData} className='outline-none text-base text-primary font-medium placeholder:text-primary placeholder:text-base placeholder:font-medium' name='autocomplete' placeholder='Hamburger, pizza, kebap veya lahmacun arayın' value={text} type="text" />
                            </div>
                            {
                                (datas.length && show) > 0 &&
                                <ul className='bg-white shadow-xl rounded-[8px] w-full absolute min-h-[50px] max-h-[350px] overflow-y-auto top-[65px] left-12 border border-weak-border z-10'>
                                    {
                                        datas.map((data, index) => <li data-value={data.value} data-label={data.label} onClick={selectInputData} className='hover:bg-box cursor-pointer p-4 rounded-[8px]' key={index}>{data.label}</li>)
                                    }
                                </ul>
                            }
                        </div>
                        <div>
                            <button onClick={handleSearch} className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>Yemekleri Listele</button>
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
