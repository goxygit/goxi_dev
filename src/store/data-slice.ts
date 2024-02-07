import { get, getDatabase, ref } from "firebase/database";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { collection, getDocs } from 'firebase/firestore';
import { database } from "../firebase";

export type project = {
    name: string
    img: string
    description: string
    link: string
}

type dataType = {
    projects: project[]
}
type initialState = {
    data: dataType,
    status: string
}
// Асинхронный thunk для чтения данных из базы данных
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const dataRef = ref(database);
    const snapshot = await get(dataRef);
    const data = snapshot.val();
    console.log(data)

    return data[0];
});

// Создание слайса
const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: {

        },
        status: 'idle',
    } as initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export default dataSlice.reducer;
export const selectData = (state: RootState) => state.data.data;