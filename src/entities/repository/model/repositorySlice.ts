import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Repository } from '../types/repository'

interface RepositoryState {
  items: Repository[]
  totalPages: number
  currentPage: number
  currentOrg: string
}

const initialState: RepositoryState = {
  items: [],
  totalPages: 1,
  currentPage: 1,
  currentOrg: '',
}

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    setRepositories: (state, action: PayloadAction<Repository[]>) => {
      state.items = action.payload
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setCurrentOrg: (state, action: PayloadAction<string>) => {
      state.currentOrg = action.payload
    },
    clearRepositories: (state) => {
      state.items = []
      state.totalPages = 1
      state.currentPage = 1
      state.currentOrg = ''
    },
  },
})

export const {
  setRepositories,
  setTotalPages,
  setCurrentPage,
  setCurrentOrg,
  clearRepositories,
} = repositorySlice.actions

export default repositorySlice.reducer 