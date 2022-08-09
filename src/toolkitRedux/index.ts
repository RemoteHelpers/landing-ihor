import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitReducer';

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
