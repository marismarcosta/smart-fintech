import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdInfoOutline,  } from 'react-icons/md';

import './style.css'

export default function SupportingMaterials() {
	return (
		<div className="supporting-container">
			<header className="header-content">
        <Link to={'/'} className="nav-back">
          <MdKeyboardArrowLeft size="3.2rem" color="#fa7268" />
        </Link>
        <h1>Meu negócio</h1>
        <Link to={'/planning'} className="nav-info">
          <MdInfoOutline size="2.8rem" color="#fa7268" />
        </Link>
      </header>

			<main className="main-container-support">
				<div className="card-material">
					<strong className="title-material">Planilha: Planejamento financeiro</strong>
					<p className="text-material">Planilha modelo de planejamento financeiro</p>
					<a className="download-material" href="-" download="-">Download</a>
				</div>
				<div className="card-material">
					<strong className="title-material">Apresentação: Pitch Deck</strong>
					<p className="text-material">Apresentação modelo para Pitch Deck</p>
					<a className="download-material" href="-" download="-">Download</a>
				</div>
				<div className="card-material">
					<strong className="title-material">Apresentação: Passo a passo plataforma</strong>
					<p className="text-material">Passo a passo para incluir um planejamento financeiro na Linker</p>
					<a className="download-material" href="-" download="-">Download</a>
				</div>
			</main>
		</div>
	);
}