import firebase from 'firebase';

type Fields = {
  name: string,
  message: string,
  type?: 'warning' | 'error' | 'info',
  stack?: string,
};

const Logger = {
  write({type = 'warning', stack = new Error().stack, ...props}: Fields) {
    firebase.database().ref('logs').push({
      ...props,
      type,
      stack,
    });
  },
};

export default Logger;