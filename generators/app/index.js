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
    this.isNewApp = this.options.arguments.length === 1;
    this.appNameWordArrayHyphen = this.appName
      .split(/(?=[A-Z])/)
      .map(name => name.toLowerCase() + '-');
    this.appNameWordArrayUnderscore = this.appName
      .split(/(?=[A-Z])/)
      .map(name => name.toLowerCase() + '_');
  }

  paths() {
    if (this.isNewApp) {
      this.destinationRoot(`${this.destinationRoot()}/client/app/site`);
    } else {
      this.destinationRoot(
        `${this.destinationRoot()}/client/app/site/${this.appName}/components`
      );
    }
  }

  writing() {
    if (this.isNewApp) {
      this.fs.copyTpl(
        this.templatePath(`MyApp/index.jsx`),
        this.destinationPath(`${this.appName}/index.jsx`),
        {
          name: this.appName
        }
      );
      this.fs.copyTpl(
        this.templatePath(
          `MyApp/components/MyComponent${this.class}/MyComponent${this.class}.jsx`
        ),
        this.destinationPath(
          `${this.appName}/components/${this.appName}/${this.appName}.jsx`
        ),
        {
          name: this.appName
        }
      );
      this.fs.copyTpl(
        this.templatePath(
          `MyApp/components/MyComponent${this.class}/styled/MyComponent${
            this.class
          }Styled.js`
        ),
        this.destinationPath(
          `${this.appName}/components/${this.appName}/styled/${this.appName}Styled.js`
        ),
        {
          name: this.appName
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


        2) Go to '/Site/client/app/server.jsx' and paste the following line:

             export ${this.appName}App from './site/${
          this.appName
        }'; // eslint-disable-line no-unused-vars


        3) Go to '/Site/client/bundles.js' and paste the following line inside module.exports:

              module.exports = {

                '${this.appNameWordArrayHyphen
                  .map(word => {
                    return word;
                  })
                  .join('')
                  .slice(0, -1)}': bundle('./app/site/${this.appName}'),
                ...
              }
      `
      );
    } else {
      this.fs.copyTpl(
        this.templatePath(`MyComponent${this.class}/MyComponent${this.class}.jsx`),
        this.destinationPath(`${this.componentName}/${this.componentName}.jsx`),
        {
          name: this.componentName
        }
      );
      this.fs.copyTpl(
        this.templatePath(
          `MyComponent${this.class}/styled/MyComponent${this.class}Styled.js`
        ),
        this.destinationPath(
          `${this.componentName}/styled/${this.componentName}Styled.js`
        ),
        {
          name: this.componentName
        }
      );
    }
  }
};
