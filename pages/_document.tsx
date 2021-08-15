import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="fr_CA">
				<Head />
				<body className="loading">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
