import React from 'react'
import Buttons from '../components/Button'
import Input from '../components/Input'

const Contactme = () => {
    const [check, setCheck] = React.useState();

    const handleCheck =()=>{
        console.log(check)
    }
  return (
    <main className="container">
        <section className="contact__container">
            <div className="contact__header">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form method='POST' className="contact__form">
                <div className="contact__even">
                    <Input placeholder={`Enter your first name`} type={`text`} label={`First name`} name={`first_name`} id={`first_name`}/>
                    <Input placeholder={`Enter your last name`} type={`text`} label={`Last name`} name={`last_name`} id={`last_name`}/>
                </div>
                <Input placeholder={`yourname@email.com`} type={`text`} label={`Email`} name={`email`} id={`email`} />
                <Input placeholder={`Send me a message and I'll reply you as soon as possible...`} name={`message`} id={`message`} type={`textarea`} label={`Message`}/>

                <div className="contact__checkbox">
                    <input type={`checkbox`} value={check} onChange={handleCheck} name={ `checkbox`} id={`check`}/>
                    <label for={`check`}>You agree to providing your data to {name} who may contact you.</label>
                </div>
                <Buttons id={`btn__submit`} status={``} text={`Send message`} type={`submit`}/>
            </form>
        </section>
    </main>
  )
}

export default Contactme