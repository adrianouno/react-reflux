import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Jokes extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.jokes.map(this.renderJoke)}
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
