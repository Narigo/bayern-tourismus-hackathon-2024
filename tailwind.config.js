import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      dropShadow:{
        'bold': '0 0 5px rgba(0, 0, 0, 1)',
      },
			colors: {
				backgroundGreen: '#8DBE79',
				backgroundBeige: '#F8F0E3',
				primary: '#E74C3C',
				body: '#5D4037'
			},
			fontFamily: {
				headline: ['"Great Vibes"', 'cursive'],
				altHeadline: ['"Old Standard TT"', 'serif'],
				body: ['"Roboto"', '"Open Sans"', 'sans-serif'],
				altBody: ['"Merriweather"', 'serif']
			}
		}
	},
	typography: (theme) => ({
		DEFAULT: {
			css: {
				color: theme('colors.body'),
				h1: {
					fontFamily: theme('fontFamily.headline'),
					color: theme('colors.body')
				},
				h2: {
					fontFamily: theme('fontFamily.headline'),
					color: theme('colors.body')
				},
				h3: {
					fontFamily: theme('fontFamily.headline'),
					color: theme('colors.body')
				},
				p: {
					fontFamily: theme('fontFamily.body'),
					color: theme('colors.body')
				},
				a: {
					color: theme('colors.primary'),
					'&:hover': {
						color: theme('colors.primary')
					}
				}
			}
		}
	}),
	plugins: [typography]
};
