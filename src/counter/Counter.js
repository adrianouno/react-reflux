import React from 'react';
import { Component } from 'reflux';
import JokesStore from '../jokes/Store';
import { Badge } from 'reactstrap';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.mapStoreToState(JokesStore, (storeState) => {
      const obj = {};
      if ( storeState.jokes ) {
          obj.count = storeState.jokes.size;
      }
      return obj;
    });
  }

  render() {
    return (
      <Badge>{this.state.count}</Badge>
    );
  }
}

export default Counter;
