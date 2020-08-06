import React from "react";
import s from "./rules.module.scss";

function TermsOfUse(props) {
  return (
    <div className={s.rules_page}>
      <h2>{props.langData.terms_of_use_page_header}</h2>

      <p>{props.langData.terms_of_use_page_text}</p>
    </div>
  );
}

export default TermsOfUse;
