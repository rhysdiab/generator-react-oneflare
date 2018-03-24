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
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
        default: 'MyComponent'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.log(this.props.name);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('MyComponent/MyComponent.jsx'),
      this.destinationPath('MyComponent/MyComponent.jsx'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('MyComponent/styled/MyComponent.js'),
      this.destinationPath('MyComponent/styled/MyComponent.js'), {
        name: this.props.name
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
