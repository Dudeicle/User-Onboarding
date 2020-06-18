import * as Yup from 'yup'

let yup = require('yup');

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Password is Required"),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: Yup
        .string()
        .min(6, "Password must be at least 6 characters long.")
        .required("No password provided."),
    terms: Yup
        .boolean()
        .oneOf([true], 'CHECK THE BOX!')
        .required('Please agree to terms')
})

export default formSchema