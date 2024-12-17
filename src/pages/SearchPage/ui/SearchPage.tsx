import React from 'react'
import styles from './SearchPage.module.css'
import SearchForm from '@/shared/ui/SearchForm/SearchForm'

const SearchPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>GitHub Организации Репозитории</h1>
      <SearchForm />
    </div>
  )
}

export default SearchPage 