import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/workout">تمارين</Link>
        </li>
        <li>
          <Link to="/calisthenics">كاليستينكس</Link>
        </li>
        <li>
          <Link to="/entertainment">ترفيه</Link>
        </li>
        <li>
          <Link to="/education">تعليم</Link>
        </li>
        <li>
          <Link to="/religious">دينية</Link>
        </li>
        <li>
          <Link to="/programming">برمجة</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;