const path = require('path')

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((file) => path.relative(process.cwd(), file))
		.join(' --file ')}`

module.exports = {
	'**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'yarn prettier:fix'],
	'*.{md,json,yml}': ['prettier --write'],
}
