import React from "react";

import Button from "../../templates/button/index";
import TextAndIcon from "../../templates/textAndIcon/index";

const Section1 = () => (
  <section className="first-section">
    <article className="fs__box">
      <h2 className="fs__box-title">O que temos para você:</h2>
      <hr />
      <TextAndIcon icon="arm">
        Métodos de treino testados e aprovados por especialistas do mundo todo.
      </TextAndIcon>
      <TextAndIcon icon="belt">
        Ambiente personalizado para manter sua montivação ao máximo.
      </TextAndIcon>
      <TextAndIcon icon="bike">
        Os melhores equipamentos do mercado para maximizar seus resultados.
      </TextAndIcon>
      <TextAndIcon icon="watch">
        Profissionais altamente capacitados para lhe dar toda a assistência que
        precisar.
      </TextAndIcon>
      <div className="fs__box-btn">
        <Button text="Conheça nossa localização" />
      </div>
    </article>
  </section>
);

export default Section1;
