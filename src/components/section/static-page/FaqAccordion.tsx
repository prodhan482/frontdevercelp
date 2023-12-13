import React, { FC, ReactElement, ReactNode } from 'react';
import {
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Heading,
	AccordionPanelProps,
	useColorModeValue,
	Flex,
} from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

type AccordionProps = AccordionPanelProps & {
	title?: string;
	answer?: React.ReactNode;
};

const FaqAccordion: FC<AccordionProps> = ({ title, answer, ...props }) => {
	const titleColor = useColorModeValue('#333333', '#ECECE8'); //container.light and container.dark
	const answerColor = useColorModeValue('#444444', '#ECECE8'); //container.light and container.dark

	return (
		<AccordionItem
			px={{ base: '0px', lg: '16px' }}
			py={{ base: '10px', lg: '24px' }}
			{...props}
		>
			{({ isExpanded }) => (
				<>
					<Heading>
						<AccordionButton>
							<Flex
								w='full'
								gap='10px'
								alignItems='center'
								justifyContent='space-between'
							>
								<Flex
									as='span'
									textAlign='left'
									fontSize={{ base: '18px', lg: '26px' }}
									fontWeight='700'
									lineHeight='normal'
									color={titleColor}
									
								>
									{title ? title : 'Question'}
								</Flex>
								<Flex>
									{isExpanded ? (
										<FaMinus size='18px' />
									) : (
										<FaPlus size='18px' />
									)}
								</Flex>
							</Flex>
						</AccordionButton>
					</Heading>
					<AccordionPanel
						// pb='24px'
						fontSize={{ base: '14px', lg: '16px' }}
						fontWeight='400'
						lineHeight={{ base: '18.5px', lg: '24px' }}
						alignSelf='stretch'
						textAlign='justify'
						justifyContent='center'
						color={answerColor}
					>
						{answer ? answer : 'Answer'}
					</AccordionPanel>
				</>
			)}
		</AccordionItem>
	);
};

export default FaqAccordion;
