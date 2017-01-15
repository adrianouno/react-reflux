import React from 'react';
import { Component} from 'reflux';
import { Alert } from 'reactstrap';
import NotificationStore from './Store';
import Actions from './Actions';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.store = NotificationStore;
  }

  render() {
    return (
      <div className="mt-2">
        {this.notifications()}
      </div>
    )
  }

  notifications() {
    const { notifications } = this.state;
    return notifications.map( n =>
      <Alert key={n.id} color={n.color} isOpen={n.isOpen} toggle={ () => this.removeNotification(n) }>{n.message}</Alert>
    );
  }

  removeNotification(notification) {
    Actions.removeNotification(notification);
  }
}
