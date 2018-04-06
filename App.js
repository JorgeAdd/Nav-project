import React, { Component } from 'react';


import {StackNavigator} from 'react-navigation';

import ScreenOne from './src/ScreenOne';
import ScreenTwo from './src/ScreenTwo';
import ScreenThree from './src/ScreenThree';


const App = StackNavigator({
  ScreenOne: {screen: ScreenOne},
  ScreenTwo: {screen: ScreenTwo},
  ScreenThree: {screen: ScreenThree},
});

export default App;