import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import dataReducer from './data-slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;