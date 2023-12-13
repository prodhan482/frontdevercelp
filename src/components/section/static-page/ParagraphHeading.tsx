import { Heading, HeadingProps } from '@chakra-ui/react';
import { FC } from 'react';

type ParagraphHeadingProps = HeadingProps & {
	children?: string;
};

const ParagraphHeading: FC<ParagraphHeadingProps> = ({
	children,
	...props
}) => {
	return (
		<Heading
			fontSize={{ base: '24px', lg: '32px' }}
			fontWeight='700'
			{...props}
		>
			{children}
		</Heading>
	);
};

export default ParagraphHeading;
