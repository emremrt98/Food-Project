
import React from 'react'
import SearchBox from '../_components/searchBox/SearchBox'
import Categories from './_components/categories/Categories'
import Container from '../_components/container/Container'

export default function HomePage() {
  return (
    <div>
      <SearchBox />
      <Container>
        <Categories />
      </Container>
    </div>
  )
}
