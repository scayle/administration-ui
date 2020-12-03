import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { MutationLoginArgs } from "../../graphql/types";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../globalStores/AppStore/AppStore";
import { Column, Row } from "../../components/flex";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import { SpaceSize } from "../../components/responsiveTheme";

interface Values extends MutationLoginArgs {}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Login = observer(({ children }: Props) => {
  const appStore = useAppStore();

  async function handleSubmit(
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) {
    appStore.authStore.login(values).then(() => {
      formikHelpers.resetForm();
    });
  }

  if (!appStore.authStore.isLoggedIn) {
    return (
      <div className="center flex">
        <Row>
          <Column>
            <Formik<Values>
              onSubmit={handleSubmit}
              initialValues={{
                username: "",
                password: "",
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="text"
                    name="username"
                    component={() => (
                      <TextField name="username" type="text" label="Username" />
                    )}
                  />
                  <ErrorMessage name="username" component="div" />
                  <br />
                  <Field
                    type="password"
                    name="password"
                    component={() => (
                      <TextField
                        name="password"
                        type="password"
                        label="Password"
                      />
                    )}
                  />
                  <ErrorMessage name="password" component="div" />
                  <br />
                  <div className="center flex">
                    <Button type="submit" disabled={isSubmitting}>
                      Login
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Column>
        </Row>
      </div>
    );
  }

  return <>{children}</>;
});

export default Login;
