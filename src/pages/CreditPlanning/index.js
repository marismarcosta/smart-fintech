import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdInfoOutline,  } from 'react-icons/md';
import { AiOutlineRise } from "react-icons/ai";

import './style.css'

export default function CreditPlanning() {
  return (
    <div className="credit-container">
      <header className="header-content">
        <Link to={'/'} className="nav-back">
          <MdKeyboardArrowLeft size="3rem" color="#fa7268" />
        </Link>
        <h2>Nome do planejamento</h2>
        <Link to={'/planning'} className="nav-info">
          <MdInfoOutline size="2.5rem" color="#fa7268" />
        </Link>
      </header>
      <main className="main-container">
        <div className="credit-leaf">
          <span className="credit-total-text">Valor do crédito necessário:</span>
          <span className="credit-value">R$20.000,00</span>
        </div>

        <p>Próximos passos:</p>

        <section className="section-steps">
          <ul className="steps-list">
            <li className="list-item"><b>1º passo: </b>Clique em solicitar análise</li>
            <li className="list-item"><b>2º passo: </b>Em até 72h um consultor entrará em contato com você.</li>
            <li className="list-item"><b>3º passo: </b>Acompanhe o andamento pela aba “Meu negócio / Linhas de crédito”.</li>
            <li className="list-item"><b>4º passo: </b>O dinheiro será liberado conforme necessidade apontada em planejamento.</li>
          </ul>
        </section>

        <p>FAQ.</p>

        <section className="section-steps">
          <ul className="steps-list">
            <li className="list-item">
              <b>Já tenho crédito pré aprovado?</b>
              Não, todas as análises serão feitas 
              em cima dos documentos enviados.</li>
            <li className="list-item">
              <b>É possivel ter mais de uma linha de crédito?</b>
              Sim, para cada planejamento financeiro imputado na plataforma,
               uma nova linha de crédito pode ser solicitada.</li>
          </ul>
        </section>

        <button className="button-analyze">
          Solicitar análise
          <AiOutlineRise className="icon-analyze" size="2rem" color="#fa7268" />
        </button>
      </main>
    </div>
  )
}
