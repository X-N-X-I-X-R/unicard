// redux/slices/poolSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const poolSlice = createSlice({
  name: 'pool',
  initialState: {
    poolName: '',
    contacts: [] as { id: string; name: string }[], // or any other appropriate type
  },
  reducers: {
    setPoolName(state, action) {
      state.poolName = action.payload;
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter((contact: { id: string }) => contact.id !== action.payload.id);
    }
  },
});

export const { setPoolName, addContact , removeContact} = poolSlice.actions;
export default poolSlice.reducer;
