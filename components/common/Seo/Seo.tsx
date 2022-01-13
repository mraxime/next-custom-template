import { NextSeo, NextSeoProps } from 'next-seo'
import type { FC } from 'react'

const Seo: FC<NextSeoProps> = ({
	title = 'Home',
	description = 'Long description...',
	...rest
}) => {
	return (
		<NextSeo
			title={title}
			titleTemplate="%s | {{your_short_description}}"
			description={description}
			// canonical="https://www.canonical.ie/"
			openGraph={{
				url: process.env.SITE_URL,
				title: title,
				description: description,
				type: 'website',
				locale: 'fr-CA',
				site_name: '{{your_site_name}}: {{your_short_description}}',
				// 	images: [
				// 		{
				// 			url: 'https://www.example.ie/og-image-01.jpg',
				// 			width: 800,
				// 			height: 600,
				// 			alt: 'Og Image Alt',
				// 			type: 'image/jpeg',
				// 		},
				// 		{
				// 			url: 'https://www.example.ie/og-image-02.jpg',
				// 			width: 900,
				// 			height: 800,
				// 			alt: 'Og Image Alt Second',
				// 			type: 'image/jpeg',
				// 		},
				// 		{ url: 'https://www.example.ie/og-image-03.jpg' },
				// 		{ url: 'https://www.example.ie/og-image-04.jpg' },
				// 	],
			}}
			// twitter={{
			// 	handle: '@handle',
			// 	site: '@site',
			// 	cardType: 'summary_large_image',
			// }}
			{...rest}
		/>
	)
}

export default Seo
