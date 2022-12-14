# [@ahdcreative/eslint-config-ahd](https://www.npmjs.com/package/@ahdcreative/eslint-config-ahd) [<img src="https://raw.githubusercontent.com/wagtail/eslint-config-wagtail/main/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

[![npm](https://img.shields.io/npm/v/@ahdcreative/eslint-config-ahd.svg)](https://www.npmjs.com/package/@ahdcreative/eslint-config-ahd) [![CI](https://github.com/ahdcreative/eslint-config-ahd/actions/workflows/node.yml/badge.svg?branch=main)](https://github.com/ahdcreative/eslint-config-ahd/actions/workflows/node.yml)

> Shareable ESLint config for AHDCreative, based on airbnb/javascript.

The package provides AHDCreative .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including Airbnb's config
(which has ECMAScript 6 and React). It requires `eslint`, as well as the configuration’s peer dependencies.

```sh
# npm v7 and up:
npm install --save-dev eslint-config-ahd@latest
# npm v6 and below:
npx install-peerdeps --dev eslint-config-ahd@latest
```

## Links

- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)

## Code style

Write JavaScript according to the [Airbnb Styleguide](https://github.com/airbnb/javascript), with some exceptions:

- Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person’s environment.
- We accept `snake_case` in object properties, such as `ajaxResponse.page_title`, however camelCase or UPPER_CASE should be used everywhere else.

## Contribution Guidelines

### Install

- Required [Node](https://nodejs.org)
- We recommend using [nvm](https://github.com/creationix/nvm)
- Clone the project on to your computer
- Run `nvm install` to ensure you have the correct Node version
- Run `npm install` to install project dependencies
- Ensure your editor is set up to use [editorconfig](https://editorconfig.org/), [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)

### Development

- Run `nvm use` to set Node to the correct version
- Run tests via `npm run test`
- Run linting via `npm run lint`
- Run preflight checks before commiting final code via `npm run preflight`
- Note: When working with the rule set, only modify the `index.js` file, not the `.eslintrc` file as it is for local linting only
