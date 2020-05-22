import BasicModel from './BasicModel';

type Fields = {
  readonly name: string,
  readonly avatar: string,
};

const User = BasicModel<Fields>('users');

export default User;