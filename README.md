# generator-react-oneflare [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
>

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-oneflare using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-oneflare
```

## Creating Your Component

Generate your component by running:
```bash
yo react-oneflare AppName ComponentName
```
in the root of your project.

This will locate the react app in your project named "AppName" and create a component named "ComponentName".

Say you wanted to create a component named "BusinessDetails" inside the react app named "BusinessRegistration".
You simply run
```bash
yo react-oneflare BusinessRegistration BusinessDetails
```

## Creating a Class Component
By default, generator-react-oneflare creates functional components. If you want to create a class component you simply need to add ```bash
--class``` to the end of your command.

If you wanted your "BusinessDetails" component to be a class component for example, you would simply run:
```bash
  yo react-oneflare BusinessRegistration BusinessDetails --class
```

Say you want a

## License

Apache-2.0 © [rhys5690]()
