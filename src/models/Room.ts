import BasicModelFactory from './BasicModel';

type RawFields = {
  readonly name: string,
  readonly floor: number,
  readonly minGuestCount: number,
  readonly maxGuestCount: number,
};

const modifyResult = (item: RawFields) => item;

class Room extends BasicModelFactory<RawFields, RawFields>('rooms', modifyResult) {
  
}

export default Room;