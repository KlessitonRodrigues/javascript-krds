import React, { useState } from "react";

import MarkInput from "../../templates/markInput/index";
import "./style.sass";

const SidePanel = () => {
  const [isActive, setActive] = useState(false);
  const [hideFilters, setHideFilters] = useState(false);

  return (
    <div
      className={`
      filters-sidepanel 
      --active-${isActive} 
      --hide-filters-${hideFilters}`}
    >
      <i
        className={`icon icon-menu --active-${isActive}`}
        onClick={() => setActive(!isActive)}
      />

      <div className="fs__search-bar">
        <input
          className="fs__search-input"
          type="text"
          onFocus={() => setHideFilters(true)}
          onBlur={() => {
            setHideFilters(false);
            setActive(false);
          }}
        />
        <i className="icon sm icon-search" />
      </div>

      <div className="fs__filters">
        <h2 className="fs__subtitle">Ordenar por</h2>
        <div className="fs__filters-group">
          <MarkInput type="radio" name="order" label="Nomes" />
          <MarkInput type="radio" name="order" label="Pendências" />
          <MarkInput type="radio" name="order" label="Tipos de Plano" />
        </div>

        <h2 className="fs__subtitle">Exibir somente</h2>
        <div className="fs__filters-group">
          <MarkInput name="pending" label="Pendências" />
          <MarkInput name="pending" label="Plano Básico" />
          <MarkInput name="pending" label="Plano Premium" />
          <MarkInput name="pending" label="Plano Ultimate" />
          <MarkInput name="pending" label="Musculação" />
          <MarkInput name="pending" label="Jiu - Jitso" />
          <MarkInput name="pending" label="Pilates" />
          <MarkInput name="pending" label="Mix Prime" />
          <MarkInput name="pending" label="Jump" />
          <MarkInput name="pending" label="Spinning" />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
