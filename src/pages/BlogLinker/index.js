import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdInfoOutline,  } from 'react-icons/md';

import './style.css';

export default function BlogLinker() {
  const blogs = [
    {
      id: 1,
      title: "LGPD: Saiba os impactos sobre as contas digitais",
      font: "UNIVERSO LINKER",
      date: "9 de novembro de 2020",
    },
    {
      id: 2,
      title: "Quais impostos uma Eireli e uma SLU precisam pagar?",
      font: "UNIVERSO LINKER",
      date: "9 de novembro de 2020",
    },
    {
      id: 3,
      title: "Chaves Pix: como funciona e quais são as vantagens",
      font: "UNIVERSO LINKER",
      date: "6 de novembro de 2020",
    },
    {
      id: 4,
      title: "Conheça o LinkerPay: O link de pagamento do Linker",
      font: "NOSSAS SOLUÇÕES",
      date: "6 de novembro de 2020",
    },
    {
      id: 5,
      title: "O que é Pix e como ele funciona",
      font: "UNIVERSO LINKER",
      date: "5 de novembro de 2020",
    }
  ];

  return (
     <>
      <div className="blog-container">
        <header className="header-content">
          <Link to={'/'} className="nav-back">
            <MdKeyboardArrowLeft size="3.2rem" color="#fa7268" />
          </Link>
          <h1>Meu negócio</h1>
          <Link to={'/planning'} className="nav-info">
            <MdInfoOutline size="2.8rem" color="#fa7268" />
          </Link>
        </header>

        <main className="main-container-blog">
          <p className="order-title">Classificar por:</p>
            <div className="select-container">
              <select className="select-container-blog">
                <option className="options-order">Últimas notícias</option>
                <option className="options-order">Random notícias</option>
              </select>
            </div>
          
            {blogs.map(blog => <div className="card-blog" key={blog.id}>
                                <strong className="card-title">{blog.title}</strong>
                                <div className="container-info">
                                  <span className="info-blog">{blog.font}</span>
                                  <span className="info-date">{blog.date}</span>
                                </div>
                              </div>)}    
        </main>
      </div>
     </> 
  );
};
