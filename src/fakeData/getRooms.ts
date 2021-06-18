import Room from '../types/Room';

const rooms: Room[] = [
  {
    id: 1,
    name: 'Ржавый Фред',
    minPersons: 3,
    maxPersons: 6,
    floor: 7,
  },
  {
    id: 2,
    name: 'Прачечная',
    maxPersons: 10,
    floor: 7,
  },
  {
    id: 3,
    name: 'Желтый дом',
    maxPersons: 10,
    floor: 7,
  },
  {
    id: 4,
    name: 'Оранжевый тюльпан',
    maxPersons: 10,
    floor: 7,
  },
  {
    id: 5,
    name: 'Джокер',
    minPersons: 3,
    maxPersons: 6,
    floor: 6,
  },
  {
    id: 6,
    name: 'Мариванна',
    minPersons: 3,
    maxPersons: 6,
    floor: 6,
  },
  {
    id: 7,
    name: 'Тонкий Боб',
    minPersons: 3,
    maxPersons: 6,
    floor: 6,
  },
  {
    id: 8,
    name: 'Чёрная вдова',
    minPersons: 3,
    maxPersons: 6,
    floor: 6,
  },
  {
    id: 9,
    name: 'Белорусский ликёр',
    minPersons: 3,
    maxPersons: 6,
    floor: 6,
  },
];

const getRooms = (): Promise<Room[]> => new Promise((resolve) => resolve(rooms));

export default getRooms;