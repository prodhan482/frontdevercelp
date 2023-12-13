import { createSlice } from '@reduxjs/toolkit';
import * as lib from '@/lib/constants';

export type CartItem = {
	id: string;
	image: string;
	name: string;
	price: number;
	quantity: number;
	note: string;
};

const tax = 0;

const initialState = {
	cartItems: [] as CartItem[],
	totalItems: 0,
	totalSubTotal: 0,
	totalPrice: 0,
	tax: tax,
	quoteId: null,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState:
		typeof window !== 'undefined' && localStorage.getItem(lib.CART_NAME)
			? JSON.parse(localStorage.getItem(lib.CART_NAME)!)
			: initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload;

			const existItem = state.cartItems.find((stateItem: CartItem) => stateItem.id === item.id);
			if (existItem) {
				state.cartItems = state.cartItems.map((stateItem: CartItem) =>
					stateItem.id === item.id
						? {
								...stateItem,
								quantity: stateItem.quantity + 1,
						  }
						: stateItem
				);
			} else {
				const newItem = {
					...item,
					quantity: 1,
				};
				state.cartItems = [...state.cartItems, newItem];
			}
			state.totalSubTotal = state.cartItems.reduce(
				(acc: number, stateItem: CartItem) => acc + stateItem.price * stateItem.quantity,
				0
			);
			state.totalItems = state.cartItems.reduce(
				(acc: number, stateItem: CartItem) => acc + stateItem.quantity,
				0
			);
			state.totalPrice = state.totalSubTotal + state.totalSubTotal * tax;

			typeof window !== 'undefined' && localStorage.setItem(lib.CART_NAME, JSON.stringify(state));
		},

		deleteOneFromCart: (state, action) => {
			const id = action.payload;
			const findItem = state.cartItems.find((stateItem: CartItem) => stateItem.id === id);
			if (findItem) {
				if (findItem.quantity > 1) {
					state.cartItems = state.cartItems.map((stateItem: CartItem) =>
						stateItem.id === id
							? {
									...stateItem,
									quantity: stateItem.quantity - 1,
							  }
							: stateItem
					);
				} else {
					state.cartItems = state.cartItems.filter((stateItem: CartItem) => stateItem.id !== id);
				}
			}
			state.totalItems = state.cartItems.reduce(
				(acc: number, stateItem: CartItem) => acc + stateItem.quantity,
				0
			);
			state.totalSubTotal = state.cartItems.reduce(
				(acc: number, stateItem: CartItem) => acc + stateItem.price * stateItem.quantity,
				0
			);
			state.totalPrice = state.totalSubTotal + state.totalSubTotal * tax;
			typeof window !== 'undefined' && localStorage.setItem(lib.CART_NAME, JSON.stringify(state));
		},

		deleteSingleItemFromCart: (state, action) => {
			const id = action.payload;
			const findItem = state.cartItems.find((stateItem: CartItem) => stateItem.id === id);
			if (findItem) {
				state.cartItems = state.cartItems.filter((stateItem: CartItem) => stateItem.id !== id);
			}
			state.totalItems = state.cartItems.reduce(
				(acc: number, stateItem: CartItem) => acc + stateItem.quantity,
				0
			);
			state.totalSubTotal = state.cartItems.reduce(
				(acc: number, stateItem: CartItem) => acc + stateItem.price * stateItem.quantity,
				0
			);
			state.totalPrice = state.totalSubTotal + state.totalSubTotal * tax;
			typeof window !== 'undefined' && localStorage.setItem(lib.CART_NAME, JSON.stringify(state));
		},

		deleteAllFromCart: (state) => {
			state.cartItems = [];
			state.totalSubTotal = 0;
			state.totalItems = 0;
			state.totalPrice = 0;
			typeof window !== 'undefined' && localStorage.setItem(lib.CART_NAME, JSON.stringify(state));
		},
		setQuoteId: (state, action) => {
			state.quoteId = action.payload;
			typeof window !== 'undefined' && localStorage.setItem(lib.CART_NAME, JSON.stringify(state));
		},
		resetCart: (state) => {
			state = initialState;
			typeof window !== 'undefined' && localStorage.setItem(lib.CART_NAME, JSON.stringify(state));
		},
	},
});

export const {
	addToCart,
	deleteOneFromCart,
	deleteAllFromCart,
	deleteSingleItemFromCart,
	setQuoteId,
	resetCart,
} = cartSlice.actions;
export default cartSlice;
