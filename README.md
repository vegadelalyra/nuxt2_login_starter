# Nuxt v2 Starter + Vuetify Setup + Sign In WebApp 

## How to start a nuxt v2 brand new project ? [CLI]

```bash
# Run the Nuxt Starter Templates Community CLI
$ npx nuxi init [-t --template template] [project-name] 

# e.g. Get started with a minimal Nuxt v2 template
$ npx nuxi init -t v2 my-nuxt2-app

```

## How to implement Vuetify ? [CLI]

Once you have created your Nuxt project, move to the project's folder to add vuetify
```bash
$ cd my-nuxt2-app
$ vue add vuetify
```

### ...and that's not all! 

## ./nuxt.config.js

Add these lines to your nuxt.config.js file to run your vuetify options on client side without errors.
```bash
# ./nuxt.config.js
  ssr: false,
  buildModules: [["@nuxtjs/vuetify"]],
  vuetify: {
    optionsPath: "./vuetify.options.js",
  },
```
## ./vuetify.options.js

Create your vuetify options file at the root folder project.

You can install and import any required libraries
```bash
npm i minify-css-string
```

### vuetify.options.js
```bash
import minifyTheme from "minify-css-string";
import colors from "vuetify/lib/util/colors";
export default {
  theme: {
    options: {
      # // Implement cache to optimize minifyTheme effect
      minifyTheme,
      themeCache: {
        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      }
    }
  }
themes: {}
}

```
With this, you shall be able to run your Nuxt 2 + Vuetify app!
---

Below, default README Nuxt 2 stuff.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [documentation](https://nuxtjs.org).
