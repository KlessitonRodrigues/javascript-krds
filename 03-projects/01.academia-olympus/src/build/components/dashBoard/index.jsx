import React, { useState } from "react";

import "./style.sass";

import Button from "../../templates/button/index";
import Overlay from "../../templates/overlay/index";
import ClientBoard from "../clientBoard/index";
import ClientForm from "../clientForm/index";

const clientTest = {
  name: "Klessiton Rodrigues da Silva",
  status: "Nada pendênte",
  email: "klessiton@gmail.com",
  phone: "89 8938-3922",
  address: "C. 14 R. XVI de Agosto B. Piracicaba SP",
  plan: "Premium",
  payDay: "20",
  services: ["Musculação", "Jump", "Pilates"],
};

const DashBoard = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="client-dashboard">
      <div className="cd__button-box">
        <Button text="Novo Cliente" onClick={() => setOverlay(!overlay)} />
      </div>

      <Overlay show={overlay} setShow={setOverlay}>
        <ClientForm />
      </Overlay>

      <div className="cd__client-list scroll-bar">
        <ClientBoard client={clientTest} />
        <ClientBoard client={clientTest} />
        <ClientBoard client={clientTest} />
        <ClientBoard client={clientTest} />
        <ClientBoard client={clientTest} />
        <ClientBoard client={clientTest} />
      </div>
    </div>
  );
};

export default DashBoard;
