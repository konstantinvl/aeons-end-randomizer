import React, { useEffect, useState } from 'react';
import { ADDONS } from '../../app/renderData/renderData';
import { formDictionary } from '../../app/translation/form';

import PullInput from '../pullInput/pullInput';
import TranslatedText from '../translatedText';

import './style.scss';

function MarketSetupForm() {
  const [addonsPull, setAddonsPull] = useState<string[]>([]);

  useEffect(() => {
    console.log(addonsPull);
  }, [addonsPull]);

  function onAddonPullChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const pull = addonsPull.concat(event.target.value);
      setAddonsPull(pull);
    } else {
      const pull = addonsPull.filter((addon) => addon !== event.target.value);

      setAddonsPull(pull);
    }
  }

  return (
    <form className='pullform'>
      <legend>
        <TranslatedText text={formDictionary.ADDONS} />
      </legend>
      {ADDONS.map((addon) => {
        return <PullInput name={addon.name} onChange={onAddonPullChange} />;
      })}
    </form>
  );
}

export default MarketSetupForm;
