import React from 'react';
import { Link } from 'react-router-dom';

import {
  MdModeEdit, FaReceipt,
  RiPictureInPictureLine, 
  MdArtTrack, 
  MdChromeReaderMode,
  AiOutlineClose
} from 'react-icons/all';

import './style.css';
import OperationTable from './operationTable';

function PlanDetails() {

  const operationOptions = [
    'Escolher', 'Marcketing', 'Vendas', 'Suprimentos', 'Technologia'
  ];

  const maturityOptions = [
    'Escolher', 'Iniciante', 'Intermediário', 'Experiente', 'Expecialista'
  ];

  const periodOptions = [
    'Escolher', '2021.1', '2021.2', '2022.1', '2022.2'
  ];

  let dayOptions = ['Dia'];
  for(let i=1; i < 31; i++ ){
    dayOptions.push(i);
  }

  const monthOptions = [
    'Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const yearOptions = [
    'Ano','2020', '2021', '2022', '2023',
  ];

  return (
    <div className="business-menu">

      <header>
        <MdModeEdit/> <h1>Nome do planejamento</h1> 
        <Link className="close-section"><AiOutlineClose/></Link>
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

    <div class="section-1">
      <div>
        <h1>Descrição:</h1>

        <div className="description-box">
          <p>O que faz, como faz, onde faz - descrição reduzida.
            <br/>
            Modelo de negócio y, geração de receita por meio
            de assinaturas.
          </p>
        </div>
      </div>

      <div>
        <h1>Mercado de atuação:</h1>

        <select className="select-operation">
          {operationOptions.map((operation) => (
            <option value={operation}>{operation}</option> 
          ))}
        </select>
      </div>

      <div>
        <h1>Momento / Maturidade:</h1>

        <select className="select-operation">
          {maturityOptions.map((operation) => (
            <option value={operation}>{operation}</option> 
          ))}
        </select>
      </div>
    </div>

    <div class="attachment-container">
      <h1>Anexos</h1>

      <div class="items-grid">
        <li>
          <MdChromeReaderMode/>
          <span>DRE</span>
        </li>
        <li>
          <MdArtTrack size="30"/>
          <span>Pitch Deck</span>
        </li>
        <li>
          <FaReceipt/>
          <span>Extratos Bancários</span>
        </li>
        <li>
          <RiPictureInPictureLine size="25"/>
          <span>Outros documentos</span>
        </li>
      </div>
    </div>

    <div class="section-1">
      <div>
        <h1>Período</h1>

        <select className="select-operation">
          {periodOptions.map((operation) => (
            <option value={operation}>{operation}</option> 
          ))}
        </select>
      </div>

      <div>
        <h1>Data de início</h1>
        
        <div className="date-container">
            
          <select className="date-picker">
            {dayOptions.map((month)=>(
              <option value={month}>{month}</option>
            ))}
          </select>

          <select className="date-picker">
            {monthOptions.map((month)=>(
              <option value={month}>{month}</option>
            ))}
          </select>

          <select className="date-picker">
            {yearOptions.map((month)=>(
              <option value={month}>{month}</option>
            ))}
          </select>

        </div>

        <div className="amount-content">
          <h1>*Capital em Caixa</h1>
          <div className="amount-box">
            <p>R$ 15.000,00</p>
          </div>
        </div>
      </div>

      <div className="table-container">
        <OperationTable/>
      </div>

    </div>


    </div>
  );
}

export default PlanDetails;
