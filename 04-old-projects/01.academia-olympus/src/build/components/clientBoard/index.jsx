import React, { useState } from "react";

import "./style.sass";

const ClientBoard = (props) => {
  const client = props.client;
  const [isActive, setActive] = useState(false);

  return (
    <div className="client-board">
      <div className="cb__board" onClick={() => setActive(!isActive)}>
        <span className="cb__name">{client.name}</span>
        <span className="cb__status">{client.status}</span>
        <div className="cb__buttons">
          <i className={`icon icon-arrow --active-${isActive}`} />
          <i className="icon sm icon-edit" />
        </div>
      </div>

      <div className={`cb__expanded --active-${isActive}`}>
        <span className="cb__info">
          <b>Email</b> {client.email}
        </span>
        <span className="cb__info">
          <b>Telefone</b> {client.phone}
        </span>
        <span className="cb__info">
          <b>Endereço</b> {client.address}
        </span>
        <span className="cb__info">
          <b>Plano</b> {client.plan}
        </span>
        <span className="cb__info">
          <b>Dia de pagamento</b> {client.payDay}
        </span>
        <span className="cb__info">
          <b>Serviços</b> {client.services}
        </span>
      </div>
    </div>
  );
};

export default React.memo(ClientBoard);
