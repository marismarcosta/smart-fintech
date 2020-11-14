import React from 'react';
import { MdKeyboardArrowLeft, AiOutlineDollarCircle, FiTrendingUp, GoGraph, AiFillEdit } from 'react-icons/all';

import './style.css';

function PlanningHome() {
  return (
    <div className="business-menu">

      <header>
        <MdKeyboardArrowLeft/> <h1>Planejamento Financeiro 2020.2</h1>
      </header>

      <div className="sub-title">
        <h3>../Planejamentos /
          <strong> Planejamento Financeiro 2020.2</strong>
        </h3>
      </div>

      <div class="items-grid">

        <li>
          <AiFillEdit/>
          <span>Detalhes / Editar</span>
        </li>
        <li>
          <GoGraph/>
          <span>Análise financeira</span>
        </li>
        <li>
          <AiOutlineDollarCircle/>
          <span>Solicitação de crédito</span>
        </li>
        <li>
          <FiTrendingUp size="25"/>
          <span> Acompanhamento</span>
        </li>

      </div>


    </div>
  );
}

export default PlanningHome;
