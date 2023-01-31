import React from 'react';
import { CardInterface } from '../../app/interfaces';
import { CARDS_BACKGROUND } from '../../app/renderData/renderData';
import TranslatedText from '../translatedText';
import './style.scss';

function Card(props: { card: CardInterface }) {
  const { card } = props;

  return (
    <div className='card-wrapper'>
      <div
        className='card'
        style={{
          // backgroundColor: CARDS_BACKGROUND[card.type],
          background: `radial-gradient(circle, rgba(255,255,255,1) 19%, ${
            CARDS_BACKGROUND[card.type]
          } 100%)`,
        }}>
        <div className='card__header'>
          <div className='card__header__value'>
            <div className='card__header__value__wrapper'>{card.value}</div>
          </div>
        </div>
        <div className='card__info'>
          <span>{card.name}</span>
        </div>
        <div className='card__footer'>
          <span className='card__footer__name'>
            <TranslatedText text={card.type} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
