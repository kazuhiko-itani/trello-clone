import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Boards from './Pages/Boards/Container';

export const App: React.FC = () => {
  return (
    <div>
      <Boards />
    </div>
  );
};
