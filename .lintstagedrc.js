const shellEscape = (s) => `'${s.replace(/'/g, "'\\''")}'`;

module.exports = {
	'*.php': (files) => [
		`vendor/bin/phpcs --standard=phpcs.xml.dist ${files.map(shellEscape).join(' ')}`,
		'vendor/bin/phpstan analyse --no-progress --memory-limit=1G',
	],
	'src/blocks/**/*.{js,jsx}': (files) => [
		`wp-scripts lint-js ${files.map(shellEscape).join(' ')}`,
	],
};
