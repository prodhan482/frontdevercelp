import { Box, Flex, FlexProps, BoxProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

/**
 * Pagination Component
 * Version: 0.1
 * Author: Kazi Ehsanul Mubin
 * Changelog : 0.1 - initial release
 * @param {page} number - current page number
 * @param {setPage} function - function to set page number
 * @param {totalPages} number - total number of pages
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Pagination page={page} setPage={setPage} totalPages={totalPages} />
 * @todo
 * 1. add prop types
 * 2. add tests
 * 3. add more features
 * 4. add more styles
 * 5. add more comments
 * 6. add more examples
 * 7. add more documentation
 *
 */

type PaginationProps = FlexProps & {
	page: number;
	setPage: (page: number) => void;
	totalPages: number;
};

const Pagination: FC<PaginationProps> = ({ page, setPage, totalPages }) => {
	const goPrev = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const goNext = () => {
		if (page < totalPages) {
			setPage(page + 1);
		}
	};

	return (
		<Flex userSelect='none' w='full' justify='center' color='#000' fontWeight='500'>
			<Flex alignItems='center' gap={8}>
				{/* <Text>page: {page}</Text> */}
				<Text
					onClick={goPrev}
					color={page === 1 ? 'gray' : '#000'}
					flex={1}
					cursor={page === 1 ? 'not-allowed' : 'pointer'}>
					Previous
				</Text>
				<Flex flex={5} align='center' justify='space-evenly' gap='8px'>
					{
						// total page is less than 5, show all numbers
						totalPages <= 5 ? (
							<>
								{Array.from({ length: totalPages }, (_, i) => i + 1).map((number, index) => (
									<PaginationItem key={index} number={number} page={page} setPage={setPage} />
								))}
							</>
						) : (
							// if total page is more than 5 sow only 5 numbers

							<>
								{page > 3 && (
									<>
										<PaginationItem number={1} page={page} setPage={setPage} />
										<Text fontSize='24px'>...</Text>
									</>
								)}
								{page > 1 && page < totalPages - 2 && (
									<PaginationItem number={page - 1} page={page} setPage={setPage} />
								)}
								{page < totalPages - 2 && (
									<>
										<PaginationItem number={page} page={page} setPage={setPage} />
										<PaginationItem number={page + 1} page={page} setPage={setPage} />
										<PaginationItem number={page + 2} page={page} setPage={setPage} />
									</>
								)}
								{page > totalPages - 3 && (
									<>
										<PaginationItem number={totalPages - 3} page={page} setPage={setPage} />
										<PaginationItem number={totalPages - 2} page={page} setPage={setPage} />
										<PaginationItem number={totalPages - 1} page={page} setPage={setPage} />
										<PaginationItem number={totalPages} page={page} setPage={setPage} />
									</>
								)}
								{page < 2 && <PaginationItem number={page + 3} page={page} setPage={setPage} />}
								{/* {page < totalPages - 3 && (
                  <>
                    <Text fontSize='24px'>...</Text>
                    <PaginationItem
                      number={totalPages}
                      page={page}
                      setPage={setPage}
                    />
                  </>
                )} */}
							</>
						)
					}
				</Flex>
				<Text
					color={page === totalPages ? 'gray' : '#000'}
					flex={1}
					cursor={page === totalPages ? 'not-allowed' : 'pointer'}
					onClick={goNext}>
					Next
				</Text>
			</Flex>
		</Flex>
	);
};

export default Pagination;

type PaginationItemProps = FlexProps & {
	number: number;
	page: number;
	setPage: (page: number) => void;
};

const PaginationItem: FC<PaginationItemProps> = ({ number, page, setPage, ...props }) => {
	return (
		<Flex
			p='7px 13px'
			borderRadius='4px'
			fontSize='20px'
			textAlign='center'
			cursor='pointer'
			border={`1px solid ${number === page ? '#78B4C7' : 'transparent'}`}
			bgColor={number === page ? 'primaryDark.light' : 'transparent'}
			color={number === page ? '#fff' : '#000'}
			_hover={{
				border: '1px solid #454545',
				bgColor: 'transparent',
				color: '#000',
			}}
			onClick={() => setPage(number)}
			{...props}>
			{number}
		</Flex>
	);
};
