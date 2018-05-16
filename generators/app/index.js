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
    console.log(this.options.arguments);
  }

  paths() {
    if (this.isNewApp) {
      this.destinationRoot(`${this.destinationRoot()}/client/app/site`);
    } else {
      this.destinationRoot(`${this.destinationRoot()}/client/app/site/${this.appName}/components`);
    }
  }

  writing() {
    if (this.isNewApp) {
      this.fs.copyTpl(
        this.templatePath(
          `MyApp/index.js`
        ),
        this.destinationPath(`${this.appName}/index.js`), {
          name: this.appName
        }
      );
      this.fs.copyTpl(
        this.templatePath(
          `MyApp/components/MyComponent${this.class}/MyComponent${this.class}.jsx`
        ),
        this.destinationPath(`${this.appName}/components/${this.appName}/${this.appName}.jsx`), {
          name: this.appName
        }
      );
      this.fs.copyTpl(
        this.templatePath(
          `MyApp/components/MyComponent${this.class}/styled/MyComponent${this.class}Styled.js`
        ),
        this.destinationPath(`${this.appName}/components/${this.appName}/styled/${this.appName}Styled.js`), {
          name: this.appName
        }
      );
    } else {
      this.fs.copyTpl(
        this.templatePath(
          `MyComponent${this.class}/MyComponent${this.class}.jsx`
        ),
        this.destinationPath(`${this.componentName}/${this.componentName}.jsx`), {
          name: this.componentName
        }
      );
      this.fs.copyTpl(
        this.templatePath(
          `MyComponent${this.class}/styled/MyComponent${this.class}Styled.js`
        ),
        this.destinationPath(
          `${this.componentName}/styled/${this.componentName}Styled.js`
        ), {
          name: this.componentName
        }
      );
    }
  }
};
