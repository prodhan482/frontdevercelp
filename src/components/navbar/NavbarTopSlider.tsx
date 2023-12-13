import { FC, ReactNode, useEffect, useRef } from 'react';
import { Flex, FlexProps, Text, TextProps, useDimensions } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

type NavbarTopSliderProps = FlexProps & {};

const NavbarTopSlider: FC<NavbarTopSliderProps> = ({ ...props }) => {
	const containerRef = useRef(null);
	return (
		<Flex
			userSelect='none'
			bgColor='hero-slider.light'
			px='24px'
			align='center'
			justify='center'
			h='36px'
			overflowX={"clip"}
			{...props}
		>
			<Flex
				as={Marquee}
				align='center'
				gap={{
					base: "8px",
					md: "32px",
				}}
				ml='-24px'
				flex={5}
				ref={containerRef}
				zIndex={100}
				// animate={
				// 	{
				// 		x: [0, -300, 0],
				// 		transition: { repeat: "Infinity", duration: 10, ease: "linear" },
				// 	} as any
				// }
			>
				<NavbarTopItem>
					Free shipping on order value more than BDT. 2000
				</NavbarTopItem>
				<NavbarTopItem>Return Plastic to Get Reward Points</NavbarTopItem>
				<NavbarTopItem>Get Same Day Delivery</NavbarTopItem>
				<NavbarTopItem>
					Free shipping on order value more than BDT. 2000
				</NavbarTopItem>
				<NavbarTopItem>Return Plastic to Get Reward Points</NavbarTopItem>
				<NavbarTopItem>Get Same Day Delivery</NavbarTopItem>
				{/* clone */}
				<NavbarTopItem>
					Free shipping on order value more than BDT. 2000
				</NavbarTopItem>
				<NavbarTopItem>Return Plastic to Get Reward Points</NavbarTopItem>
				<NavbarTopItem>Get Same Day Delivery</NavbarTopItem>
				<NavbarTopItem>
					Free shipping on order value more than BDT. 2000
				</NavbarTopItem>
				<NavbarTopItem>Return Plastic to Get Reward Points</NavbarTopItem>
				<NavbarTopItem>Get Same Day Delivery</NavbarTopItem>
			</Flex>

			<Flex
				flex={1}
				justify='center'
				bgColor='hero-slider.light'
				zIndex={120}
				position='absolute'
				right='0'
				px='8px'
			>
				<NavbarTopItem mr='0'>Find us | Help | Contact Us</NavbarTopItem>
			</Flex>
		</Flex>
	);
};

export default NavbarTopSlider;

type NavbarTopTextProps = TextProps & {
	children: ReactNode;
};
const NavbarTopItem: FC<NavbarTopTextProps> = ({ children, ...props }) => {
	return (
		<Text
			whiteSpace='nowrap'
			color='bg.light'
			fontSize='12px'
			fontWeight='600'
			mr={{
				base: '8px',
				md: '16px',
			}}
			letterSpacing=' -0.12px'
			_dark={{
				color: 'bg.dark',
			}}
			{...props}
		>
			{children}
		</Text>
	);
};
