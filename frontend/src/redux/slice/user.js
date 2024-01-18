import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async () => {
  const response = await axios.get('http://localhost:8000/user/find');
  return response.data;
});
export const fetchCreatUser = createAsyncThunk('user/fetchCreatUser', async (data) => {
    const response = await axios.get('http://localhost:8000/user/create',data);
    return response.data;
});
export const fetchUpdateUser = createAsyncThunk('user/fetchUpdateUser', async (data) => {
    const response = await axios.get('http://localhost:8000/user/update',data);
    return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchCreatUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCreatUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchCreatUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchUpdateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUpdateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })


  },
});

export default userSlice.reducer;
