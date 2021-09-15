# Tailwind RTL - Plugin
[![GitHub](https://img.shields.io/github/license/vhidvz/tailwindcss-plugin-rtl)](https://github.com/vhidvz/tailwindcss-plugin-rtl)
[![npm](https://img.shields.io/npm/v/tailwindcss-plugin-rtl)](https://www.npmjs.com/package/tailwindcss-plugin-rtl)
[![Publish to NPM Package Registry](https://github.com/vhidvz/tailwindcss-plugin-rtl/actions/workflows/npm-ci.yml/badge.svg)](https://github.com/vhidvz/tailwindcss-plugin-rtl/actions/workflows/npm-ci.yml)

Tailwind RTL adds a custom `rtl` variant to your tailwind project,
letting you have custom CSS rules for RTL layouts.

**Note: This package does not specified by specific version of the tailwindcss**

# Getting started

Install the package via NPM.

```bash
# NPM
npm install tailwindcss-plugin-rtl --save-dev
```

Now, setup the plugin in your Tailwind config's `plugins` section.
Currently the plugin doesn't offer any configuration.

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  variants: {
    extend: {
      float: ['responsive', 'rtl'],
      clear: ['responsive', 'rtl'],
      margin: ['responsive', 'rtl'],
      padding: ['responsive', 'rtl'],
    },
  },
  plugins: [
    plugin(require('tailwindcss-plugin-rtl'))
  ]
}
```

# Usage

```html
<div class="text-green text-2xl pl-4 rtl:pr-4 rtl:pl-unset">
	Hello World.
</div>
```

# Utilities

| Class        | CSS                             |
|--------------|---------------------------------|
| rtl:mr-unset | margin-right: unset !important  |
| rtl:ml-unset | margin-left: unset !important   |
| rtl:pr-unset | padding-right: unset !important |
| rtl:pl-unset | padding-left: unset !important  |
