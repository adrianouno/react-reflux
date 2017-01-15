import Reflux from 'reflux';
import ChuckNorrisApi from '../api/ChuckNorrisApi';

const Actions = {
  getRandom:     Reflux.createAction({ asyncResult: true }),
  getByCategory: Reflux.createAction({ asyncResult: true }),
  reset:         Reflux.createAction({})
};

Actions.getRandom.listen(function() {
  ChuckNorrisApi.random()
    .then(this.completed)
    .catch(this.failed)
});

Actions.getByCategory.listen(function(category) {
  ChuckNorrisApi.category(category)
    .then(this.completed)
    .catch(this.failed);
});

export default Actions;
