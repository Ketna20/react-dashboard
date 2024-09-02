import React from 'react';
import './TeacherList.css';
import Image1 from '../../assets/images/profile-img.jpg';
import Teacher2 from '../../assets/images/teacher2.jpg';
import Teacher3 from '../../assets/images/teacher3.jpg';

const teachers = [
    {
        image: Image1,
        name: 'Prof. Jhone Doe',
        duration: '20 Hours Lesson',
        cost: '100'
    },
    {
      image: Teacher2,
      name: 'Prof. Jhone Doe',
      duration: '20 Hours Lesson',
      cost: '100'
  },
  {
    image: Teacher3,
    name: 'Prof. Jhone Doe',
    duration: '20 Hours Lesson',
    cost: '100'
  }
];

const TeacherList = () => {
  return (
    <div className='teacher-list'>
      <div className="list-header">
        <h2>Teachers</h2>
        <select>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher) => (
            <div className="list">
                <div className="teacher--detail">
                    <img src={teacher.image} alt={teacher.name} />
                    <h2>{teacher.name}</h2>
                </div>
                <span>{teacher.duration}</span>
                <span>${teacher.cost}/hr.</span>
                <span className='teacher--todo'>:</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
