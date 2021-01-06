type Booking = {
  id: number,
  dateStart: Date,
  dateEnd: Date,
  users: number[],
  room: number,
  title: string,
};

export default Booking;