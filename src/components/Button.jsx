import React from 'react'

const Buttons = ({type,text,id}) => {
  return (
    <>
        <button type={type} id={id} className="button">
            {text}
        </button>
    </>
  )
}

export default Buttons