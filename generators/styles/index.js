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
    this.fs.copy(`${this.destinationRoot()}/client/app/site/${this.appName}/components/${this.componentName}/styled/${this.componentName}Styled.js`,
      `${this.destinationRoot()}/client/app/site/${this.appName}/components/${this.componentName}/styled/${this.componentName}Styled.js`, {
        process: (content) => {
          console.log(content.toString());
          var newContent = content.toString().replace(/#4a3c9a/gi, "${({ theme }) => theme.color.secondary}");
          return newContent;
        }
      });
  }
};
