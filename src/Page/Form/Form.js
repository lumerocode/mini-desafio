import React, { useRef } from 'react'
import './form.css'

export const Form = () => {

  const form = useRef();

  const submit = (e) => {

    e.preventDefault();

    const nameText = document.querySelector('.form__name').value;
    const emailText = document.querySelector('.form__email').value;
    const areaText = document.querySelector('.form__textarea').value;

    document.getElementById("valueName").innerHTML = nameText; 
    document.getElementById("valueEmail").innerHTML = emailText; 
    document.getElementById("valueTextArea").innerHTML = areaText;

  }

  return (
    <section className='section'>
      <form className='form'ref={form} onSubmit={submit}>
        <input 
        type='text' 
        name='name'
        placeholder='Nombre' 
        className='form__name'
        required/>

        <input 
        type='email' 
        name='email'
        placeholder='Email' 
        className='form__email'
        required/>

        <textarea 
        type='text' 
        placeholder='Message' 
        className='form__textarea'
        required/>

        <button type='submit' className='form__button'>Submit</button>
      </form>
      <div className='message'>
          <p id="valueName"></p>
          <p id="valueEmail"></p>
          <p id="valueTextArea"></p>
      </div>
    </section>
  )
}
