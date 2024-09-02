import React from 'react';
import ContentHeader from './ContentHeader';
import Card from '../Card/Card';
import TeacherList from '../TeacherList/TeacherList';
import './Content.css';

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <Card />
      <TeacherList />
    </div>
  );
};

export default Content;
