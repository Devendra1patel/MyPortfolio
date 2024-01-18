import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProjects = createAsyncThunk('project/fetchAllProjects', async () => {
  const response = await axios.get('http://localhost:8000/project/getallproject');
  return response.data;
});
export const fetchCreatProject = createAsyncThunk('project/fetchCreatProject', async (data) => {
    const response = await axios.post('http://localhost:8000/project/project/create',data);
    return response.data;
  });
export const fetchFindProject = createAsyncThunk('project/fetchFindProject', async (data) => {
    const response = await axios.post('http://localhost:8000/project/find',data);
    return response.data;
  });
export const fetchUpdateProject = createAsyncThunk('project/fetchUpdateProject', async (data) => {
    const response = await axios.post('http://localhost:8000/project/update',data);
    return response.data;
  });
export const fetchDeleteProject = createAsyncThunk('project/fetchDeleteProject', async (data) => {
    const response = await axios.post(`http://localhost:8000/project/delete/${data._id}`);
    return response.data;
  });

const projectSlice = createSlice({
  name: 'project',
  initialState: { projects: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchAllProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchCreatProject.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCreatProject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchCreatProject.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchFindProject.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFindProject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchFindProject.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchUpdateProject.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpdateProject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchUpdateProject.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchDeleteProject.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeleteProject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchDeleteProject.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default projectSlice.reducer;
