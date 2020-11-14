import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdInfoOutline } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineAlignRight } from 'react-icons/ai';

import './style.css';

function Planning() {
  return (
    <div className="planning">
      <header className="header-content">
        <Link to={'/'} className="nav-back">
          <MdKeyboardArrowLeft size={40} color="#fa7268" />
        </Link>
        <h1>Meus planejamentos</h1>
        <Link to={'/planning'} className="nav-info">
          <MdInfoOutline size={30} color="#fa7268" />
        </Link>
      </header>
      <main>
        <Link to={'/new-planning'} className="new-planning">
          <p>Novo planejamento</p>
          <AiOutlinePlus size={25} color="#FFF" />
        </Link>
        <div className="planning-list">
          <div className="planning-card">
            <Link to={'/planning-options'} className="card-link">
              <div className="planning-info">
                <h2>Planejamento Financeiro 2020.2</h2>
                <p>
                  Investimento: R$ 125.000
                  <br />
                  Período: jul. 2020 a dez. 2020
                </p>
              </div>
              <div className="icon-plus">
                <AiOutlineAlignRight size="4rem" color="#fa7268" />
              </div>
            </Link>
          </div>
          <div className="planning-card">
            <Link to={'/planning-options'} className="card-link">
              <div className="planning-info">
                <h2>Planejamento Financeiro 2020.1</h2>
                <p>
                  Investimento: R$ 125.000
                  <br />
                  Período: jan. 2020 a jun. 2020
                </p>
              </div>
              <div className="icon-plus">
                <AiOutlineAlignRight size="4rem" color="#fa7268" />
              </div>
            </Link>
          </div>
          <div className="planning-card">
            <Link to={'/planning-options'} className="card-link">
              <div className="planning-info">
                <h2>Planejamento Financeiro 2019.2</h2>
                <p>
                  Investimento: R$ 125.000
                  <br />
                  Período: jun. 2019 a dez. 2019
                </p>
              </div>
              <div className="icon-plus">
                <AiOutlineAlignRight size="4rem" color="#fa7268" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Planning;
