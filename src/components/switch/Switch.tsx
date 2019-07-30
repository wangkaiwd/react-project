import React  from 'react';
import './Switch.scss';

const Switch = () => {
  return (
    <div className={'self-ui-switch'}>
      <input id={'switch-input'} className={'self-ui-switch-input'} type="checkbox"/>
      <label htmlFor="switch-input">
        <span className={'self-ui-switch-button'}/>
      </label>
    </div>
  );
};

export default Switch;
