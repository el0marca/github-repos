import React from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks/hooks'
import { setCurrentPage } from '@/entities/repository/model/repositorySlice'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;
`;

const Td = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  border: 1px solid #ccc;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#0066cc' : 'none')};
  color: ${({ active }) => (active ? 'white' : 'inherit')};
  border-color: ${({ active }) => (active ? '#0066cc' : '#ccc')};

  &:hover:not(.active) {
    background-color: #e6e6e6;
  }
`;

const ReposTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { items: repositories, currentPage, totalPages, currentOrg } = useAppSelector(
    state => state.repository
  )

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <div>
      <h2>{currentOrg}'s Repositories</h2>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Language</Th>
            <Th>Stars</Th>
          </tr>
        </thead>
        <tbody>
          {repositories.map(repo => (
            <tr key={repo.id}>
              <Td>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </Td>
              <Td>{repo.description || '-'}</Td>
              <Td>{repo.language || '-'}</Td>
              <Td>{repo.stargazers_count}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PageButton>
        ))}
      </Pagination>
    </div>
  )
}

export default ReposTable 