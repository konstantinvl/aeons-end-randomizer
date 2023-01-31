import React from 'react';
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
