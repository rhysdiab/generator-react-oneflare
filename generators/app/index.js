'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Lets create your react component!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'isClassComponent',
        message: 'Would you like a class component?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.log(this.props.isClassComponent);
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('ComponentName/ComponentName.jsx'),
      this.destinationPath('ComponentName/ComponentName.jsx')
    );
  }

  install() {
    this.installDependencies();
  }
};
