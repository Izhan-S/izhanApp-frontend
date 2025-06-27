import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices';
import postsReducer from './postSlice';
import { UserState } from './slices';
import { PostState } from './postSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer, 
  },
});

export type RootState = {
  user: UserState;
  posts: PostState;
};


export type AppDispatch = typeof store.dispatch;