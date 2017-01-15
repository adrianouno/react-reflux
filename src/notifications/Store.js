import { Store } from 'reflux';
import { List } from 'immutable';
import JokesStore from '../jokes/Store';
import Actions from './Actions';

export default class NotificationStore extends Store {
  constructor() {
    super();

    this.listenTo(JokesStore.singleton, this.notify);
    this.listenTo(Actions.removeNotification, this.removeNotification);

    this.timeouts = new List();
    this.state = {
      notifications: new List()
    }

  }

  notify = ({notification}) => {
if ( !notification ) { return; };

    this.setState({
      notifications: this.state.notifications.push(notification).filter( n => n.isOpen )
    });
    setTimeout(() => this.removeNotification(notification), 5000);
  }

  removeNotification(notification) {
    const index = this.state.notifications.keyOf(notification);
    this.setState({
      notifications: this.state.notifications.setIn([index, 'isOpen'], false)
    })
  }
}
