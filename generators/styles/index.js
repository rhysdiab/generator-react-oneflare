'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const colors = {
  '#3d9ea0': '${({ theme }) => theme.color.primary}',
  '#4a3c9a': '${({ theme }) => theme.color.secondary}'
};

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
  }

  writing() {
    this.fs.copy(
      `${this.destinationRoot()}/client/app/site/${this.appName}/components/${
        this.componentName
      }/styled/${this.componentName}Styled.js`,
      `${this.destinationRoot()}/client/app/site/${this.appName}/components/${
        this.componentName
      }/styled/${this.componentName}Styled.js`, {
        process: content => {
          const colorsArray = Object.keys(colors);
          let newContent = content.toString();
          colorsArray.map((hexColor) => {
            const regularExpression = new RegExp(hexColor, 'gi');
            newContent = newContent
              .replace(regularExpression, colors[hexColor]);
          });
          return newContent;
        }
      }
    );
  }
};
