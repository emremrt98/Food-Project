import React from 'react'

export default function Header({ recipeData }) {
    const getScoreText = (score) => {
        if (score > 9) return "Mükemmel";
        if (score > 8) return "Çok iyi";
        if (score > 7) return "İyi";
        if (score > 6) return "Ortalama";
        return "İyi";
    };

    return (
        <div className='flex justify-between items-start'>
            <div>
                <h1 className='text-3xl text-primary font-bold mb-[2px]'>{recipeData?.title || "Soslu Tavuk Tarifi"}</h1>
                <p className='text-base text-secondary'>Yazar : {recipeData?.author || "Emre Mert"}</p>
            </div>
            <div className='flex gap-1 items-center'>
                <span className='text-base text-primary font-medium'>{getScoreText(recipeData?.surveyScore)}</span>
                <div className='px-4 py-2 bg-main rounded-[8px] text-white text-base font-medium'>{recipeData?.surveyScore}</div>
            </div>
        </div>
    )
}
