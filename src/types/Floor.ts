import Room from './Room';

type Floor = {
  readonly id: number,
  readonly order: number,
  readonly rooms: Room[],
};

export default Floor;