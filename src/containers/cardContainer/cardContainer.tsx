import React, { useCallback } from 'react';
import { AEONS_END_PROMO1 } from '../../app/renderData/addonsCards';
import { useAppSelector } from '../../app/store/hooks';
import Card from '../../components/card/card';
import './style.scss';

function CardContainer() {
  const { cardMarket } = useAppSelector((store) => store.cards);

  return (
    <div className='card-container'>
      {cardMarket.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
}

export default CardContainer;
