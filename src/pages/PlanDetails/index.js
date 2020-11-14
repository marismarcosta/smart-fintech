import React from 'react';
import {
    MdModeEdit, AiOutlineDollarCircle,
    FiTrendingUp, GoGraph, AiFillEdit,
    AiOutlineClose, IoIosArrowDown
} from 'react-icons/all';

import './style.css';

function PlanDetails() {
  return (
    <div className="business-menu">

      <header>
        <MdModeEdit/> <h1>Nome do planejamento</h1> <AiOutlineClose/>
      </header>

      <div className="sub-section">
        <h3>../Planejamento Financeiro 2020.2 /
          <strong> Detalhes</strong>
        </h3>
      </div>

      <div class="sub-title">
          <h2>
              <strong>Planejamento Financeiro 2020.2</strong>
              <hr/>
          </h2>
      </div>

    <div>
      <div>
        <p>Descrição</p>

        <div className="description-box">
          <p>O que faz, como faz, onde faz - descrição reduzida.
            <br/>
            Modelo de negócio y, geração de receita por meio
            de assinaturas.
          </p>
        </div>
      </div>

      <div>
        <h4>Mercado de atuação</h4>
        <div className="select-box">
          Escolher <IoIosArrowDown/>
        </div>
      </div>

      <div>
        <h4>Momento / Maturidade</h4>
        <div className="select-box">
          Escolher <IoIosArrowDown/>
        </div>
      </div>
    </div>

    <div class="attachment-container">
      <p>Anexos</p>

      <div class="items-grid">
        <li>
          <AiFillEdit/>
          <span>DRE</span>
        </li>
        <li>
          <GoGraph/>
          <span>Pitch Deck</span>
        </li>
        <li>
          <AiOutlineDollarCircle/>
          <span>Extratos Bancários</span>
        </li>
        <li>
          <FiTrendingUp size="25"/>
          <span>Outros documentos</span>
        </li>
      </div>
    </div>

    <div>
      <div>
        <h4>Período</h4>

        <div className="select-box">
          Escolher <IoIosArrowDown/>
        </div>
      </div>

      <div>
        <h4>Data de início</h4>

        <div className="select-many-box">
          <div className="select-box">
            Dia <IoIosArrowDown/>
          </div>
          <div className="select-box">
            Mês <IoIosArrowDown/>
          </div>
          <div className="select-box">
            Ano <IoIosArrowDown/>
          </div>
        </div>

        <div>
          <h3>*Capital em Caixa</h3>
          <div className="amount-box">
            <p>R$ 15.000,00</p>
          </div>
        </div>

      </div>

    </div>


    </div>
  );
}

export default PlanDetails;
