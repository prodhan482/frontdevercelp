import {
	addToCart as addToCartAction,
	deleteOneFromCart as deleteOneFromCartAction,
	deleteSingleItemFromCart as deleteSingleItemFromCartAction,
	deleteAllFromCart as deleteAllFromCartAction,
} from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/store/slices/hooks';

const useCart = () => {
	const dispatch = useAppDispatch();

	// type must add
	const addToCart = (product: any) => {
		dispatch(addToCartAction(product));
	};

	const deleteOneFromCart = (product: any) => {
		dispatch(deleteOneFromCartAction(product));
	};

	const deleteSingleItemFromCart = (product: any) => {
		dispatch(deleteSingleItemFromCartAction(product));
	};
	const deleteAllFromCart = () => {
		dispatch(deleteAllFromCartAction());
	};

	return {
		addToCart,
		deleteOneFromCart,
		deleteSingleItemFromCart,
		deleteAllFromCart,
	};
};

export default useCart;
