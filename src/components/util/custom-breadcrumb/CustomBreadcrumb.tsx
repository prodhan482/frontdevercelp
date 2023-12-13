import React, { FC } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbItemProps, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

type CustomBreadcrumbProps = {
	link?: string;
};

const CustomBreadcrumb: FC<CustomBreadcrumbProps> = ({ link }) => {
	const router = useRouter();
	const linkArray = link && link.split('/').filter(item => item !== '');

	const handleRoute = () => {};

	return (
		<>
			{linkArray && (
				<Breadcrumb style={{ alignItems: 'center' }}>
					<CustomBreadcrumbItem
						onClick={() => {
							router.push('/');
						}}
					>
						home
					</CustomBreadcrumbItem>
					{linkArray.map((item, index) => (
						<CustomBreadcrumbItem
							key={index}
							isCurrentPage={index === linkArray.length - 1}
							onClick={handleRoute}
						>
							{item}
						</CustomBreadcrumbItem>
					))}
				</Breadcrumb>
			)}
		</>
	);
};

export default CustomBreadcrumb;

type CustomBreadcrumbItemProps = BreadcrumbItemProps & {
	children: string;
	isCurrentPage?: boolean;
};

const CustomBreadcrumbItem: FC<CustomBreadcrumbItemProps> = ({
	isCurrentPage,
	children,
	...rest
}) => {
	return (
		<BreadcrumbItem {...rest}>
			<Text
				fontSize={isCurrentPage ? '17px' : '16px'}
				fontWeight={isCurrentPage ? '600' : '400'}
				color={isCurrentPage ? 'primaryDark.light' : 'text.light'}
				_dark={{
					color: isCurrentPage ? 'primaryDark.light' : 'text.dark',
				}}
				_hover={{
					color: 'primaryLight.dark',
					_dark: {
						color: 'primaryDark.dark',
					},
				}}
				cursor='pointer'
				userSelect='none'
			>
				{children}
			</Text>
		</BreadcrumbItem>
	);
};
