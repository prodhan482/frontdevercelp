import { Skeleton, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';

const item = (
	<>
		<Skeleton w='full' h='10px' />
		<Skeleton w='90%' h='10px' />
		<Skeleton w='90%' h='10px' />
		<Spacer h='16px' />
	</>
);

const AccordionSkeleton = () => {
	return (
		<Stack align='flex-start' spacing='8px' w='80%'>
			{item}
			{item}
			{item}
			{item}
			{item}
		</Stack>
	);
};

export default AccordionSkeleton;
