import firebase from 'firebase';

type Fields = {
  name: string,
  message: string,
  type?: string,
};

const Logger = {
  add({type = 'warning', ...props}: Fields) {
    const {stack} = new Error();

    firebase.database().ref('logs').push({
      type,
      stack,
      ...props,
    });
  },
};

export default Logger;