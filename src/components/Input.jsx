import React from 'react'

const Input = ({ placeholder, label, type, name,id}) => {
  return (
    <>
        <div className="form-wrapper">
            <label htmlFor="" className='form-label'>{label}</label>
            {
                type == 'textarea' ? (
                    <>
                        <textarea name={name} id={id} cols="30" rows="5" className="form-input"></textarea>
                    </>
                ) : (
                    <>
                        <input type={type} name={name} id={id} className="form-input" placeholder={placeholder} />
                    </>
                )
            }
        </div>
    </>
  )
}

export default Input