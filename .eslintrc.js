/** @type {import('@types/eslint').Linter.BaseConfig} */

module.exports = {
	extends: [
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	plugins: ['simple-import-sort'],
	rules: {
		'react/no-unescaped-entities': 'off',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'sonarjs/no-duplicate-string': 'off',
		'sonarjs/no-small-switch': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prevent-abbreviations': 'off',
	},
}
