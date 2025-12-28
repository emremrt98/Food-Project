"use client"
import Title from '@/app/_components/title/Title'

import React from 'react'
import { useSearchParams } from 'next/navigation'

import RecipeCardItem from './RecipeCardItem';
import { recipesData } from '@/app/_dummydata/recipes';

export default function RecipeCard({ slug }) {
    const searchParams = useSearchParams();
    
    // URL parametrelerini al (dependency için)
    const sortBy = searchParams.get('sort') || '';
    const scoreParam = searchParams.get('score');
    const servingsParam = searchParams.get('servings');
    
    // Slug ve filtre parametrelerine göre tarifleri filtrele
    const filteredRecipes = React.useMemo(() => {
        if (!slug) return recipesData;
        
        // Slug'ı normalize et
        const normalizedSlug = slug.toLowerCase();
        
        // URL parametrelerini parse et
        const minScore = scoreParam ? parseFloat(scoreParam) : null;
        const servingsFilter = servingsParam ? servingsParam.split(',') : [];
        
        let filtered = recipesData.filter(recipe => {
            // URL'den kategori kontrolü (en önemli kontrol - tam eşleşme)
            const urlParts = recipe.url.split('/');
            const urlCategory = urlParts[2]; // /search/hamburger/... -> hamburger
            
            // URL category tam eşleşme kontrolü (öncelikli)
            if (urlCategory === normalizedSlug) {
                return true;
            }
            
            // Categories array'inde tam eşleşme kontrolü
            const categoryMatch = recipe.categories.some(cat => {
                const normalizedCat = cat.toLowerCase();
                return normalizedCat === normalizedSlug;
            });
            
            return categoryMatch;
        });
        
        // Yemek puanı filtresi
        if (minScore !== null && !isNaN(minScore)) {
            filtered = filtered.filter(recipe => recipe.surveyScore >= minScore);
        }
        
        // Kişi sayısı filtresi
        if (servingsFilter.length > 0) {
            filtered = filtered.filter(recipe => {
                return servingsFilter.includes(recipe.servings);
            });
        }
        
        // Sıralama
        if (sortBy === 'popular') {
            filtered = [...filtered].sort((a, b) => {
                // Önce readCount'a göre, sonra bookMarkCount'a göre
                if (b.readCount !== a.readCount) {
                    return b.readCount - a.readCount;
                }
                return b.bookMarkCount - a.bookMarkCount;
            });
        } else if (sortBy === 'new') {
            filtered = [...filtered].sort((a, b) => {
                // createdAt'e göre yeni olanlar önce
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
        }
        
        return filtered;
    }, [slug, sortBy, scoreParam, servingsParam]);

    return (
        <div>
            {filteredRecipes.length > 0 ? (
                <ul className='flex flex-col gap-6'>
                    {
                        filteredRecipes.map((data, index) => <RecipeCardItem key={index} data={data} />)
                    }
                </ul>
            ) : (
                <div className='text-center py-12'>
                    <p className='text-secondary text-lg'>Seçilen filtreler için tarif bulunamadı.</p>
                </div>
            )}
        </div>
    )
}
