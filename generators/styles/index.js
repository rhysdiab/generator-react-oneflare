'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const colors = {
  '#3d9ea0': '${({ theme }) => theme.color.primary}',
  '#4a3c9a': '${({ theme }) => theme.color.secondary}',
  '#0c8688': '${({ theme }) => theme.color.primaryDarker}',
  '#249294': '${({ theme }) => theme.color.primaryDark}',
  '#8ac4c6': '${({ theme }) => theme.color.primaryLight}',
  '#ebf5f5': '${({ theme }) => theme.color.primaryLighter}',
  '#3b307b': '${({ theme }) => theme.color.secondaryDark}',
  '#4a3c9a': '${({ theme }) => theme.color.secondary}',
  '#6e62ae': '${({ theme }) => theme.color.secondaryLight}',
  '#928ac2': '${({ theme }) => theme.color.secondaryLighten}',
  '#b6b1d6': '${({ theme }) => theme.color.secondaryLighter}',
  '#ecebf4': '${({ theme }) => theme.color.secondaryLightest}',
  '#ffab00': '${({ theme }) => theme.color.tertiaryDarker}',
  '#ffc44c': '${({ theme }) => theme.color.tertiaryDark}',
  '#f9cb40': '${({ theme }) => theme.color.tertiary}',
  '#fad566': '${({ theme }) => theme.color.tertiaryLight}',
  '#fbdb79': '${({ theme }) => theme.color.tertiaryLighter}',
  '#fff8db': '${({ theme }) => theme.color.tertiaryLightest}',
  '#25654e': '${({ theme }) => theme.color.successDark}',
  '#46cf98': '${({ theme }) => theme.color.success}',
  '#93d7bd': '${({ theme }) => theme.color.successLight}',
  '#dff2ea': '${({ theme }) => theme.color.successLighter}',
  '#0091ea': '${({ theme }) => theme.color.infoDark}',
  '#14b6ff': '${({ theme }) => theme.color.info}',
  '#69d1ff': '${({ theme }) => theme.color.infoLight}',
  '#f3fbff': '${({ theme }) => theme.color.infoLighter}',
  '#d54738': '${({ theme }) => theme.color.dangerDark}',
  '#e27e74': '${({ theme }) => theme.color.danger}',
  '#eaa39b': '${({ theme }) => theme.color.dangerLight}',
  '#faeceb': '${({ theme }) => theme.color.dangerLighter}',
  '#f9f9f9': '${({ theme }) => theme.color.greyScale[0]}',
  '#f3f3f3': '${({ theme }) => theme.color.greyScale[1]}',
  '#f9f9f9': '${({ theme }) => theme.color.greyScale[2]}',
  '#eeeeee': '${({ theme }) => theme.color.greyScale[3]}',
  '#dddddd': '${({ theme }) => theme.color.greyScale[4]}',
  '#cccccc': '${({ theme }) => theme.color.greyScale[5]}',
  '#a7a9ac': '${({ theme }) => theme.color.greyScale[6]}',
  '#808285': '${({ theme }) => theme.color.greyScale[7]}',
  '#58595b': '${({ theme }) => theme.color.greyScale[8]}',
  '#515a5c': '${({ theme }) => theme.color.greyScale[9]}',
  '#263133': '${({ theme }) => theme.color.greyScale[10]}',
  '#3a7ed7': '${({ theme }) => theme.color.link}',
  '#0f2640': '${({ theme }) => theme.color.linkHover}',
  '#e7e7e7': '${({ theme }) => theme.color.loadingSecondary}',
  '#f2f2f2': '${({ theme }) => theme.color.loadingTertiary}',
  '#3b5998': '${({ theme }) => theme.color.facebook}',
  '#00a0d1': '${({ theme }) => theme.color.twitter}',
  '#d34836': '${({ theme }) => theme.color.googleplus}'
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
      }/styled/${this.componentName}Styled.js`,
      {
        process: content => {
          const colorsArray = Object.keys(colors);
          let newContent = content.toString();
          colorsArray.map(hexColor => {
            const regularExpression = new RegExp(hexColor, 'gi');
            newContent = newContent.replace(regularExpression, colors[hexColor]);
          });
          return newContent;
        }
      }
    );
  }
};
