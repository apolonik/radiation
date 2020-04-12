import React, {Component} from 'react';
import MyMap from './MyMap';
import Popup from './Popup/Popup';
import Menu from './Menu';

export default class App extends Component {
  render = () => (
    <>
      <div className="header">
        <h1>Моя удивительная карта</h1>
      </div>
      <MyMap />
      <Menu />
      <Popup />
    </>
  );
}
