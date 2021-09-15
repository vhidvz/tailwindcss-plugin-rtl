# Tailwind RTL - Plugin
[![GitHub](https://img.shields.io/github/license/vhidvz/tailwindcss-plugin-rtl)](https://github.com/vhidvz/tailwindcss-plugin-rtl)
[![npm](https://img.shields.io/npm/v/tailwindcss-plugin-rtl)](https://www.npmjs.com/package/tailwindcss-plugin-rtl)
[![Publish to NPM Package Registry](https://github.com/vhidvz/tailwindcss-plugin-rtl/actions/workflows/npm-ci.yml/badge.svg)](https://github.com/vhidvz/tailwindcss-plugin-rtl/actions/workflows/npm-ci.yml)

Tailwind RTL plugin adds a custom `rtl` variant and utilities to your tailwind project,
letting you have to custom CSS rules for RTL layouts.

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
<div class="fixed left-20 right-20">
	<p class="float-left rtl:float-right pl-4 rtl:pr-4 rtl:pl-unset">Hello World.</p>
</div>
```

**Notes:**
  - ```float``` and ```clear``` are supported by utilities.
  - ```left``` and ```right``` positioned elements support built-in RTL. [reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right#declaring_both_left_and_right)

# Utilities

 **Class**       | **CSS**                         
-----------------|---------------------------------
 ```rtl:mr-unset```    | ```margin-right: unset !important```
 ```rtl:ml-unset```    | ```margin-left: unset !important```
 ```rtl:pr-unset```    | ```padding-right: unset !important```
 ```rtl:pl-unset```    | ```padding-left: unset !important```
 ```rtl:float-right``` | ```float: right !important```
 ```rtl:float-left```  | ```float: left !important```
 ```rtl:clear-right``` | ```clear: right !important```
 ```rtl:clear-left```  | ```clear: left !important```
