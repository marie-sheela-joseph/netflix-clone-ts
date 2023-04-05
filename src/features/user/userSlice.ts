import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
type User = {
  email: string;
  uid: string;
};
export interface userState {
  user: User | null;
}
const initialState: userState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; uid: string }>) => {
      state.user = action.payload;
      console.log('login slice');
    },
    logout: (state, action: PayloadAction<null>) => {
      state.user = action.payload;
      console.log('logout slice');
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
