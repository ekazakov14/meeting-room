import Room from './Room';

type Booking = {
  readonly id: number,
  readonly dateStart: Date,
  readonly dateEnd: Date,
  readonly users: number[],
  readonly title: string,
  readonly room: Room,
};

export default Booking;