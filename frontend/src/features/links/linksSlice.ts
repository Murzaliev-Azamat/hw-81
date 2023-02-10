import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { createShortenLink } from './linksThunks';


interface CommentsState {
  shortenLink: string;
  addLoading: boolean;
}

const initialState: CommentsState = {
  shortenLink: '',
  addLoading: false,
}

export const LinksSlice = createSlice({
  name: 'links',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createShortenLink.pending, (state) => {
      state.addLoading = true;
    });
    builder.addCase(createShortenLink.fulfilled, (state,action) => {
      state.addLoading = false;
      state.shortenLink = action.payload.shortUrl;
    });
    builder.addCase(createShortenLink.rejected, (state) => {
      state.addLoading = false;
    });
  }});

export const linksReducer = LinksSlice.reducer;
export const selectShortenLink = (state: RootState) => state.links.shortenLink;