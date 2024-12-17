import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRepositories } from "@/entities/repository/model/repositoryThunks";
import { setLoading, setError } from "./searchSlice";

export const searchOrganization = createAsyncThunk(
  "search/searchOrganization",
  async (
    { org, page }: { org: string; page: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      await dispatch(fetchRepositories({ org, page })).unwrap();
      dispatch(setLoading(false));
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError("An unknown error occurred"));
      }
      dispatch(setLoading(false));
      return rejectWithValue(error);
    }
  }
);
