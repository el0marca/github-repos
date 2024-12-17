import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  loading: boolean
  error: string | null
}

const initialState: SearchState = {
  loading: false,
  error: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { setLoading, setError, clearError } = searchSlice.actions

export default searchSlice.reducer 