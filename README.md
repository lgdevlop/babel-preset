# @intelie/babel-preset

> Babel preset for Typescript projects

## Install

Using npm:

```sh
npm install --save-dev @intelie/babel-preset
npx install-peerdeps@2.0.1 --dev --only-peers @intelie/babel-preset
```

or using yarn:

```sh
yarn add @intelie/babel-preset --dev
npx install-peerdeps@2.0.1 --dev --only-peers --yarn @intelie/babel-preset
```

## Description

This preset has several plugins and presets.


### Presets

    @babel/env
    @babel/react
    @babel/flow
    @babel/preset-typescript
    const-enum

### Plugins

    babel-plugin-styled-components


## Usage


`.babelrc`

```json
{
  "presets": ["@intelie/babel-preset"]
}
```


## Developing

Change `babel.config.js` and it will be served as main file of the library.