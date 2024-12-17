import { createAsyncThunk } from '@reduxjs/toolkit'
import { githubApi } from '../api/githubApi'
import { setRepositories, setTotalPages, setCurrentOrg } from './repositorySlice'

export const fetchRepositories = createAsyncThunk(
  'repository/fetchRepositories',
  async (
    { org, page }: { org: string; page: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { repos, total } = await githubApi.getOrgRepos(org, page)
      dispatch(setRepositories(repos))
      dispatch(setTotalPages(total))
      dispatch(setCurrentOrg(org))
      return true
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
) 