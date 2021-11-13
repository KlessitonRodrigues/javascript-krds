import React from "react";

import Plan from "../../components/plan/index";

const Section3 = () => (
  <section className="third-section">
    <h2 className="ts__title"> Nossos Planos</h2>
    <div className="ts__plans-box">
      <Plan title="Plano Básico" value=" R$ 29.99">
        <li>2 dias por semana</li>
        <li>1x Serviço</li>
        <li>Personal treiner</li>
      </Plan>
      <Plan title="Plano Premium" value=" R$ 39.99">
        <li>3 dias por semana</li>
        <li>2x Serviços</li>
        <li>Roupas de Treino</li>
        <li>Personal Treiner</li>
      </Plan>
      <Plan title="Plano Ultimate" value="R$ 49.99">
        <li>4 adias por semana</li>
        <li>2x Serviços</li>
        <li>Roupas de treino +</li>
        <li>Lavanderia</li>
        <li>Personal Treiner</li>
      </Plan>
    </div>
  </section>
);

export default Section3;
