import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  selectMail: null,
  sendMessageIsOpen: false,
};
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    
    return response.data;
  }
);

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  
  reducers: {
    selectMail: (state, action) => {
      state.selectMail = action.payload;
    },

    openSendMessage: (state) => {

      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
  
});

export const {selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectOpenMail = (state) => state.mail.selectMail;

export default mailSlice.reducer;
