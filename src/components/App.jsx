import React, {Component} from 'react';
import Header from './Header';
import MyMap from './MyMap';
import Popup from './Popup/Popup';
import Menu from './Menu';

export default class App extends Component {
  render = () => (
    <>
      <Header />
      <MyMap />
      <Menu />
      <Popup />
    </>
  );
}
