import React from 'react'
import CategoryCard from '../components/Categories_Components/CategoryCard'
import categories from '../utils/Categories'

const Categories = () => {
  
  return (
    // Category Card Component To Display Categories With Styling
    <CategoryCard categoriesList={categories} />
  )
}

export default Categories