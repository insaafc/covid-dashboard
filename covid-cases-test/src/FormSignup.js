import React from 'react'
import useForm from './useForm'
import validate from './validateinfo'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);

    // if (!values)
    // {
    //     return null;
    // }


    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit} noValidate>
            <h1>Contact us today</h1>
            <div className="form-input">
                <label htmlFor="name" className="form-label">
                Name:
                </label>
                <input 
                id="name" 
                type="text" 
                name="name" 
                className="form-input" 
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                />

                {/* errors is true then return p tag */}
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-input">
                <label htmlFor="email" className="form-label">
                   Email Address:
                </label>
                <input 
                id="email" 
                type="email" 
                name="email" 
                className="form-input" 
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                />
                 {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-input">
                <label className="form-label">
                   Message:
                </label>
                <textarea 
                id="message" 
                type="message" 
                name="message" 
                className="form-input" 
                placeholder="Enter your message"
                value={values.message}
                onChange={handleChange}
                />
                 {errors.message && <p>{errors.message}</p>}
            </div>
            <button className="form-input-btn" type="submit">Send</button>
           </form>
       </div>
       
    )
}

export default FormSignup
