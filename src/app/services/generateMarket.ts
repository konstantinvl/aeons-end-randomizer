import { CardInterface, CARD_TYPE, SetupCardInterface } from '../interfaces';
import { getRandomNumber } from './getRandom';

export function generateMarket(cardPull: CardInterface[], cardSetup: SetupCardInterface[]) {
  const market: CardInterface[] = [];

  function cardCheck(card: CardInterface) {
    return !!market.find((marketCard) => marketCard.id === card.id);
  }

  cardSetup.forEach((setup) => {
    let pull: CardInterface[] = cardPull;
    if (setup.type !== CARD_TYPE.ANY) {
      pull = cardPull.filter((card) => card.type === setup.type);
    }
    do {
      const card = pull[getRandomNumber(0, pull.length - 1)];
      if (!cardCheck(card)) {
        market.push(card);
        break;
      }
    } while (true);
  });
  return market;
}
