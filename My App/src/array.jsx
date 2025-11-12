import React from 'react';

const students = [
  { id: 1, name: 'Anu' },
  { id: 2, name: 'Manu' },
  { id: 3, name: 'Sanu' },
  { id: 4, name: 'Tinu' },
  { id: 5, name: 'Linu' }
];

function StudentList() {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.id}. {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;