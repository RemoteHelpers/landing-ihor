import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    firstQuestion: {
      answer: '',
      isTrue: false,
    },
    secondQuestion: {
      answer: '',
      isTrue: false,
    },
    thirdQuestion: {
      answer: '',
      isTrue: false,
    },
  },
  reducers: {
    addAnswer1(state, action) {
      state.firstQuestion.answer = action.payload;
      state.firstQuestion.isTrue = action.payload === '7';
    },

    addAnswer2(state, action) {
      state.secondQuestion.answer = action.payload;
      state.secondQuestion.isTrue = action.payload === 'true';
    },

    addAnswer3(state, action) {
      state.thirdQuestion.answer = action.payload;
      state.thirdQuestion.isTrue = action.payload === '100';
    },
  },
});

export default toolkitSlice.reducer;
export const { addAnswer1, addAnswer2, addAnswer3 } = toolkitSlice.actions;
