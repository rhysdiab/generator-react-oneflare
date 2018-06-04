import React from 'react';
import ReactOnRails from 'react-on-rails';
import app from '../app';
import <%= name %> from './components/<%= name %>/<%= name %>';

const <%= name %>App = props => (
  app(<<%= name %> {...props} />)
);

ReactOnRails.register({
  <%= name %>App
});
