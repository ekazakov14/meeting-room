import BasicModelFactory from './BasicModel';
import File from './File';

type RawFields = {
  readonly name: string,
  readonly avatar: string,
};

type ProcessFields = {
  readonly name: string,
  readonly avatar: string,
}

const modifyResult = async (item: RawFields): Promise<ProcessFields> => {
  return {
    ...item,
    avatar: await File.getUrl(item.avatar),
  };
};

class User extends BasicModelFactory<RawFields, ProcessFields>('users', modifyResult) {
  
}

export default User;