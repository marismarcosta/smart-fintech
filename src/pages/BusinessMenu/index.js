import React from 'react';
import { Link } from 'react-router-dom';

import { 
  MdKeyboardArrowLeft,
  AiOutlineDollarCircle,
  ImFilesEmpty,  
  AiOutlineSchedule,
  CgWebsite,
  RiBarChartLine
} from 'react-icons/all';

import './style.css';

function BusinessMenu() {
  return (
    <div className="business-menu">

      <header>
        <Link className="header-content">
          <MdKeyboardArrowLeft/> 
        </Link>
        <h1>Meu negócio</h1>
      </header>

      <div className="sub-title">
        <h3>Meu negócio</h3>
      </div>

      <div class="items-grid">
        <Link to="/planning" className="menu-cards">
          <li>
              <AiOutlineSchedule/>
              <span>Planejamentos</span>
          </li>
        </Link>
        
        <Link to="/supporting-materials" className="menu-cards">
          <li>
            <ImFilesEmpty/>
            <span>Materiais de apoio</span>
          </li>
        </Link>

        <Link to="" className="menu-cards">
          <li>
            <RiBarChartLine/>
            <span>Inteligência de mercado</span>
          </li>
        </Link>
       
        <Link to="/credit-planning" className="menu-cards">
          <li>
            <AiOutlineDollarCircle size="25"/>
            <span>Linhas de crédito</span>
          </li>
        </Link>
        
        <Link to= "/blog-linker" className="menu-cards">  
          <li>
            <CgWebsite size="25"/>
            <span>Blog Linker</span>
          </li>
        </Link>
        
      </div>

    </div>
  );
}

export default BusinessMenu;