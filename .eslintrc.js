module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true,
	},
	ignorePatterns: ['dist/**'],
	overrides: [
		{
			files: ['**/*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json',
				sourceType: 'module',
			},
			plugins: ['@typescript-eslint'],
			extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
			rules: {},
		},
	],
};

