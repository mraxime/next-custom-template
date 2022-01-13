import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="fr-CA">
			<Head>
				{/* FAVICON */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				{/* FONTS PRELOAD */}
				<link
					rel="preload"
					href="/fonts/Iconic/Iconic-Regular.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Iconic/Iconic-Stencil-Regular.woff2"
					as="font"
					crossOrigin=""
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
