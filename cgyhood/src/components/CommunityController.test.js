import React from 'react';
import ReactDOM from 'react-dom';
import CommunityController from './communityController.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommunityController />, div);
  ReactDOM.unmountComponentAtNode(div);
});
