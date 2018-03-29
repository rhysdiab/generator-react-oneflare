'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('class');
    this.class = this.options.class ? 'Class' : '';

    this.argument('arguments', { type: Array, required: true });
    this.appName = this.options.arguments[0];
    this.componentName = this.options.arguments[1];
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(
        `MyComponent${this.class}/MyComponent${this.class}.jsx`
      ),
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
};
