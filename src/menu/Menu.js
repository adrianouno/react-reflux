import React, { Component } from 'react';
import { Button } from 'reactstrap';
import JokesActions from '../jokes/Actions';

export default class Menu extends Component {
  render() {
    return (
      <div className="btn-group mb-2">
        <Button onClick={JokesActions.getRandom}>Random</Button>
        <Button onClick={() => JokesActions.getByCategory("science")}>Science</Button>
        <Button onClick={() => JokesActions.getByCategory("dev")}>Dev</Button>
        <Button onClick={() => JokesActions.getByCategory("foobar")}>Invalid one</Button>
        <Button onClick={JokesActions.reset} color="danger">Reset</Button>
      </div>
    )
  }
}
