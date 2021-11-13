import React from "react";

import Service from "../../components/service/index";

import serviceImg1 from "../../assets/img/service1.jpg";
import serviceImg2 from "../../assets/img/service2.jpg";
import serviceImg3 from "../../assets/img/service3.jpg";
import serviceImg4 from "../../assets/img/service4.jpg";
import serviceImg5 from "../../assets/img/service5.jpg";
import serviceImg6 from "../../assets/img/service6.jpg";

const Section2 = () => (
  <section className="second-section">
    <h2 className="ss__title">Nossos Serviços</h2>
    <div className="ss_services-box">
      <Service img={serviceImg1} title="Musculação">
        <li>Aumenta a força e massa muscular</li>
        <li>Redução de Peso e gordura corporal</li>
        <li>Aprimoramento do desenpenho esportivo</li>
      </Service>
      <Service img={serviceImg2} title="Jiu - Jitso">
        <li>Trabalha a resistência fisíca.</li>
        <li>Diminui o strees além de melhora a qualidade do sono.</li>
      </Service>
      <Service img={serviceImg3} title="Pilates">
        <li>Aumentam a flexibilidade, melhora a resistência muscular.</li>
        <li>Proporcionar um posicionamento corpóreo mais adequado.</li>
      </Service>
      <Service img={serviceImg4} title="Mix Prime">
        <li>Melhora o equilíbrio estático e dinâmico.</li>
        <li>Desenvolve resistência e agilidade.</li>
        <li>Correção da má postura e desequilíbrios musculares.</li>
      </Service>
      <Service img={serviceImg5} title="Jump">
        <li>Alto gasto calórico.</li>
        <li>
          Fortalece a musculatura dos membros inferiores, como coxas e
          panturrilhas.
        </li>
      </Service>
      <Service img={serviceImg6} title="Spinning">
        <li>
          Exercício focado em resistência, força, intervalos, alta intensidade e
          recuperação
        </li>
      </Service>
    </div>
  </section>
);

export default Section2;
