module.exports = {
	'**/*.{js,ts,tsx}': [
		(filenames) =>
			`next lint --fix --file ${filenames
				.map((file) => file.split(process.cwd())[1])
				.join(' --file ')}`,
		'yarn prettier:fix',
		'rustywind --write',
	],
	'*.{md,json,yml}': ['prettier --write'],
}
