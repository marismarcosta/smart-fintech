import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdKeyboardArrowLeft, AiOutlineDollarCircle, 
  FiTrendingUp, GoGraph, AiFillEdit 
} from 'react-icons/all';

import './style.css';

function PlanningHome() {
  return (
    <div className="business-menu">

      <header>
        <Link to="/planning" className="header-nav">
          <MdKeyboardArrowLeft/>
        </Link>
        <h1>Planejamento Financeiro 2020.2</h1>
      </header>

      <div className="sub-title">
        <h3>../Planejamentos /
          <strong> Planejamento Financeiro 2020.2</strong>
        </h3>
      </div>

      <div class="items-grid">
        <Link className="cards">
          <li>
            <AiFillEdit/>
            <span>Detalhes / Editar</span>
          </li>
        </Link>
        
        <Link className="cards">
          <li>
            <GoGraph/>
            <span>Análise financeira</span>
          </li>
        </Link>
       
        <Link className="cards">
          <li>
            <AiOutlineDollarCircle/>
            <span>Solicitação de crédito</span>
          </li>
        </Link>
        
        <Link className="cards">
          <li>
            <FiTrendingUp size="25"/>
            <span> Acompanhamento</span>
          </li>
        </Link>
      </div>

    </div>
  );
}

export default PlanningHome;
