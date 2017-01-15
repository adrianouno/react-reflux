import React from 'react';
import { Component } from 'reflux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import JokesStore from './Store';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.store = JokesStore;
    this.storeKeys = ['jokes']
  }

  render() {
    return (
      <ListGroup>
        {this.state.jokes.map(this.renderJoke)}
      </ListGroup>
    );
  }

  renderJoke = (joke) => {
    return (
      <ListGroupItem key={joke.id}>{joke.value}</ListGroupItem>
    );
  }
}

export default Jokes;
