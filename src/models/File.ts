import firebase from 'firebase';
import {v4} from 'uuid';

const File = {
  async get(id: string): Promise<firebase.storage.Reference> {
    return firebase.storage().ref().child(id);
  },
  async getUrl(id: string): Promise<string> {
    return (await this.get(id)).getDownloadURL();
  },
  async add(file: File, id: string = v4()): Promise<string> {
    const snapshot = await firebase.storage().ref().child(id).put(file);
    return snapshot.ref.fullPath;
  },
};

export default File;