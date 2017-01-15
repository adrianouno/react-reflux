import { Record } from 'immutable';

const Notification = Record({
  id: null,
  message: "",
  isOpen: true,
  color: "success"
});

Notification.success = function(message) {
  return new Notification({id: Math.random(), message: message});
}
Notification.error = function(message) {
  return new Notification({id: Math.random(), message: message, color: "danger"});
}
Notification.info = function(message) {
  return new Notification({id: Math.random(), message: message, color: "info"});
}

export default Notification;
