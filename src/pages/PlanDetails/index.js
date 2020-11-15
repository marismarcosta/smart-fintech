import React, {useEffect, useState} from 'react';
import { Link, useParams} from 'react-router-dom';

import api from "../../services/api";

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
  let {id, name} = useParams();

  const [plan, setPlan] = useState({});

  const [operationOptions,setOperationOptions] = useState([]);

  const [maturityOptions,setMaturityOptions] = useState([]);

  const [periodOptions,setPeriodOptions] = useState([ '2021.1', '2021.2', '2022.1', '2022.2']);

  const [monthOptions,setMonthOptions] = useState([ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']);

  const [yearOptions,setYearOptions] = useState(['2020', '2021', '2022', '2023']);

  let dayOptions = [];
  for(let i=1; i < 31; i++ ){
    dayOptions.push(i);
  }

  useEffect(()=>{
    api
      .get(`Plannings/GetList`)
      .then(res => {
        const plans = res.data;
        const currentPlan = plans.find((plan, index, array) => plan.id === id);
        setPlan(currentPlan);
      })
      .catch(error => {
        console.log(error);
      });
  },[])

  useEffect(()=>{

    setOperationOptions([plan.businessOccupation?.description,'Marcketing', 'Vendas', 'Suprimentos', 'Technologia']);
    setMaturityOptions([plan.maturity?.description, 'Iniciante', 'Intermediário', 'Experiente', 'Expecialista' ]);

  },[plan])



  return (
    <div className="business-menu">

      <header>
        <MdModeEdit/> <h1>{name}</h1> 
        <Link to="/planning" className="close-section"><AiOutlineClose/></Link>
      </header>

      <div className="sub-section">
        <h3>../{name}/
          <strong> Detalhes</strong>
        </h3>
      </div>

      
    <div class="section-1">
      <div>
        <h1>Descrição:</h1>

        <div className="description-box">
          <p>O que faz, como faz, onde faz - descrição reduzida. Modelo de negócio y, geração de receita por meio de assinaturas.
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
            <p>{plan.investmentValueLabel}</p>
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
