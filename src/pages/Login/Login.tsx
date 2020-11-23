import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {FormikHelpers} from "formik/dist/types";
import { MutationLoginArgs } from "../../graphql/types";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../globalStores/AppStore/AppStore";

interface Values extends MutationLoginArgs{}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Login = observer(({children}: Props) => {
    const appStore = useAppStore()

    async function handleSubmit(values: Values, formikHelpers: FormikHelpers<Values>) {
        appStore.authStore.login(values).then(() => {
            formikHelpers.resetForm()
        })
    }

    if (!appStore.authStore.isLoggedIn) {
        return (
            <Formik<Values>
                onSubmit={handleSubmit}
                initialValues={{
                    username: "",
                    password: "",
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        )
    }

    return (
        <>
            {children}
        </>
    )

})

export default Login;