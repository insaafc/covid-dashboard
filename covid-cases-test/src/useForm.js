import {useState, useEffect} from 'react'

const useForm = (callback, validate) => {
    const [values,setValues] = useState({
        name:'',
        email: '',
        message:'',
    });
    const [errors,setErrors] = useState({});
    const [isSubmitting, setSubmitting] =  useState (false);

    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setSubmitting(true);
    };

    useEffect(
        () => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
             callback();
            }
    }, 
    [errors]
    );
    return {handleChange, handleSubmit,values,errors};
};

export default useForm;