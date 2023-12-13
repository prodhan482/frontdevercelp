import { Flex, FlexProps, Image, ImageProps } from "@chakra-ui/react";
import { motion, useAnimate, useTime, useTransform } from "framer-motion";
import React, { FC } from "react";

type RecycleImageProps = FlexProps & {};
const RecycleImage: FC<RecycleImageProps> = ({ ...props }) => {
	const [scope, animate] = useAnimate();
	const time = useTime();

	const rotate = useTransform(
		time,
		[0, 4000], // For every 4 seconds...
		[0, 360], // ...rotate 360deg
		{ clamp: false }
	);
	const x = useTransform(
		time,
		[0, 4000], // For every 4 seconds...
		[-50, 50], // ...rotate 360deg
		{ clamp: true }
	);
	const y = useTransform(
		time,
		[0, 4000], // For every 4 seconds...
		[-50, 50], // ...rotate 360deg
		{ clamp: true }
	);

	// React.useEffect(() => {
	// 	animate(
	// 		scope.current,
	// 		{ rotate: rotate, x: x, y: y },
	// 		{ delay: 3, duration: 2 }
	// 	);
	// }, []);
	return (
		<Flex
			ref={scope}
			as={motion.div}
			// whileHover={{ x: -50, y: -50, rotate: 180, transition: { duration: 1 } }}
			initial={{
				x: 0,
				y: 0,
				rotate: 0,
			}}
			animate={{
				x: 50,
				y: 50,
				rotate: 360,
				transition: { duration: 6, ease: "linear" },
			}}
			position='absolute'
			// style={{ rotate: rotate, x: x, y: y } as any}
			{...props}
			maskImage="url('/recycle/recycle.svg')"
		>
			<Image cursor={"pointer"} src='/recycle/recycle.svg' />
		</Flex>
	);
};

export default RecycleImage;
