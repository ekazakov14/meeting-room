import Database from '../database/Database';

const Model = <T>(name: string) => ({
    getAll() {
      Database.instance().ref(name);
    },
    set(id: number, props: T) {
      Database.instance().ref(`${name}/${id}`).set(props);
    },
});

export default Model;