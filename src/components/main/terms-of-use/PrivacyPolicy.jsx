import React from "react";
import s from "./rules.module.scss";

function PrivacyPolicy(props) {
  return (
    <div className={s.rules_page}>
      <h2>{props.langData.privacy_policy_page_header}</h2>

      <p>{props.langData.privacy_policy_page_text}</p>
    </div>
  );
}

export default PrivacyPolicy;
