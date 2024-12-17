import { configureStore } from '@reduxjs/toolkit'
import repositoryReducer from '@/entities/repository/model/repositorySlice'
import searchReducer from '@/features/searchOrg/model/searchSlice'

export const store = configureStore({
  reducer: {
    repository: repositoryReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 