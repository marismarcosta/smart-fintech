import React from 'react';
import { Link } from 'react-router-dom';

import { 
  MdKeyboardArrowLeft, AiOutlineDollarCircle,
  FiTrendingUp, SiGooglescholar, AiOutlineSchedule
} from 'react-icons/all';

import './style.css';

//.navBack:link, .navBack:visited {text-decoration: none}

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
        
        <Link className="menu-cards">
          <li>
            <SiGooglescholar/>
            <span>Educativo</span>
          </li>
        </Link>

        <Link className="menu-cards">
          <li>
            <AiOutlineDollarCircle/>
            <span>Inteligência de mercado</span>
          </li>
        </Link>
        
        <Link className="menu-cards">
          <li>
            <AiOutlineDollarCircle/>
            <span>Nateriais de apoio</span>
          </li>
        </Link>
       
        <Link className="menu-cards">
          <li>
            <FiTrendingUp size="25"/>
            <span>Linhas de crédito</span>
          </li>
        </Link>
        
        <Link className="menu-cards">  
          <li>
            <FiTrendingUp size="25"/>
            <span>Blog Linker</span>
          </li>
        </Link>
        
      </div>

    </div>
  );
}

export default BusinessMenu;