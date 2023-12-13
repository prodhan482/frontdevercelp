import { createSlice } from '@reduxjs/toolkit';

export const accordionSlice = createSlice({
	name: 'accordion',
	initialState: {
		index: 0,
		select: 'null',
	},
	reducers: {
		changeIndex: (state, action) => {
			state.index = action.payload;
		},
		changeItem: (state, action) => {
			state.select = action.payload;
		},
	},
});

export const { changeIndex, changeItem } = accordionSlice.actions;

export default accordionSlice;
