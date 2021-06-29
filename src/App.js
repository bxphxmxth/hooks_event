  
import React, { Fragment, useState } from 'react';
import PlusOne from './components/PlusOne';
import InputChange from './components/InputChange';
import InputCopy from './components/InputCopy';
import InputClick from './components/InputClick';
import ClickAlert from './components/ClickAlert'

let App = () => {
  // state exercice 1
  let [nbr, setNbr] = useState({
      clicks: 0,
  });

  // state exercice 2
  let [val, setVal] = useState({
      text: 'Input Content',
  });
  
  return (
      <Fragment>
          <PlusOne clicks={nbr.clicks} setNbr={setNbr} />

          <InputChange text={val.text} setVal={setVal} />

          <InputCopy />

          <InputClick />

          <ClickAlert />
      </Fragment>
  );
};
export default App;
