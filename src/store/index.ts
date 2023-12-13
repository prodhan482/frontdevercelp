import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import sidebarSlice from './slices/sidebarSlice';

import mainApi from './services/mainApi';
import accordionSlice from './slices/accordionSlice';
import cartSlice from './slices/cartSlice';
import searchSlice from './slices/searchSlice';
import authSlice from './slices/authSlice';
import { testHomeSlider } from './services/testHomeApi'
export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		sidebar: sidebarSlice.reducer,
		accordion: accordionSlice.reducer,
		cart: cartSlice.reducer,
		search: searchSlice.reducer,
		[mainApi.reducerPath]: mainApi.reducer,
		[testHomeSlider.reducerPath]: testHomeSlider.reducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware, testHomeSlider.middleware),
	devTools: true,
});

// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {});

setupListeners(store.dispatch);
