
import React from 'react'
import SearchBox from '../_components/searchBox/SearchBox'
import Categories from './_components/categories/Categories'
import Container from '../_components/container/Container'
import RecipeCard from './_components/recipeCard/RecipeCard'
import Ads from '../_components/ads/Ads'
import Blogs from './_components/blogs/Blogs'
import Banner from '../_components/banner/Banner'

export default function HomePage() {
  return (
    <div>
      <SearchBox />
      <Container>
        <Categories />
        <RecipeCard />
        <Ads />
        <Blogs />
      </Container>
      <Banner />
    </div>
  )
}
