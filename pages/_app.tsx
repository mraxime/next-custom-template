import '@/assets/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import type { NextPageWithLayout } from '@/types'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</>
	)
}

export default MyApp
