import React, { useEffect, useState } from 'react';
import { ADDONS_BOXES } from '../../app/renderData/addonsCards';
import { ADDONS } from '../../app/renderData/renderData';
import { formDictionary } from '../../app/translation/form';
import PullInput from '../pullInput/pullInput';
import TranslatedText from '../translatedText';

import './style.scss';

function PullForm(props: { onChange: (addons: ADDONS_BOXES[]) => void }) {
  const { onChange } = props;
  const [addonsPull, setAddonsPull] = useState<ADDONS_BOXES[]>([]);

  useEffect(() => {
    onChange(addonsPull);
  }, [addonsPull, onChange]);

  function onAddonPullChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const pull = addonsPull.concat(event.target.value as ADDONS_BOXES);
      setAddonsPull(pull);
    } else {
      const pull = addonsPull.filter((addon) => addon !== (event.target.value as ADDONS_BOXES));

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

export default PullForm;
