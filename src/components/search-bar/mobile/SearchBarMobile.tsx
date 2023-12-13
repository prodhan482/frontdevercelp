import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBarMobile = () => {
	return (
		<IconButton
			display={{ base: 'block', lg: 'none' }}
			aria-label='search-icon-small'
			variant='ghost'
			p='0'
			_focus={{
				bgColor: 'transparent',
			}}
		>
			<FiSearch size='22px' color='text.light' _dark={{ color: 'text.dark' }} />
		</IconButton>
	);
};

export default SearchBarMobile;
