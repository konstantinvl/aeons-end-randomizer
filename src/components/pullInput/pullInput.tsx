import React, { useEffect, useState } from 'react';
import { BoxInterface } from '../../app/interfaces';
import TranslatedText from '../translatedText';

function PullInput(props: {
  name: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { name, onChange } = props;
  return (
    <div className='pullform__input'>
      <label htmlFor={name}>
        <TranslatedText text={name} />
      </label>
      <input type='checkbox' onChange={onChange} value={name} id={name} />
    </div>
  );
}

export default PullInput;
