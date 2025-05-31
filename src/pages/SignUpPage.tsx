import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormValidationSchema, FormType } from "../types/SignUp";
import { withZodSchema } from 'formik-validator-zod';
// import { v4 as uuidv4 } from 'uuid';


const SignUpPage = () => {

    const handleFormSubmit = (values: FormType) => {
        console.log('Form submitted')
        alert(JSON.stringify(values, null, 2))
    }

    const initialValues = { 
        firstName: '', 
        lastName: '', 
        email: '',
        password: '',
        confirmPassword: '',
    }

    const formData = [
        {
            "label": "First Name",
            "name": "firstName",
            "type": "text",
            "placeholder": "Enter your first name",
        },
        {
            "label": "Last Name",
            "name": "lastName",
            "type": "text",
            "placeholder": "Enter your last name",
        },
        {
            "label": "Email Address",
            "name": "email",
            "type": "text",
            "placeholder": "Enter your email",
        },
        {
            "label": "Password",
            "name": "password",
            "type": "password",
            "placeholder": "Enter your password",
        },
        {
            "label": "Confirm Password",
            "name": "confirmPassword",
            "type": "password",
            "placeholder": "Confirm password",
        }
    ]

    return (
        <>
            <NavBar />
            <Container className="d-flex flex-column justify-content-center align-items-center mx-auto my-auto" style={{ maxWidth: '768px', paddingTop: '48px', paddingBottom: '76px', marginBottom: '48px' }}>
                <h1 className="mb-1"><strong>Sign Up</strong></h1>
                <p className="mb-3">Create an account to plan your year</p>
                <Formik
                initialValues={initialValues}
                validate={withZodSchema(FormValidationSchema)}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                    handleFormSubmit(values)
                    resetForm({ values: initialValues })
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ resetForm, isSubmitting }) => (
                    <Form className="border border-2 border-primary justify-content-sm-stretch w-100 pb-5 pt-5 pb-4 px-4 rounded-4 d-flex flex-column">
                        {
                            formData.map(data => (
                                <div key={data.name} className="mb-2">
                                    <label htmlFor={data.name}><strong>{data.label}</strong></label>
                                    <Field autoComplete='true' name={data.name} type={data.type} placeholder={data.placeholder} style={{ width: '100%' }} />
                                    <ErrorMessage name={data.name} component='div' className="text-danger small" />
                                </div>
                            ))
                        }
                        <Button className="bg-light text-primary border border-1 border-primary mt-3" type="reset" onClick={() => resetForm({ values: initialValues })}>Cancel</Button>         
                        <Button type="submit" className="bg-primary text-white rounded-2 w-100 mt-2" disabled={isSubmitting}>{isSubmitting ? 'Signing Up' : 'Sign Up'}</Button>
                    </Form>
                )}
                </Formik>
            </Container>
            <Footer />
        </>
    )
}

export default SignUpPage;