import React from "react";
import s from "./rules.module.scss";

function PrivacyPolicy(props) {
  return (
    <div className={s.rules_page}>
      <h2 dangerouslySetInnerHTML={{__html: props.langData.privacy_policy_page_header}} />

      <p dangerouslySetInnerHTML={{__html: props.langData.privacy_policy_page_text}} />
    </div>
  );
}

export default PrivacyPolicy;
