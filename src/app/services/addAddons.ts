import { CardInterface } from '../interfaces';
import { ADDONS } from '../renderData/renderData';

export function addAddons(addons: string[]) {
  let cards: CardInterface[] = [];

  ADDONS.forEach((addon) => {
    if (addons.includes(addon.name)) {
      cards = cards.concat(addon.cards);
    }
  });

  return cards;
}
