# Tailwind RTL
![GitHub](https://img.shields.io/github/license/vhidvz/tailwindcss-plugin-rtl)
![npm](https://img.shields.io/npm/v/tailwindcss-plugin-rtl)

Tailwind Direction adds a custom `rtl` variant to your tailwind project,
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
<div class="text-green text-2xl pl-4 rtl:pr-4">
	Hello World.
</div>
```