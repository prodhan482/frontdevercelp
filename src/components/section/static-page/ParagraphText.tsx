import { Text, TextProps } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type ParagraphTextProps = TextProps & {
	children?: string;
};

const ParagraphText: FC<ParagraphTextProps> = ({
    children, ...props
}) => {
  return (
		<Text color='#444' fontSize='16px' fontWeight='400' {...props}>
			{children}
		</Text>
	);
};

export default ParagraphText;
