import type { NextPage } from 'next'

import Seo from '@/components/common/Seo/Seo'

const HomePage: NextPage = () => {
	return (
		<div>
			<Seo />
			<main>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</main>
		</div>
	)
}

export default HomePage
