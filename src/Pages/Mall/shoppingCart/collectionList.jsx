import tomato from './itemimage/tomato.png';
import beef from './itemimage/beef.png';
import bread from './itemimage/bread.png';
import cabbage from './itemimage/cabbage.png';
import chicken from './itemimage/chicken.png';
import eggtray from './itemimage/eggtray.png';
import salt from './itemimage/saltandpepper.png';

import { v4 as uuid } from 'uuid';

const COLLECTION = [
  {
    id: uuid(),
    label: 'tomato',
    url: tomato,
    price: 80,
  },
  {
    id: uuid(),
    label: 'beef',
    url: beef,
    price: 350,
  },
  {
    id: uuid(),
    label: 'bread',
    url: bread,
    price: 140,
  },
  {
    id: uuid(),
    label: 'cabbage',
    url: cabbage,
    price: 120,
  },
  {
    id: uuid(),
    label: 'chicken',
    url: chicken,
    price: 220,
  },
  {
    id: uuid(),
    label: 'egg',
    url: eggtray,
    price: 150,
  },
  {
    id: uuid(),
    label: 'salt',
    url: salt,
    price: 50,
  },
];

export default COLLECTION