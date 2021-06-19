import Floor from "./Floor";

type Room = {
  id: number,
  name: string,
  minPersons?: number,
  maxPersons?: number,
  floor: Floor,
};

export default Room;