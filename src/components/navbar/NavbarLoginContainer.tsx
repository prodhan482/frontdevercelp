import { useAppSelector } from '@/store/slices/hooks';
import React, { useEffect, useState } from 'react';
import UserDropdown from './UserDropdown';
import LoginButton from '../util/custom-button/LoginButton';
import Link from 'next/link';

const NavbarLoginContainer = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const login = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (login.loggedIn) {
			setIsLoggedIn(login.loggedIn);
		}
	}, [login]);
	return isLoggedIn ? (
		<UserDropdown />
	) : (
		<Link href='/auth/login'>
			<LoginButton />
		</Link>
	);
};

export default NavbarLoginContainer;
