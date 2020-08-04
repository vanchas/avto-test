import React, {useEffect} from "react";
import { connect } from "react-redux";
import {changeSecretFormValue, getSecretFormsValues} from "../../../redux/adminActions";

const styles = {
  form: {
    display: "grid",
  },
};

function AdminFormsManage({ formDetails, changeSecretFormValue, getSecretFormsValues }) {
  useEffect(() => {
    getSecretFormsValues()
  }, [])

  const submitHandler = (id) => {
    changeSecretFormValue(id);
  };

  return (
    <div className={``}>
      {formDetails && (
        <form className={`container`} style={styles.form}>
          {formDetails.map((form, i) => (
            <label key={i} className={`border rounded p-2`}>
              {form.name}
              <input
                className={`ml-2`}
                type={`checkbox`}
                onChange={() => submitHandler(form.id)}
                defaultChecked={parseInt(form.value)}
              />
            </label>
          ))}
        </form>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  formDetails: state.admin.formDetails
});
const mapDispatchToProps = {
  changeSecretFormValue,
  getSecretFormsValues
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminFormsManage);
