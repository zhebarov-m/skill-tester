import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store.ts'

// Define a type for the slice state
interface SearchState {
    searchTerm: string,
    searchResults: [],
    loading: boolean,
    error: string | null,
}

// Define the initial state using that type
const initialState: SearchState = {
    searchTerm: '', // начальное значение поискового запроса
    searchResults: [], // начальный пустой массив результатов поиска
    loading: false, // флаг для отслеживания загрузки данных
    error: null, // для отслеживания ошибок
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        setSearchResults(state, action: PayloadAction<any[]>) {
            // @ts-ignore
            state.searchResults = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
})

export const { setSearchTerm, setSearchResults, setLoading, setError } = searchSlice.actions

export const selectSearch = (state: RootState) => state.seacrh.searchTerm

export default searchSlice.reducer

