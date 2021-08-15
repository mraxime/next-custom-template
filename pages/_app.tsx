import '@/assets/main.css'
import '@/assets/chrome-bug.css'

import type { AppProps } from 'next/app'
import { FC, useEffect } from 'react'

import { Head } from '@/components/common'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		document.body.classList?.remove('loading')
	}, [])

	return (
		<>
			<Head />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
