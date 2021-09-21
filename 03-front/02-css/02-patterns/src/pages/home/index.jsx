import React from "react";

import Card from "../../components/card/index";
import "./style.sass";

const Home = () => (
  <div className="home-page">
    <Card title="BEM (Block Element Modifie)">
      O BEM – sigla para block, element, modifier - O block é uma entidade
      independente da aplicação, podendo ser o mais alto nível de abstração
      (header, footer) ou componente (graph, tabs). O element é um descendente
      dependente de um block que possui uma certa função. O estilo define o
      modifier como uma propriedade de um block ou element que altera sua
      aparência.
    </Card>
    <Card title="Object Oriented CSS">
      Segundo o OOCSS, um objeto de CSS é todo padrão visual que pode se repetir
      no projeto e é identificado através de uma classe. O estilo enfatiza a
      separação de propriedades de estrutura e de skin. Propriedades como
      background, color e border, quando fizerem parte da identidade visual do
      projeto, são consideras parte do skin e devem ser agrupadas em classes
      próprias.
    </Card>
    <Card title="SMACSS">
      Segundo o OOCSS, um objeto de CSS é todo padrão visual que pode se repetir
      no projeto e é identificado através de uma classe. O estilo enfatiza a
      separação de propriedades de estrutura e de skin. Propriedades como
      background, color e border, quando fizerem parte da identidade visual do
      projeto, são consideras parte do skin e devem ser agrupadas em classes
      próprias.
    </Card>
    <Card title="DRY CSS">
      O princípio consiste em não repetir propriedades com mesmos valores em seu
      código. De maneira simples, a todo momento que isto for necessário, estas
      propriedades devem ser agrupadas e endereçadas por vários seletores. O
      sistema define que o agrupamento seja nomeado através de um primeiro
      seletor, algo como #MEDIUM-WHITE-BACKGROUND para um agrupamento de
      background e border brancas.
    </Card>
  </div>
);

export default Home;
