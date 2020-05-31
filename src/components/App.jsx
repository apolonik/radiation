import React, {Component} from 'react';
import MyMap from './MyMap';
import Popup from './Popup/Popup';
import ControlPanel from './ControlPanel';

export default class App extends Component {
  render = () => (
    <>
      <MyMap  />
      <ControlPanel />
      <Popup />
    </>
  );
}
