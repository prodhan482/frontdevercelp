import { CardProps, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
type PointCardProps = CardProps & {
	heading?: string;
	value: string;
};
const DashboardPointCard: FC<PointCardProps> = ({heading, value, ...props}) => {
  const footer = useColorModeValue('footer.light', 'footer.dark');
  return (
		<Flex
			flexDirection='column'
      justify='space-between'
			gap='11px'
			borderRight='2px solid'
			borderColor={footer}
      lineHeight='normal'
      {...props}
		>
			<Text fontSize='16px' fontWeight='600'>
				{heading}
			</Text>
			<Text fontSize='18px' fontWeight='700'>
				{value}
			</Text>
		</Flex>
	);
}

export default DashboardPointCard