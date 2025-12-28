"use client"
import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import { GiKnifeFork } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import useClickOutside from '@/app/_hooks/useClickOutside';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { autocompleteData } from '@/app/_dummydata/autocomplete';
import { useTranslation } from '@/app/_hooks/useTranslation';

const RECENT_SEARCHES_KEY = 'foody_recent_searches';
const MAX_RECENT_SEARCHES = 5;

export default function SearchBox() {
    const { t } = useTranslation();
    const router = useRouter()
    const [selectedVal, setSelectedVal] = useState("");
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);
    const [skipEffect, setSkipEffect] = useState(false);
    const [datas, setDatas] = useState([]);
    const [recentSearches, setRecentSearches] = useState([]);
    const autocompleteDatas = autocompleteData;

    const autocompleteRef = useClickOutside(() => setShow(false));

    // Load recent searches from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setRecentSearches(Array.isArray(parsed) ? parsed : []);
            } catch (e) {
                setRecentSearches([]);
            }
        }
    }, []);

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
        // Save to recent searches when selected from autocomplete (but don't search)
        if (label && value) {
            saveToRecentSearches(label, value);
        }
    }

    const saveToRecentSearches = (label, value) => {
        const searchItem = { label, value };
        setRecentSearches(prev => {
            // Remove if already exists
            const filtered = prev.filter(item => item.value !== value);
            // Add to beginning and limit to MAX_RECENT_SEARCHES
            const updated = [searchItem, ...filtered].slice(0, MAX_RECENT_SEARCHES);
            localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
            return updated;
        });
    }

    const handleSearch = () => {
        console.log("Value : ",);
        if (selectedVal != "" && selectedVal != null) {
            // If not already saved, save to recent searches when search button is clicked
            // (It might already be saved from autocomplete selection)
            const existingItem = recentSearches.find(item => item.value === selectedVal);
            if (!existingItem) {
                const selectedItem = autocompleteDatas.find(item => item.value === selectedVal);
                if (selectedItem) {
                    saveToRecentSearches(selectedItem.label, selectedVal);
                }
            }
            router.push(`/search/${selectedVal}`)
        } else {
            toast.error(t('searchBox.searchError'));
        }
    }

    const handleRecentSearchClick = (value) => {
        router.push(`/search/${value}`);
    }

    const handleRemoveRecentSearch = (e, value) => {
        e.stopPropagation();
        setRecentSearches(prev => {
            const updated = prev.filter(item => item.value !== value);
            localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
            return updated;
        });
    }

    return (
        <div className='bg-[url(/search-bg.svg)] relative h-[375px] w-full bg-no-repeat bg-cover before:content-[""] before:absolute before:inset-0 before:bg-black/50'>
            <ToastContainer />
            <Container>
                <div className='relative flex flex-col justify-center gap-6 h-full'>
                    <div>
                        <h1 className='text-white text-[32px] leading-[38px] font-bold'>{t('searchBox.title')}</h1>
                        <p className='text-white text-base font-medium'>{t('searchBox.subtitle')}</p>
                    </div>
                    <div className='bg-white rounded-[8px] p-4 flex justify-between items-center'>
                        <div ref={autocompleteRef} className='flex items-center gap-4 flex-1 relative'>
                            <div>
                                <GiKnifeFork size={32} className='text-primary' />
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <span className='text-sm text-secondary font-normal'>{t('searchBox.inputLabel')}</span>
                                <input autoComplete='off' onChange={setAutocompleteData} className='outline-none text-base text-primary font-medium placeholder:text-primary placeholder:text-base placeholder:font-medium' name='autocomplete' placeholder={t('searchBox.placeholder')} value={text} type="text" />
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
                            <button onClick={handleSearch} className='bg-main text-white text-base font-medium py-3 px-4 rounded-[8px] cursor-pointer'>{t('searchBox.button')}</button>
                        </div>
                    </div>
                    {recentSearches.length > 0 && (
                        <div>
                            <div className='text-white text-base font-medium mb-3'>{t('searchBox.recentSearches')}</div>
                            <ul className='flex gap-3 items-center'>
                                {recentSearches.map((search, index) => (
                                    <li 
                                        key={index}
                                        className='flex gap-2 items-center bg-white px-4 py-3 rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors'
                                        onClick={() => handleRecentSearchClick(search.value)}
                                    >
                                        <span className='text-sm font-normal text-primary'>{search.label}</span>
                                        <CgClose 
                                            size={16} 
                                            className='text-primary hover:text-main transition-colors' 
                                            onClick={(e) => handleRemoveRecentSearch(e, search.value)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}
