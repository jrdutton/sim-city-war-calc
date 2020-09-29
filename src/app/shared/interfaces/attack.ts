import { Class, Rarity } from '../enums';
import { IItemCount } from './item-count';

export interface IAttack {
  name: string;
  rarity: Rarity;
  class: Class;
  energy: number;
  damage: number;
  items: IItemCount[];
  points: number[];
}
