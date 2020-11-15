import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import {
  MdKeyboardArrowLeft,
  MdInfoOutline,
  AiOutlineAlignRight,
  HiOutlinePlus,
} from "react-icons/all";

import "./style.css";

const Planning = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api
      .get(`Plannings/GetList`)
      .then(res => {
        setPlans(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="planning">
      <header className="header-content">
        <Link to={"/"} className="nav-back">
          <MdKeyboardArrowLeft size={35} color="#fa7268" />
        </Link>
        <h1>Meus planejamentos</h1>
        <Link to={"/planning"} className="nav-info">
          <MdInfoOutline size={28} color="#fa7268" />
        </Link>
      </header>
      <main>
        <Link to={"/new-planning"} className="new-planning">
          <p>Novo planejamento</p>
          <HiOutlinePlus size={25} color="#FFF" />
        </Link>
        <div className="planning-list">
          {plans.map(plan => (
            <div className="planning-card"  key={plan.id}>
              <Link 
                to={`/financial/${plan.id}/${plan.title}`}
                className="card-link"
              >
                <div className="planning-info">
                  <h2>{plan.title}</h2>
                  <p>
                    Investimento: {plan.investmentValue}
                    <br />
                    Período: {plan.investmentValueLabel}
                  </p>
                </div>
                <div className="icon-plus">
                  <AiOutlineAlignRight size="4rem" color="#fa7268" />
                </div>
              </Link>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
};

export default Planning;