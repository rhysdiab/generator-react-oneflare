# generator-react-oneflare

Creating a new react component has never been easier with ```
generator-react-oneflare``` :)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-oneflare using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-oneflare
```

## Creating Your Component

To instantly generate your component, all you need to do is specify the react app you want the component to be generated in, and the name of your component. Say you wanted to create a component named ```
BusinessDetails``` inside the react app named ```
BusinessRegistration``` for example. All you'd need to do is run:
```bash
yo react-oneflare BusinessRegistration BusinessDetails
```
In the root of your project. ```
generator-react-oneflare``` will search for the react app named ```BusinessRegistration
``` and create a directory named ```
BusinessDetails``` inside. This directory will contain all the files necessary for you to hit the ground running with your ```
BusinessDetails``` component.

## Creating a Class Component
By default, ```
generator-react-oneflare``` creates functional components. If you want to create a class component, all you need to do is add ```
--class``` to the end of your command.

If you wanted your "BusinessDetails" component to be a class component for example, you'd simply run:
```bash
  yo react-oneflare BusinessRegistration BusinessDetails --class
```

## License

Apache-2.0 © [rhys5690]()
