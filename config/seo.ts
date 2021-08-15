import { NextSeoProps } from 'next-seo'

const seo: NextSeoProps = {
	title: 'My App',
	titleTemplate: '%s - My App',
	description: 'My App - description',
	openGraph: {
		title: 'My App | ...',
		description: 'My App - description',
		type: 'website',
		locale: 'fr_CA',
		url: process.env.SITE_URL,
		site_name: 'My App: ...',
		// images: [
		// 	{
		// 		url: '/card.png',
		// 		width: 800,
		// 		height: 600,
		// 		alt: 'Next.js Commerce',
		// 	},
		// ],
	},
	// twitter: {
	// 	handle: '@nextjs',
	// 	site: '@nextjs',
	// 	cardType: 'summary_large_image',
	// },
}

export default seo
