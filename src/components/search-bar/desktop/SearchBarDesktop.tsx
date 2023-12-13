import {
	Input,
	InputGroup,
	InputLeftElement,
	InputProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

type SearchBarDesktopProps = InputProps & {
	placeholder?: string;
	search?: string;
	setSearch?: any;
	ref?: any;
};

const SearchBarDesktop: FC<SearchBarDesktopProps> = ({
	placeholder,
	search,
	setSearch,
	ref,
	...props
}) => {
	return (
		<>
			<InputGroup>
				<InputLeftElement pointerEvents='none'>
					<FiSearch color='text.light' _dark={{ color: "text.dark" }} />
				</InputLeftElement>
				<Input
					ref={ref}
					ml='-4px'
					type='text'
					placeholder={placeholder || "Search"}
					borderRadius='30px'
					value={search}
					onChange={(e) => setSearch(e?.target?.value)}
					border='1px solid #CCC'
					{...props}
					_placeholder={{
						color: "logo.light",
					}}
				/>
			</InputGroup>
		</>
	);
};

export default SearchBarDesktop;
