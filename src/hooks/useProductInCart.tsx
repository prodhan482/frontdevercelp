import { useAppSelector } from "@/store/slices/hooks";
import React, { useEffect, useState } from "react";

const useProductInCart = (id: string) => {
	const [qty, setQty] = useState(0);
	const cart = useAppSelector((state) => state.cart);
	useEffect(() => {
		const item = cart.cartItems.find((item: any) => item.id === id);
		if (item) {
			setQty(item.quantity);
		} else {
			setQty(0);
		}
	}, [id, cart.cartItems]);
	return { qty };
};

export default useProductInCart;
