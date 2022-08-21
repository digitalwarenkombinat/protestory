import { Scene, Item } from '../context/data'

export const scenes: Scene[] = [
  {
    id: 1,
    name: 'start',
    image: 'startthedemo/scenes/1/scene.webp',
    clickables: [
      {
        id: 1,
        image: 'startthedemo/scenes/1/clickables/icon.png',
        left: 625,
        top: 190,
        message: 'Megafon',
        scene: 2,
        item: 1,
      },
      {
        id: 2,
        image: 'startthedemo/scenes/1/clickables/icon.png',
        left: 500,
        top: 500,
        message: 'Lautsprecher und Mikro',
        scene: 2,
      },
      {
        id: 3,
        image: 'startthedemo/scenes/1/clickables/icon.png',
        left: 600,
        top: 570,
        message: 'Transporterschlüssel',
        scene: 2,
      },
      {
        id: 4,
        image: 'startthedemo/scenes/1/clickables/icon.png',
        left: 560,
        top: 250,
        message: 'Transparente',
        scene: 2,
      },
      {
        id: 5,
        image: 'startthedemo/scenes/1/clickables/icon.png',
        left: 310,
        top: 440,
        message: 'Demoanmeldung',
        scene: 2,
      },
      {
        id: 6,
        image: 'startthedemo/scenes/1/clickables/icon.png',
        left: 470,
        top: 380,
        message: 'Mailingliste für Demomobilisierung',
        scene: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'transparente',
    image: 'startthedemo/scenes/2/scene.webp',
    clickables: [
      {
        id: 2,
        image: 'startthedemo/scenes/1/clickables/icon.png',
        left: 100,
        top: 400,
        message: 'Transparente nah',
        scene: 1,
      },
    ],
  },
]

export const items: Item[] = [
  {
    id: 1,
    name: 'key',
    image: 'startthedemo/items/key.png',
  },
  {
    id: 2,
    name: 'hammer',
    image: 'startthedemo/items/hammer.png',
  },
]
