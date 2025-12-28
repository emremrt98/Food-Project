import Container from '@/app/_components/container/Container';
import SearchBox from '@/app/_components/searchBox/SearchBox'
import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import Filter from '../_components/filter/Filter';
import RecipeCard from '@/app/(locale)/search/_components/recipeCard/RecipeCard'

export default async function Search({ params, searchParams }) {
    const { slug } = await params
    
    return (
        <>
            <SearchBox />
            <Container>
                <div className='flex gap-1 items-center mt-3'>
                    <span className='text-secondary text-sm'>Foody.com</span>
                    <HiOutlineChevronRight className='text-secondary text-sm' />
                    <span className='text-primary text-sm'>{slug}</span>
                </div>

                <div className='mt-6 flex gap-8'>
                    <Filter slug={slug} />
                    <div className='recipe-card'>
                        <RecipeCard slug={slug} />
                    </div>
                </div>


            </Container>
        </>
    )
}
