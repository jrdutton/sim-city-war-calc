import { Injectable } from '@angular/core';
import { Class, Item, Rarity } from '../../shared/enums';
import { IAttack } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  attacks: IAttack[] = [
    {
      name: 'Comic Hand',
      rarity: Rarity.Common,
      class: Class.S,
      energy: 1,
      damage: 1,
      items: [
        { item: Item.Plunger, count: 1 },
        { item: Item.Duck, count: 1 },
      ],
      points: [100, 110, 120, 130, 140, 155, 170, 190, 210, 230],
    },
    {
      name: 'Shrink Ray',
      rarity: Rarity.Rare,
      class: Class.S,
      energy: 3,
      damage: 3,
      items: [
        { item: Item.Pliers, count: 1 },
        { item: Item.Megaphone, count: 2 },
      ],
      points: [300, 330, 365, 400, 440, 485, 535, 590, 650, 715],
    },
    {
      name: 'Rock Monster',
      rarity: Rarity.Rare,
      class: Class.S,
      energy: 2,
      damage: 2,
      items: [
        { item: Item.Hydrant, count: 1 },
        { item: Item.Binoculars, count: 1 },
      ],
      points: [200, 220, 240, 265, 290, 320, 350, 385, 425, 470],
    },
    {
      name: 'Not in Kansas',
      rarity: Rarity.Legendary,
      class: Class.S,
      energy: 4,
      damage: 3,
      items: [
        { item: Item.Anvil, count: 1 },
        { item: Item.Prop, count: 1 },
      ],
      points: [300, 330, 365, 400, 440, 485, 535, 590, 650, 715],
    },
    {
      name: 'Magnetism',
      rarity: Rarity.Common,
      class: Class.M,
      energy: 2,
      damage: 3,
      items: [
        { item: Item.Binoculars, count: 1 },
        { item: Item.Hydrant, count: 2 },
        { item: Item.Anvil, count: 2 },
      ],
      points: [300, 330, 365, 400, 440, 485, 535, 590, 650, 715],
    },
    {
      name: 'Tentacle Vortex',
      rarity: Rarity.Common,
      class: Class.M,
      energy: 3,
      damage: 2,
      items: [
        { item: Item.Plunger, count: 1 },
        { item: Item.Duck, count: 1 },
        { item: Item.Prop, count: 2 },
      ],
      points: [200, 220, 240, 265, 290, 320, 350, 385, 425, 470],
    },
    {
      name: 'Flying Vu Robot',
      rarity: Rarity.Rare,
      class: Class.M,
      energy: 4,
      damage: 4,
      items: [
        { item: Item.Ammo, count: 2 },
        { item: Item.Gas, count: 2 },
      ],
      points: [400, 440, 485, 535, 590, 650, 715, 790, 870, 960],
    },
    {
      name: 'Disco Twister',
      rarity: Rarity.Legendary,
      class: Class.M,
      energy: 6,
      damage: 6,
      items: [
        { item: Item.Megaphone, count: 1 },
        { item: Item.Pliers, count: 1 },
        { item: Item.Prop, count: 2 },
      ],
      points: [600, 660, 725, 800, 880, 970, 1070, 1180, 1300, 1430],
    },
    {
      name: 'Plant Monster',
      rarity: Rarity.Common,
      class: Class.L,
      energy: 4,
      damage: 4,
      items: [
        { item: Item.Plunger, count: 2 },
        { item: Item.Gas, count: 2 },
        { item: Item.Boots, count: 2 },
      ],
      points: [400, 440, 485, 535, 590, 650, 715, 790, 870, 960],
    },
    {
      name: 'Blizzaster',
      rarity: Rarity.Rare,
      class: Class.L,
      energy: 6,
      damage: 6,
      items: [
        { item: Item.Prop, count: 1 },
        { item: Item.Ammo, count: 2 },
        { item: Item.Duck, count: 3 },
      ],
      points: [600, 660, 725, 800, 880, 970, 1070, 1180, 1300, 1430],
    },
    {
      name: 'Fishaster',
      rarity: Rarity.Rare,
      class: Class.L,
      energy: 7,
      damage: 7,
      items: [
        { item: Item.Duck, count: 1 },
        { item: Item.Boots, count: 3 },
        { item: Item.Hydrant, count: 3 },
      ],
      points: [700, 770, 850, 935, 1030, 1135, 1250, 1375, 1515, 1670],
    },
    {
      name: 'Ancient Curse',
      rarity: Rarity.Legendary,
      class: Class.L,
      energy: 8,
      damage: 8,
      items: [
        { item: Item.Boots, count: 1 },
        { item: Item.Megaphone, count: 2 },
        { item: Item.Binoculars, count: 3 },
      ],
      points: [800, 880, 970, 1070, 1180, 1300, 1430, 1575, 1735, 1910],
    },
    {
      name: 'Hands of Doom',
      rarity: Rarity.Common,
      class: Class.XL,
      energy: 8,
      damage: 8,
      items: [
        { item: Item.Ammo, count: 2 },
        { item: Item.Duck, count: 2 },
        { item: Item.Pliers, count: 5 },
      ],
      points: [800, 880, 970, 1070, 1180, 1300, 1430, 1575, 1735, 1910],
    },
    {
      name: '16 Tons',
      rarity: Rarity.Common,
      class: Class.XL,
      energy: 6,
      damage: 6,
      items: [
        { item: Item.Pliers, count: 1 },
        { item: Item.Hydrant, count: 2 },
        { item: Item.Anvil, count: 4 },
      ],
      points: [600, 660, 725, 800, 880, 970, 1070, 1180, 1300, 1430],
    },
    {
      name: 'Spiders',
      rarity: Rarity.Rare,
      class: Class.XL,
      energy: 9,
      damage: 9,
      items: [
        { item: Item.Gas, count: 1 },
        { item: Item.Binoculars, count: 2 },
        { item: Item.Ammo, count: 5 },
      ],
      points: [900, 990, 1090, 1200, 1320, 1450, 1595, 1755, 1930, 2125],
    },
    {
      name: 'Dance Shoes',
      rarity: Rarity.Legendary,
      class: Class.XL,
      energy: 10,
      damage: 10,
      items: [
        { item: Item.Gas, count: 2 },
        { item: Item.Binoculars, count: 3 },
        { item: Item.Boots, count: 2 },
      ],
      points: [1000, 1100, 1210, 1330, 1465, 1610, 1770, 1950, 2145, 2360],
    },
    {
      name: 'Building Portal',
      rarity: Rarity.Common,
      class: Class.XXL,
      energy: 7,
      damage: 8,
      items: [
        { item: Item.Gas, count: 3 },
        { item: Item.Plunger, count: 3 },
        { item: Item.Prop, count: 4 },
      ],
      points: [800, 880, 970, 1070, 1180, 1300, 1430, 1575, 1735, 1910],
    },
    {
      name: 'Movie Monster',
      rarity: Rarity.Legendary,
      class: Class.XXL,
      energy: 8,
      damage: 10,
      items: [
        { item: Item.Boots, count: 2 },
        { item: Item.Plunger, count: 2 },
        { item: Item.Megaphone, count: 2 },
      ],
      points: [1000, 1100, 1210, 1330, 1465, 1610, 1770, 1950, 2145, 2360],
    },
  ];

  constructor() {}
}
