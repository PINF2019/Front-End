# votUCAweb

## Description

This repository is for a project of the subject _Informatic Projects_, that is about a digitatilzation of elections and votes.

In the University of Cadiz, we have differents kind of votes, and we will provide a web app that allow us to vote online.

## Prerequisites

### Node

If you don't have node yet, install using

- [nvm on linux](https://github.com/nvm-sh/nvm#installation-and-update)

  - nvm install --lts

- [choco on windows](https://chocolatey.org/)

  - choco install nodejs-lts

### Yarn

```bash
$ npm -g install yarn
```

## Installation

```bash
$ yarn install
```

## Running the app

Before star run the backend following their [readme](https://github.com/PINF2019/backend)

```
yarn start
```

## Codegen

If you add a query on `src/graphql/documents` run the following command to generate the hooks.

```
yarn codegen
```

## Code style

This project use [airbnd](https://github.com/airbnb/javascript) code style

### Formatting

This project has configured `eslint + prettier` to follow the standardjs code style

If you use VSCode add the following to your settings to autoformat on save

```
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
```

## How to commit

This project is going to use [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) as commit format to help us create changelogs

#### Example

```
git commit -m "chore: update dependencies"
```

#### If you don't know the coventionalcommits syntax:

Install commitizen as global utility

```
yarn global add commitizen cz-conventional-changelog
```

Create a `.czrc` file in your home directory, with `path` referring to cz-conventional-changelog

```
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

On windows copy the following line to the PowerShell:

```
write-output '{ "path": "cz-conventional-changelog" }'  | out-file $env:HOME/.czrc
```

Commiting with commitizen prompt

<p align="center">
<img src="https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png">
<p>

> with this approach use always the terminal
>
> If the commands doesn't work add the following line `export PATH="$PATH:$(yarn global bin)"` to your .bashrc or .zshrc

## Built With

### [TypeScript](http://www.typescriptlang.org/)

TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces

### [GraphQL](https://graphql.org/learn/)

GraphQL is a syntax that describes how to ask for data, and is generally used to load data from a server to a client

### [Apollo Client](https://www.apollographql.com/docs/react/)

Apollo Client is a complete state management library for JavaScript apps. Simply write a GraphQL query, and Apollo Client will take care of requesting and caching your data, as well as updating your UI.

### [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

React Router is a collection of navigational components that compose declaratively with your application.

### [React](https://reactjs.org/)

A JavaScript library for building user interfaces

### [Ant Design](https://ant.design/)

A design system with values of Nature and Determinacy for better user experience of enterprise applications

### [Formik](https://jaredpalmer.com/formik)

Build forms in React, without the tears 😭

### [Formik Ant](https://github.com/jannikbuschke/formik-antd)

Simple declarative bindings for Ant Design and Formik.
