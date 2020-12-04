import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { MutationLoginArgs } from "../../graphql/types";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../globalStores/AppStore/AppStore";
import { Column, Row } from "../../components/flex";
import { Button } from "../../components";
import { TextInput } from "../../components/formik";
import { Elevation } from "@rmwc/elevation";

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
            <Elevation z={3}>
              <Formik<Values>
                onSubmit={handleSubmit}
                initialValues={{
                  username: "",
                  password: "",
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <TextInput name="username" type="text" label="Username" />
                    <ErrorMessage name="username" component="div" />
                    <br />
                    <TextInput
                      name="password"
                      type="password"
                      label="password"
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
            </Elevation>
          </Column>
        </Row>
      </div>
    );
  }

  return <>{children}</>;
});

export default Login;
