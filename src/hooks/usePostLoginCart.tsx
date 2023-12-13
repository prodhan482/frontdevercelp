import {
	useAddToCartMutation,
	useCreateQuoteMutation,
} from "@/store/services/cartApi";
import { setQuoteId } from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/slices/hooks";
import { create } from "domain";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const usePostLoginCart = () => {
	const [createQuoteTrigger, createQuoteResult] = useCreateQuoteMutation();
	const [addToCart, addToCartResult] = useAddToCartMutation();
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.cart);
	const [hasQuoteId, setHasQuoteId] = React.useState(
		cart.quoteId ? true : false
	);

	useEffect(() => {
		if (createQuoteResult.isSuccess) {
			dispatch(setQuoteId(createQuoteResult.data));
		}
	}, [createQuoteResult]);
	useEffect(() => {}, [cart.quoteId]);

	const postCartWithQuote = () => {
		if (cart.cartItems.length > 0) {
			// console.log("fetching");
			cart.cartItems.forEach((item: any) => {
				addToCart({
					sku: item?.id,
					qty: item.quantity,
					quoteId: cart.quoteId,
				});
			});
		}
	};
	const createQuote = () => {
		createQuoteTrigger(null);
	};
	return { postCartWithQuote, createQuote, hasQuoteId };
};

export default usePostLoginCart;
