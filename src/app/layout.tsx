import './globals.css';
import Providers from './Providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Bazar365',
	description: 'This is the Bazar365 website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>Bazar365</title>
			</head>
			<body style={{overflowX: "hidden"}}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
