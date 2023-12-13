import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		isSearchOpen: false,
	},
	reducers: {
		toggleSearch: state => {
			state.isSearchOpen = !state.isSearchOpen;
		},

		showSearch: state => {
			state.isSearchOpen = true;
		},
		hideSearch: state => {
			state.isSearchOpen = false;
		},
	},
});

export const { toggleSearch, showSearch, hideSearch } = searchSlice.actions;

export default searchSlice;
