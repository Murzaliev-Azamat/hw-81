import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { LinkApi, LinkResponse } from '../../../types';


export const createShortenLink = createAsyncThunk<LinkResponse, LinkApi>(
  'links/create',
  async (link) => {
    const response = await axiosApi.post<LinkResponse>('/links', link);

    return response.data;
  }
);
