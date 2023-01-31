import React, { useCallback, useState } from 'react';
import { ADDONS_BOXES } from '../../app/renderData/addonsCards';
import { generatePull } from '../../app/services/generatePull';
import { setCardPull } from '../../app/store/cards/cardsActions';
import { useAppDispatch } from '../../app/store/hooks';
import { ReactComponent as ArrowIcon } from '../../assets/icons/left-arrow.svg';
import PullForm from '../../components/pullForm/pullForm';

import './style.scss';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const setPullCallback = useCallback(
    (addons: ADDONS_BOXES[]) => dispatch(setCardPull(generatePull([], addons))),
    []
  );

  return (
    <div className={open ? 'sidebar open' : 'sidebar'}>
      <div
        className='sidebar_control'
        onClick={() => {
          setOpen(!open);
        }}>
        <ArrowIcon />
      </div>
      <PullForm onChange={setPullCallback} />
    </div>
  );
}

export default Sidebar;
