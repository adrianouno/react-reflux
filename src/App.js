import React from 'react';
import Menu from './menu/Menu';
import Jokes from './jokes/Jokes';
import Notifications from './notifications/Notifications';
import Counter from './counter/Counter';

export const App = function() {
  return (
    <div className="container">
      <h1>Chuck Norris Jokes</h1>
      <Menu />
      <Jokes />
      <Notifications />
      <Counter />
    </div>
  );
}
