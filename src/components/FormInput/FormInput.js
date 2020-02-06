import React from 'react'
import './FormInput.scss'

const FormInput = ({ handleChange, label, ...otherInputProps}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherInputProps}/>
    {
      label ?
      (<label className={`${
        otherInputProps.value.length ? 'shrink' : ''
        } form-input-label`}>
        {label}
      </label>)
      : null
    }
  </div>
)
export default FormInput;
