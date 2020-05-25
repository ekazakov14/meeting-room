import firebase from 'firebase';

const BasicModel = <T>(routeName: string, additional: Object = {}) => {
  const defaultMethods = {
    async get(id: string | number) {
      const response = await firebase.database().ref(`${routeName}/${id}`).once('value');
      return response.val();
    },
    async getAll() {
      const response = await firebase.database().ref(routeName).once('value');
      return response.val();
    },
    set(id: string | number, props: T, callback?: (response: Error | null) => any) {
      firebase.database().ref(`${routeName}/${id}`).set(props, callback);
    },
    add(props: T, callback?: (response: Error | null) => any) {
      firebase.database().ref(routeName).push(props, callback);
    },
  };

  return {...defaultMethods, additional};
};

export default BasicModel;