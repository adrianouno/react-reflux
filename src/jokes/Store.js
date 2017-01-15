import { Store } from 'reflux';
import { List } from 'immutable';
import Actions from './Actions';
import Joke from '../models/Joke';
import Notification from '../models/Notification';

export default class JokesStore extends Store {
  constructor() {
    super();

    this.state = {
      loading: false,
      jokes: new List()
    };

    //this.listenTo(Actions.getRandom,           this.loading);
    //this.listenTo(Actions.getRandom.completed, this.loadingCompleted);
    //this.listenTo(Actions.getRandom.failed,    this.loadingFailed);
    this.listenToMany({ 'loading': Actions.getRandom });
    this.listenToMany({ 'loading': Actions.getByCategory });
    this.listenTo(Actions.reset, this.onReset);
  }

  loading = () => {
    this.setState({
      loading: true
    });
  }

  loadingCompleted = (data) => {
    this._validate(data)
      .then(this.loadingSuccess)
      .catch(this.loadingFailed);
  }

  loadingSuccess = (data) => {
    const joke = new Joke(data);
    this.setState({
      loading: false,
      jokes: this.state.jokes.push(joke)
    });
  }

  loadingFailed = (error) => {
    this.setState({
      loading: false,
      notification: Notification.error(error.message)
    });
  }

  onReset = () => {
    this.setState({
      loading: false,
      jokes: new List(),
      notification: Notification.info('Domestos was here')
    });
  }

  _validate = (data) => {
    const duplicate = this.state.jokes.some(j => j.id === data.id)

    if ( duplicate ) {
      return Promise.reject({message: 'Fetched duplicate, try again'});
    }

    return Promise.resolve(data);
  }
}
