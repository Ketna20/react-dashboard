import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className='dashboard'>
      <SideBar />
      <div className='dashboard--content'>
        <Content />
        <Profile />
      </div>
    </div>
  );
};

export default App;
