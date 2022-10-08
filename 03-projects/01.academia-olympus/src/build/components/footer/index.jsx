import React from "react";

import "./style.sass";

import TextAndIcon from "../../templates/textAndIcon/index";

const Footer = () => (
  <footer className="page-footer">
    <div className="pf__contacts">
      <h3 className="pf__title">Contatos</h3>
      <TextAndIcon size="sm" icon="phone">
        56 4738-7483
      </TextAndIcon>
      <TextAndIcon size="sm" icon="whatsapp">
        67 4783-4344
      </TextAndIcon>
      <TextAndIcon size="sm" icon="gmail">
        academiaolympus@gmail.com
      </TextAndIcon>
    </div>
    <div className="pf__social">
      <h3 className="pf__title">Social</h3>
      <TextAndIcon size="sm" icon="twitter">
        <a>Twitter</a>
      </TextAndIcon>
      <TextAndIcon size="sm" icon="facebook">
        <a>Facebook</a>
      </TextAndIcon>
      <TextAndIcon size="sm" icon="instagram">
        <a>Instagram</a>
      </TextAndIcon>
    </div>
  </footer>
);

export default Footer;
