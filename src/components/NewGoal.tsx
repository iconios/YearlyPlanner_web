import { Button, Container } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { GoalFormSchema, GoalForm } from "../types/NewGoal";

const NewGoal = () => {

    const categories = [
        'Career & professional growth',
        'Finance',
        'Personal development',
        'Health & fitness',
        'Relationships & social life',
        'Hobbies & creativity',
        'Productivity & organization',
        'Spiritual & emotional well-being',
        'Education & learning',
        'Adventure & fun',
        'Other'
    ]

    const initialValues = { 
        goalName: '', 
        category: '', 
        startDate:'',
        endDate: '',
    }        

    const handleFormSubmit = (values: GoalForm) => {
            console.log('Form submitted')
            alert(JSON.stringify(values, null, 2))
    }

    return (
        <>
            <h1 className="text-center mt-5 mb-3"><strong>NEW GOAL</strong></h1>
            <Container className="mb-4 d-flex flex-column justify-content-center align-items-center">
                <Formik 
                initialValues={initialValues}
                validate={withZodSchema(GoalFormSchema)}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => 
                        {
                            handleFormSubmit(values)
                            resetForm({ values: initialValues })
                            setSubmitting(false);
                        }, 400);
                    }
                }>
                    {({ resetForm, isSubmitting  }) => (
                        <Form className="border border-2 border-primary justify-content-sm-stretch w-100 pt-4 pb-5 px-4 rounded-4 d-flex flex-column" style={{ maxWidth: '768px' }}>
                            <label htmlFor='goalName' className="mt-2"><strong>Goal Title</strong></label>
                            <Field autoComplete='true' name='goalName' type='text' placeholder='Enter a goal' style={{ width: '100%' }} />
                            <ErrorMessage name='goalName' component='div' className="text-danger small" />

                            <label htmlFor='category' className="mt-2"><strong>Category</strong></label>
                            <Field autoComplete='true' name='category' as='select' style={{ width: '100%' }}>
                                <option value=''>Select a category</option>
                                { [...categories].sort((a, b) => a.localeCompare(b)).map(category => (
                                    <option key={category} value={category}>{category}</option>
                                )) }
                            </Field>
                            <ErrorMessage name='category' component='div' className="text-danger small" />

                            <div>
                                <label htmlFor='startDate' className="mt-2"><strong>Start Date</strong></label>
                                <Field autoComplete='true' name='startDate' type='date' placeholder='Start date' style={{ width: '100%' }} />
                                <ErrorMessage name='startDate' component='div' className="text-danger small" />

                                <label htmlFor='endDate' className="mt-2"><strong>End Date</strong></label>
                                <Field autoComplete='true' name='endDate' type='date' placeholder='End date' style={{ width: '100%' }} />
                                <ErrorMessage name='endDate' component='div' className="text-danger small" />
                            </div>
                            
                            <Button className="bg-light text-primary border border-1 border-primary mt-3" type="reset" onClick={() => resetForm({ values: initialValues })}>Cancel</Button>
                            <Button type="submit" className="mt-2" disabled={isSubmitting}>{isSubmitting ? 'Saving': 'Save'}</Button>
                        </Form>
                    )}                    
                </Formik>                  
            </Container>     
        </>
    )
}

export default NewGoal;