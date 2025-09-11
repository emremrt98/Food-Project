import React from 'react'

export default async function Search({ params }) {
    const { slug } = await params
    console.log(slug)
    return (
        <div>Search Sayfası</div>
    )
}
