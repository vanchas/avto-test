import React from "react";
import s from "./rules.module.scss";

function TermsOfUse(props) {
  return (
    <div className={s.rules_page}>
      <h2 dangerouslySetInnerHTML={{__html: props.langData.terms_of_use_page_header}} />

      <p dangerouslySetInnerHTML={{__html: props.langData.terms_of_use_page_text}} />
    </div>
  );
}

export default TermsOfUse;
