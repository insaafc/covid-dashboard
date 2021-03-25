import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const [isSubmitted,setSubmited] = useState (false)

    function submitForm() {
        setSubmited(true);
    }

    const centerText = {
        textAlign:'center',
        color: 'rgb(0, 0, 0)'
    }

    return (
        <>
        <h1 style={centerText}>Get in touch with us today!</h1>
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
            <img src="img/noroff-light.png" alt="logo" className="form-img"/>
            </div>
            {!isSubmitted ? <FormSignup submitForm = {submitForm}/> : (<FormSuccess />)}
            </div>

            
        </>
    )
}

export default Form
