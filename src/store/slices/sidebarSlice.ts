import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState: {
		isOpen: false,
	},
	reducers: {
		toggleSidebar: (state) => {
			state.isOpen = !state.isOpen;
		},
		resetSidebar: (state) => {
			state.isOpen = false;
		},
	},
});

export const { toggleSidebar, resetSidebar } = sidebarSlice.actions;

export default sidebarSlice;
