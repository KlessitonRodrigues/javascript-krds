import React, { useCallback, useState } from "react";

import { postClient } from "../../data/routes/manager";
import Button from "../../templates/button/index";
import TextInput from "../../templates/textInput/index";
import ListInput from "../../templates/listInput/index";
import PlanInput from "../../templates/planInput/index";
import "./style.sass";

function handleFormSubmit(formData) {
  postClient(formData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: [],
    plan: "Básico",
  });

  const setForm = useCallback((value) =>
    setFormData({ ...formData, ...value })
  );

  return (
    <div className="client-form">
      <h1 className="cf__title">Novo Cliente</h1>
      <div className="cf__grid">
        <div className="cf__info">
          <TextInput
            title="Name"
            value={formData.name}
            onChange={(name) => setForm({ name })}
          />
          <TextInput
            title="Email"
            value={formData.email}
            onChange={(email) => setForm({ email })}
          />
          <TextInput
            title="Telefone"
            value={formData.phone}
            onChange={(phone) => setForm({ phone })}
          />
          <TextInput
            title="Endereço"
            value={formData.address}
            onChange={(address) => setForm({ address })}
          />
          <ListInput
            label="Serviços"
            options={["musculação", "pilates", "jiu-jitso"]}
            value={formData.services}
            onChange={(selecteds) => setForm({ services: selecteds })}
          />
        </div>
        <div className="cf__plans">
          <h2 className="cf__subtitle">Planos</h2>
          <PlanInput
            value="Básico"
            selected={formData.plan}
            onChange={(plan) => setForm({ plan })}
            list={["1x Dia"]}
          />
          <PlanInput
            value="Premium"
            selected={formData.plan}
            onChange={(plan) => setForm({ plan })}
            list={["1x Dia"]}
          />
          <PlanInput
            value="Ultimate"
            selected={formData.plan}
            onChange={(plan) => setForm({ plan })}
            list={["1x Dia"]}
          />
          <div className="cf__button-box">
            <Button
              text={"Salvar"}
              onClick={() => handleFormSubmit(formData)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
