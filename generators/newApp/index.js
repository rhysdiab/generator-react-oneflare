'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('class');
    this.class = this.options.class ? 'Class' : '';

    this.argument('arguments', {
      type: Array,
      required: true
    });
    this.appName = this.options.arguments[0];
    this.componentName = this.options.arguments[1];
    this.appNameWordArrayHyphen = this.appName
      .split(/(?=[A-Z])/)
      .map(name => name.toLowerCase() + '-');
    this.appNameWordArrayUnderscore = this.appName
      .split(/(?=[A-Z])/)
      .map(name => name.toLowerCase() + '_');
  }

  paths() {
    this.destinationRoot(`${this.destinationRoot()}/client`);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`app/site/MyApp/index.jsx`),
      this.destinationPath(`app/site/${this.appName}/index.jsx`), {
        name: this.appName
      }
    );
    this.fs.copyTpl(
      this.templatePath(
        `app/site/MyApp/components/MyComponent${this.class}/MyComponent${this.class}.jsx`
      ),
      this.destinationPath(
        `app/site/${this.appName}/components/${this.appName}/${this.appName}.jsx`
      ), {
        name: this.appName
      }
    );
    this.fs.copyTpl(
      this.templatePath(
        `app/site/MyApp/components/MyComponent${this.class}/styled/MyComponent${
            this.class
          }Styled.js`
      ),
      this.destinationPath(
        `app/site/${this.appName}/components/${this.appName}/styled/${this.appName}Styled.js`
      ), {
        name: this.appName
      }
    );

    this.fs.copy(
      `${this.destinationRoot()}/app/server.jsx`,
      `${this.destinationRoot()}/app/server.jsx`,
      {
        process: content => {
          let newContent = content.toString() + `export ${this.appName}App from './site/${this.appName}'; // eslint-disable-line no-unused-vars;`
          return newContent;
        }
      }
    );

    this.fs.copy(
      `${this.destinationRoot()}/bundles.js`,
      `${this.destinationRoot()}/bundles.js`,
      {
        process: content => {
          return content;
        }
      }
    );

    console.log(
`To set up your app copy the instructions below.


1) Paste the code below into your view where you want to load your react component.


<% content_for :javascript_bottom do %>
  <%= javascript_include_tag "common-bundle" %>
  <%= javascript_include_tag "${this.appNameWordArrayHyphen
  .map(word => {
    return word;
  })
  .join('')}bundle" %>
<% end %>

<% ${this.appNameWordArrayUnderscore
.map(word => {
return word;
})
.join('')}app = react_component_hash("${
this.appName
}App", props: {}, prerender: true) %>

<% content_for :stylesheet do %>
  <%= stylesheet_link_tag "common-bundle" %>
  <%= ${this.appNameWordArrayUnderscore
  .map(word => {
    return word;
  })
  .join('')}app["componentCss"] %>
<% end %>

<%= ${this.appNameWordArrayUnderscore
.map(word => {
return word;
})
.join('')}app["componentHtml"] %>


2) Go to '/Site/client/bundles.js' and paste the following line inside module.exports:


module.exports = {
  '${this.appNameWordArrayHyphen .map(word => {
      return word;
    })
    .join('')
    .slice(0, -1)}': bundle('./app/site/${this.appName}'),
  ...
      }

3) Restart your server
    `
    );
  }
};
