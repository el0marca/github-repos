import React from 'react'
import styled from 'styled-components'
import SearchForm from '@/shared/ui/SearchForm/SearchForm'

const Container = styled.div`
  padding: 20px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const SearchPage: React.FC = () => {
  return (
    <Container>
      <Title>GitHub Организации Репозитории</Title>
      <SearchForm />
    </Container>
  )
}

export default SearchPage