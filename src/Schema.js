import * as yup from 'yup';

const schema = yup.object().shape({
    'name': yup
    .string()
    .required('name must be at least 2 characters')
    .min(2, 'name must be at least 2 characters'),

    'special': yup
    .string(),

    'instructions': yup
    .string()
    .required('here are the special instructions'),

    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Must select a size'),

    pepperoni: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked'),

    bacon: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked'),

    mushrooms: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked'),

    artichoke: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked'),

    pineapple: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked')
})  

export default schema;
