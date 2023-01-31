import React, { useCallback } from 'react';
import { ADDONS_BOXES } from '../../app/renderData/addonsCards';
import { generatePull } from '../../app/services/generatePull';
import { setCardPull } from '../../app/store/cards/cardsActions';
import { useAppDispatch } from '../../app/store/hooks';
import { ReactComponent as ArrowIcon } from '../../assets/icons/left-arrow.svg';
import PullForm from '../../components/pullForm/pullForm';

import './style.scss';

function Sidebar(props: { sidebarStatus: boolean; setSidebarStatus: (status: boolean) => void }) {
  const { sidebarStatus, setSidebarStatus } = props;

  const dispatch = useAppDispatch();
  const setPullCallback = useCallback(
    (addons: ADDONS_BOXES[]) => dispatch(setCardPull(generatePull([], addons))),
    [dispatch]
  );

  return (
    <div className={sidebarStatus ? 'sidebar open' : 'sidebar'}>
      <div
        className='sidebar_control'
        onClick={() => {
          setSidebarStatus(!sidebarStatus);
        }}>
        <ArrowIcon />
      </div>
      <PullForm onChange={setPullCallback} />
    </div>
  );
}

export default Sidebar;
