import BasicModel from './BasicModel';

type Fields = {
  readonly name: string,
  readonly floor: number,
  readonly minGuestCount: number,
  readonly maxGuestCount: number,
};

const Room = BasicModel<Fields>('rooms');

export default Room;