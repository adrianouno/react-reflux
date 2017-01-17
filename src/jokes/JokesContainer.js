import React from 'react';
import { Component } from 'reflux';
import Actions from './Actions';
import JokesStore from './Store';
import Jokes from './Jokes';

class JokesContainer extends Component {
  constructor(props) {
    super(props);
    this.store = JokesStore;
    this.storeKeys = ['jokes']
  }

  render() {
    return (
      <Jokes jokes={this.state.jokes.reverse()} />
    );
  }
}

export default JokesContainer;
