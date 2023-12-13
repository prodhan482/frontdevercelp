import { Flex, FlexProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type FormContainerProps = FlexProps & {
	children: ReactNode;
};

const FormContainer: FC<FormContainerProps> = ({ children, ...props }) => {
	return (
		<Flex
			position='relative'
			minH='100vh'
			display='flex'
			justifyContent='center'
			alignItems='center'
			{...props}
		>
			{children}
		</Flex>
	);
};

export default FormContainer;
