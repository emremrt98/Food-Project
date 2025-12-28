import Container from '@/app/_components/container/Container';
import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import Header from './_components/Header';
import Content from './_components/Content';
import { recipeDetailData, defaultRecipeDetail } from '@/app/_dummydata/recipeDetail';
import { recipesData } from '@/app/_dummydata/recipes';
import { myRecipesData } from '@/app/_dummydata/myRecipes';

export default async function OnePage({ params }) {
    const { slug, subslug } = await params;
    
    // Build the expected URL from slug and subslug
    const expectedUrl = `/search/${slug}/${subslug}`;
    
    // Find recipe from recipes.js based on URL
    let recipeFromList = recipesData.find(recipe => recipe.url === expectedUrl);
    
    // If not found in recipes.js, try myRecipesData
    if (!recipeFromList) {
        recipeFromList = myRecipesData.find(recipe => recipe.url === expectedUrl);
    }
    
    // Get detailed data from recipeDetailData if available
    const detailedData = recipeDetailData[slug]?.[subslug];
    
    // If recipeFromList not found by URL, try to find by title from detailedData
    if (!recipeFromList && detailedData) {
        recipeFromList = recipesData.find(recipe => 
            recipe.title === detailedData.title || 
            recipe.title.toLowerCase() === detailedData.title.toLowerCase()
        );
        // Also try myRecipesData
        if (!recipeFromList) {
            recipeFromList = myRecipesData.find(recipe => 
                recipe.title === detailedData.title || 
                recipe.title.toLowerCase() === detailedData.title.toLowerCase()
            );
        }
    }
    
    // Merge data: use recipeFromList as base, and enhance with detailedData if available
    let recipeData;
    
    if (recipeFromList) {
        // If we have detailed data, merge it with recipe list data
        if (detailedData) {
            // Update images with actual image from recipes.js
            const updatedImages = detailedData.images ? detailedData.images.map((img, index) => {
                if (index === 0) {
                    // Main image - use the actual image from recipes.js
                    return {
                        ...img,
                        imageUrl: recipeFromList.imageUrl
                    };
                }
                // Side images - use category-appropriate images
                return img;
            }) : [{
                imageUrl: recipeFromList.imageUrl,
                width: 472,
                height: 417,
                alt: `${recipeFromList.title} ana görsel`
            }];
            
            recipeData = {
                ...detailedData,
                // Override with actual data from recipes.js
                title: recipeFromList.title,
                surveyScore: recipeFromList.surveyScore, // Always use surveyScore from recipes.js
                readCount: recipeFromList.readCount,
                images: updatedImages
            };
        } else {
            // If no detailed data, create basic structure from recipes.js
            recipeData = {
                title: recipeFromList.title,
                author: "Foody.com", // Default author
                surveyScore: recipeFromList.surveyScore,
                readCount: recipeFromList.readCount,
                images: [
                    {
                        imageUrl: recipeFromList.imageUrl,
                        width: 472,
                        height: 417,
                        alt: `${recipeFromList.title} ana görsel`
                    }
                ],
                overview: recipeFromList.description,
                ingredients: [], // Will be empty if not in detail data
                instructions: [],
                servingSuggestions: [],
                tips: [],
                importantInfo: [
                    `Bu tarif ${recipeFromList.servings} kişiliktir.`
                ]
            };
        }
    } else {
        // Fallback to default or detailed data
        if (detailedData) {
            // Try to find recipe by title to get surveyScore from recipes.js or myRecipesData
            let recipeByTitle = recipesData.find(recipe => 
                recipe.title === detailedData.title || 
                recipe.title.toLowerCase() === detailedData.title.toLowerCase()
            );
            // Also try myRecipesData
            if (!recipeByTitle) {
                recipeByTitle = myRecipesData.find(recipe => 
                    recipe.title === detailedData.title || 
                    recipe.title.toLowerCase() === detailedData.title.toLowerCase()
                );
            }
            
            recipeData = {
                ...detailedData,
                // Use surveyScore from recipes.js or myRecipesData if found, otherwise use detailedData's surveyScore
                surveyScore: recipeByTitle ? recipeByTitle.surveyScore : detailedData.surveyScore,
                readCount: recipeByTitle ? recipeByTitle.readCount : detailedData.readCount
            };
        } else {
            // Try to find in myRecipesData by URL as last resort
            const myRecipe = myRecipesData.find(recipe => recipe.url === expectedUrl);
            if (myRecipe) {
                recipeData = {
                    title: myRecipe.title,
                    author: "Foody.com",
                    surveyScore: myRecipe.surveyScore,
                    readCount: myRecipe.readCount,
                    images: [
                        {
                            imageUrl: myRecipe.imageUrl,
                            width: 472,
                            height: 417,
                            alt: `${myRecipe.title} ana görsel`
                        }
                    ],
                    overview: myRecipe.description,
                    ingredients: [],
                    instructions: [],
                    servingSuggestions: [],
                    tips: [],
                    importantInfo: []
                };
            } else {
                recipeData = defaultRecipeDetail;
            }
        }
    }

    return (
        <Container>
            <div className='flex gap-1 items-center mt-3'>
                <span className='text-secondary text-sm'>Foody.com</span>
                <HiOutlineChevronRight className='text-secondary text-sm' />
                <span className='text-secondary text-sm'>{slug}</span>
                <HiOutlineChevronRight className='text-secondary text-sm' />
                <span className='text-primary text-sm'>{subslug}</span>
            </div>
            <div className='mt-6'>
                <div className='flex gap-6'>
                    <div className='flex-1'>
                        <Header recipeData={recipeData} />
                        <Content recipeData={recipeData} />
                    </div>
                    <div className='basis-[320px] py-3 px-4'>
                        <div className='text-primary text-base font-medium mb-3'>İçerik</div>
                        <div className='text-sm text-primary font-semibold mb-2'>Yemek resimleri</div>
                        <div className='text-sm text-primary mb-2'>Malzemeler</div>
                        <div className='text-sm text-primary mb-2'>Yapılışı</div>
                        <div className='text-sm text-primary mb-2'>Servis önerisi</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
