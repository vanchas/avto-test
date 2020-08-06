import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import s from "./login.module.scss";
import { userService } from "../../../_services/user.service";

export default function RecoveryPassword(props) {
    const [newPassword, setNewPassword] = useState(null);
    const [newPasswordConfirmed, setNewPasswordConfirmed] = useState(null);

    const submitHandlerSettingNewPassword = (e) => {
        e.preventDefault();
        // console.log(token, newPassword, newPasswordConfirmed);
        if (newPassword && newPassword === newPasswordConfirmed) {
            userService.setNewPassword(
                props.location.pathname.split('token=')[1],
                newPassword,
                newPasswordConfirmed
            );
        } else {
            alert(
                'Пароль має бути не меньший нiж 6 символів та Поле "Пароль" і "Підтвердження паролю" повинно співпадати'
            );
        }
    };

    useEffect(() => {
        console.log(props.location.pathname.split('token=')[1])
    }, []);

    return (
        <Form
            onSubmit={submitHandlerSettingNewPassword}
            className={`mx-auto`}
            style={{ maxWidth: "700px" }}
        >
            <Form.Group controlId="formBasicPassword">
                <Form.Control
                    required
                    autoComplete="true"
                    type="password"
                    minLength={`6`}
                    placeholder="введіть новий пароль"
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control
                    required
                    autoComplete="true"
                    type="password"
                    minLength={`6`}
                    placeholder="підтвердіть новий пароль"
                    onChange={(e) => setNewPasswordConfirmed(e.target.value)}
                />
            </Form.Group>
            <Button
                variant=""
                type="submit"
                className={`btn btn-outline-danger font-weight-bold ${s.submit_button}`}
            >
                {props.langData.forgot_password_form_save_password_btn}
            </Button>
        </Form>
    );
}
