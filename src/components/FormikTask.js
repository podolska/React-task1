import { Formik, Form, Field, ErrorMessage } from "formik";

export default function FormikTask() {

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            onSubmit={(values, formikBag) => {
                alert(`Name - ${values.name}, email - ${values.email}, phone number - ${values.phone}`);
                formikBag.resetForm();
            }}
            validate={(values) => {
                let errors = {};
                if (!/\d{12}/.test(values.phone)) {
                    errors.phone = 'Invalid phone number. Enter 12 numbers, please';
                };
                return errors;
            }}
        >
            {(props) => 
                (<Form onSubmit={props.handleSubmit} className="form">
                    <div>
                        <label>
                            Name
                            <Field
                                name="name"
                                type="text"
                                required
                                onChange={(props.handleChange)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                            <Field
                                name="email"
                                type="email"
                                required
                                onChange={props.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Phone number
                            <Field
                                name="phone"
                                type="tel"
                                required
                                onChange={props.handleChange}   
                            />
                        </label>
                        <ErrorMessage name="phone" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>)
            }
        </Formik>
    );
};