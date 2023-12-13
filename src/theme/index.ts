'use client';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// 2. Add color mode config
const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// 3. extend the theme
const colors = {
	bg: {
		light: '#F3F3EF',
		dark: '#222222',
	},
	text: {
		light: '#1D1D21',
		dark: '#ECECE8',
	},
	primaryDark: {
		light: '#11823B',
		dark: '#4ABD88',
	},
	primaryLight: {
		light: '#0DB04B',
		dark: '#4ABD88',
	},
	container: {
		light: '#FFFFFF',
		dark: '#000000',
	},
	logo: {
		light: '#858693',
		dark: '#858693',
	},
	'logo-secondary': {
		light: '#0DB04B',
		dark: '#FFFFFF',
	},
	'hero-slider': {
		light: '#4ABD88',
	},
	footer: {
		light: '#ECECE8',
		dark: '#000000',
	},
	'banner-text': {
		light: '#7A4283',
		dark: '#E1ADE9',
	},
	border: {
		light: '#E1E1E1',
		dark: '#222222',
	},
	'bg-light': {
		light: '#E4F9D8',
		dark: 'rgba(228, 249, 216, 0.2)',
	},
	'line-through': {
		light: '#744210',
		dark: '#F3F3EF',
	},
	'dark-primary': {
		light: '#001E00',
		dark: '#F3F3EF',
	},
	'shaded-text': {
		light: '#444444',
		dark: '#EBEBEB',
	},
	'bth-stroke': {
		light: '#11823B',
		dark: '#11823B',
	},
	stroke: {
		light: '#E0E0E0',
		dark: '#E0E0E0',
	},
	'new-green': {
		light: '#94BB50',
		dark: '#94BB50',
	},
	red: {
		light: '#FF6B6E',
		dark: '#FF6B6E',
	},
	input: {
		light: '#F5F5F5',
		dark: '#111111',
	},
};

const components = {
	Button: {
		baseStyle: {},
		variants: {},
	},
	Text: {
		baseStyle: {
			color: 'text.light',
			_dark: {
				color: 'text.dark',
			},
		},
	},
	Stack: {
		baseStyle: {},
		variants: {
			'product-card': {
				bgColor: 'container.light',
				padding: '16px',
				boxShadow: '0px 5px 20px 0px rgba(68, 68, 68, 0.05)',
				borderRadius: '8px',
				_dark: {
					bgColor: 'container.dark',
				},
			},
		},
	},
	Box: {
		baseStyle: {},
		variants: {
			test: {
				bgColor: 'red',
			},
		},
	},
	Tag: {
		baseStyle: {
			fontSize: '12px',
			fontWeight: '700',
		},
	},
};
const shadows = {
	'floating-cart-shadow': '2px 4px 20px rgba(137, 201, 121, 0.58)',
	'subtle-shadow': '0px 5px 20px 0px rgba(68, 68, 68, 0.05)',
};

// 6. Add Breakpoints
const breakpoints = {
	base: '0px',
	sm: '480px',
	md: '768px',
	lg: '992px',
	xl: '1280px',
};

export const theme = extendTheme({
	config,
	colors,
	components,
	breakpoints,
	shadows,
});
