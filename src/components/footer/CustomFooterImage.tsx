import { Image, ImageProps } from '@chakra-ui/react';

import React, { FC } from 'react';

type CustomFooterImageProps = ImageProps & {
	src: string;
};

const CustomFooterImage: FC<CustomFooterImageProps> = ({ src, ...props }) => {
	return <Image userSelect='none' h='28px' objectFit='contain' src={src} alt={src} {...props} />;
};

export default CustomFooterImage;
