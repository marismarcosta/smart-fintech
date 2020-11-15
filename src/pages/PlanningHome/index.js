import React, { useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import { 
  MdKeyboardArrowLeft, AiOutlineDollarCircle, 
  FiTrendingUp, GoGraph, AiFillEdit 
} from 'react-icons/all';

import './style.css';

function PlanningHome() {
  let {id, name} = useParams();
  

  return (
    <div className="business-menu">

      <header>
        <Link to="/planning" className="header-nav">
          <MdKeyboardArrowLeft/>
        </Link>
        <h1>{name}</h1>
      </header>

      <div className="sub-title">
        <h3>../Planejamentos /
          <strong> {name}</strong>
        </h3>
      </div>

      <div class="items-grid">
        <Link to={`/details/${id}/${name}`} className="cards">
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
