module.exports = {
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	plugins: [
		require('@trivago/prettier-plugin-sort-imports'),
		require('prettier-plugin-tailwindcss'),
	],
	// prettier-plugin-sort-import
	importOrder: ['^@/(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}
