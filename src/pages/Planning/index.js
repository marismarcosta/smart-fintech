import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdInfoOutline } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import './style.css';

function Planning() {
  return (
    <div className="planning">
      <header className="header-content">
        <Link to={'/'} className="nav-back">
          <MdKeyboardArrowLeft size="5rem" color="#fa7268" />
        </Link>
        <h1>Meus planejamentos</h1>
        <Link to={'/planning'} className="nav-info">
          <MdInfoOutline size="4rem" color="#fa7268" />
        </Link>
      </header>
      <main>
        <Link to={'/new-planning'} className="card new-planning">
          Novo planejamento
          <AiOutlinePlus size="3rem" color="#fa7268" />
        </Link>
      </main>
    </div>
  );
}

export default Planning;
