import React, { Component } from 'react';
import { <%= name %>Styled } from './styled/<%= name %>Styled';

class <%= name %> extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state = 'your state is ready :)'
    };
  }

  render() {
    return (
      <<%= name %>Styled>
        <%= name %>
      </<%= name %>Styled>
    );
  }
}

export default <%= name %>;
