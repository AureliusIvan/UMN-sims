import { useState } from 'react';

import Mall from '../Mall/Mall';
import Home from '../Home/Home';
import Cafe from '../Cafe/Cafe';
import Uni from './UnivHall';
import Class from './classroom';
import Library from './library';

const ToStudy = () => {
  const [study, setStudy] = useState('uni');
  const handleClick = uniState => {
    setStudy(uniState);
  };

  switch (study) {
    case 'mall':
      return <Mall handleClick={handleClick} />;
    case 'home':
      return <Home handleClick={handleClick} />;
    case 'cafe':
      return <Cafe handleClick={handleClick} />;
    case 'uni':
      return <Uni handleClick={handleClick} />;
    case 'class':
      return <Class handleClick={handleClick} />;
    case 'library':
      return <Library handleClick={handleClick} />;
    default:
      return null;
  }
};

export default ToStudy;