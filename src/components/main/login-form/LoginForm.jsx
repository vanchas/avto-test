import React from 'react';
import './login-form.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService } from '../../../_services/authentication.service';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push('/');
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="py-5 bg-light login-form-block">
        {/* user login: user, password: user */}
        {/* user login: admin, password: admin */}

        <Formik
          initialValues={{
            username: '',
            password: ''
          }}

          validationSchema={Yup.object().shape({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
          })}

          onSubmit={(
            { username, password },
            { setStatus, setSubmitting }
          ) => {
            setStatus();
            authenticationService.login(username, password)
              .then(
                user => {
                  const { from } =
                    // this.props.location.state ||
                    { from: { pathname: "/" } };
                  this.props.history.push(from);
                },
                error => {
                  setSubmitting(false);
                  setStatus(error);
                }
              );
          }}

          render={({
            errors, status, touched, isSubmitting
          }) => (
              <Form>
                <div className="login-form">
                  <div className="login container">
                    <Field
                      name="username"
                      type="text"
                      placeholder="login"
                      className={'mb-3 form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="invalid-feedback invalid-feedback-username"
                    />
                    <Field name="password"
                      placeholder="password"
                      type="password"
                      className={'mb-3 form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback invalid-feedback-password"
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-entry text-center"
                      disabled={isSubmitting}>
                      ВХОД
                      </button>

                    {isSubmitting &&
                      <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>}
                  </div>

                  {status &&
                    <div className={'alert alert-danger'}>
                      {status}
                    </div>
                  }
                </div>
              </Form>
            )}
        />
      </div>
    )
  }
}
