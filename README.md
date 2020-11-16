Underscore _s theme + tailwindcss

(1) Install _s theme, and cd into the theme

(2) Delete package.json file

```
npm init -y
```

```
npm install dir-archiver
```

```
npm install tailwindcss -D
```

Create tailwind.config.js file 
```
./node_modules/.bin/tailwind init
```

```
npm install laravel-mix
```
```
mkdir src
```

```
cd src && mkdir css 
```

```
cd ..
```

```
cp style.css ./src/css/
```
Remove # Generic section (normalize and box sizing)  from just copied /src/css/style.css. Tailwind already has normalize in it

```
cd src/css
```
```
touch tailwind.css && open tailwind.css
```
Add below to tailwind.css
```
/* purgecss start ignore */
@import 'style.css';
@tailwind base;
@tailwind components;
/* purgecss end ignore */

/* Any custom style goes below this line */

/* End custom style here */

@tailwind utilities;
```

Navigate to the theme root directory
```
cd ..
```

```
touch webpack.mix.js && open webpack.mix.js
```

```
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('./src/css/tailwind.css', './style.css',
    tailwindcss('./tailwind.config.js')
);
```

```
npm install cross-env
```

Add to package.json

```
 "scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "watch-poll": "npm run watch -- --watch-poll",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "bundle": "dir-archiver --src . --dest ../_s.zip --exclude .DS_Store .stylelintrc.json .eslintrc .git .gitattributes .github .gitignore README.md composer.json composer.lock node_modules vendor package-lock.json package.json .travis.yml phpcs.xml.dist sass style.css.map"
},

```

```
npm install tailwindcss
```

```
npx tailwind init
```

```
npm install laravel-mix-purgecss --save-dev
```

Update tailwind.config.js

```
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


```




