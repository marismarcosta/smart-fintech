import React from 'react';

import { 
  MdKeyboardArrowLeft, AiOutlineDollarCircle,
  FiTrendingUp, SiGooglescholar, AiOutlineSchedule
} from 'react-icons/all';

import './style.css';

function BusinessMenu() {
  return (
    <div className="business-menu">

      <header>
        <MdKeyboardArrowLeft/> <h1>Meu negócio</h1>
      </header>

      <div className="sub-title">
        <h3>Meu negócio</h3>
      </div>

      <div class="items-grid">
        <li>
          <AiOutlineSchedule/>
          <span>Planejamentos</span>
        </li>
        <li>
          <SiGooglescholar/>
          <span>Educativo</span>
        </li>
        <li>
          <AiOutlineDollarCircle/>
          <span>Inteligência de mercado</span>
        </li>
        <li>
          <img src={AttachFile} alt="AttachFile"/>
          <span>Nateriais de apoio</span>
        </li>
        <li>
          <FiTrendingUp size="25"/>
          <span>Linhas de crédito</span>
        </li>
        <li>
          <FiTrendingUp size="25"/>
          <span>Blog Linker</span>
        </li>
      </div>

    </div>
  );
}

export default BusinessMenu;