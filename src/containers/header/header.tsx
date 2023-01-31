import React from 'react';
import { generateCardMarket } from '../../app/store/cards/cardsActions';
import { useAppDispatch } from '../../app/store/hooks';
import { MAIN_DICTIONARY } from '../../app/translation/main';
import TranslatedText from '../../components/translatedText';
import './style.scss';

function Header() {
  const dispatch = useAppDispatch();
  return (
    <div className='header'>
      <div className='generate-button' onClick={() => dispatch(generateCardMarket())}>
        <TranslatedText text={MAIN_DICTIONARY.GENERATE} />
      </div>
    </div>
  );
}

export default Header;
