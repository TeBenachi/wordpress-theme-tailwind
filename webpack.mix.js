const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss(
	'./src/css/tailwind.css',
	'./style.css',
	tailwindcss('./tailwind.config.js')
);
