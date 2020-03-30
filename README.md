# @intelie/babel-preset

> Babel preset for Typescript projects

## Install

Using npm:

```sh
npm install --save-dev @intelie/babel-preset
```

or using yarn:

```sh
yarn add @intelie/babel-preset --dev
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

    @babel/plugin-transform-flow-strip-types
    @babel/plugin-proposal-optional-chaining
    @babel/plugin-proposal-class-properties
    @babel/plugin-proposal-object-rest-spread
    @babel/plugin-transform-async-to-generator
    @babel/plugin-syntax-dynamic-import
    @babel/plugin-transform-modules-commonjs


## Usage


`.babelrc`

```json
{
  "presets": ["@intelie/babel-preset"]
}
```
