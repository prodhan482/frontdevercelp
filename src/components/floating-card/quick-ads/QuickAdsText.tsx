import { Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

type QuickAdsTextProps = {
	isAdsOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuickAdsText: FC<QuickAdsTextProps> = ({ setIsOpen, isAdsOpen }) => {
	return (
		<Flex
			flex={1}
			as={motion.div}
			zIndex={8}
			key='adds-close'
			flexDir='column'
			gap='64px'
			bgColor='dark-primary.light'
			onClick={() => setIsOpen(true)}
			w='32px'
			justify='flex-end'
			cursor='pointer'
			align='center'
			position='fixed'
			left='-32px'
			top='0'
			bottom='0'
			// exit={{ x: 350, transition: { duration: 0.7 } }}
			display={{ base: 'none', md: isAdsOpen ? 'none' : 'flex' }}
			userSelect='none'
			//🔥 new animations
			// animate={
			// 	{
			// 		y: [0, 30, 0],
			// 		transition: { repeat: "Infinity", duration: 5, ease: "linear" },
			// 	} as any
			// }
		>
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			{/* clone */}
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			<Text color='container.light' transform='rotate(-90deg)' whiteSpace='nowrap'>
				Feel the Bazar365 taste
			</Text>
			<Image w='20px' src='/logo/bazar-logo-small.svg' alt='logo-4' my={8} />
			{/* clone end */}
		</Flex>
	);
};

export default QuickAdsText;
