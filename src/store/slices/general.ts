import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories, getAllCats} from '../../services/general.service';

import { RootState } from '../index';
import { IPagination } from '../../interfaces';

interface ICategories {
  id: number;
  name: string
}

interface ICats {
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface GenState {
 cats: ICats[] | null;
 categories: ICategories[] | null;
 selectedCategory?: number;
 page: number;
}

const initialState: GenState = {
  cats: null,
  categories: null,
  selectedCategory: 0,
  page: 1,
};

export const getAllCategoriesThunk = createAsyncThunk(
  'general/getAllCategories',
  async () => getAllCategories()
);


export const getCatsThunk = createAsyncThunk(
  'general/getCats',
  async (query: IPagination) => getAllCats(query)
);

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
      state.page = 1;
      state.cats = null;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategoriesThunk.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
    builder.addCase(getCatsThunk.fulfilled, (state, { payload }) => {
      state.page > 1 && Array.isArray(state.cats) ? 
        state.cats = [...state.cats, ...payload]
        : state.cats = payload;

    });
  }
});

export const getCategories = (state: RootState) => state.general.categories;
export const getSelectedCategory= (state: RootState) => state.general.selectedCategory;
export const getCats= (state: RootState) => state.general.cats;
export const getPage= (state: RootState) => state.general.page;

export const { setSelectedCategory, setPage } =  generalSlice.actions;

export default generalSlice.reducer;
