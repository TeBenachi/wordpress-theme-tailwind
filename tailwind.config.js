const plugin = require('tailwindcss/plugin');

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		// To remove unused styles. It doesn't minify. To minify, refer to webpack.mix.js
		enabled: true,
		content: ['./*.php', './template-parts/*.php', './inc/*.php', './js/*.js'],
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
