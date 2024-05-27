// components/Form/Form.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMsg, setFocusMsg] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const capitalizedValue =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setName(capitalizedValue);
  };

  const handleMsgChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const capitalizedValue =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setMessage(capitalizedValue);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/send', { name, email, message });

      if (response.status === 200) {
          setName('');
          setEmail('');
          setMessage('');
          document.getElementById('modal')?.classList.add('open');

          window.scrollTo({
            top: document.documentElement.scrollHeight / 2 - window.innerHeight / 2,
            behavior: "smooth",
          });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2 relative'>
        <label htmlFor="name">Nombre</label>
        <input
        className="border-b border-text_color"
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleNameChange(e)}
          required
          onFocus={() => setFocusName(true)}
          onBlur={() => setFocusName(false)}
        />
        <span className={`h-[1px] bg-primary absolute bottom-0 left-0 right-0transition-all duration-200 ease-in-expo ${focusName ? "w-full" : "w-0"}`}></span>
      </div>
      <div className='flex flex-col gap-2 relative'>
        <label htmlFor="email">Email</label>
        <input
        className="border-b border-text_color"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          onFocus={() => setFocusEmail(true)}
          onBlur={() => setFocusEmail(false)}
        />
        <span className={`h-[1px] bg-primary absolute bottom-0 left-0 transition-all duration-200 ease-in-expo z-50 ${focusEmail ? "w-full" : "w-0"}`}></span>
      </div>
      <div className='flex flex-col gap-2 relative'>
        <label htmlFor="message">Mensaje</label>
        <textarea
        className="border-b border-text_color"
          id="message"
          value={message}
          onChange={(e) => handleMsgChange(e)}
          required
          onFocus={() => setFocusMsg(true)}
          onBlur={() => setFocusMsg(false)}
          placeholder='Por favor detallle en que fecha y horario le gustaria agendar una cita.'
        ></textarea>
        <span className={`h-[1px] bg-primary absolute bottom-0 left-0 transition-all duration-200 ease-in-expo z-50 ${focusMsg ? "w-full" : "w-0"}`}></span>
      </div>
      <button className='mt-8 lg:ml-auto p-2 px-6 border border-solid border-text_color outline outline-transparent hover:outline-text_color hover:outline-offset-4 w-fit outline-1 transition-all ease-in-expo' type="submit">Enviar</button>
    </form>
  );
};

export default Form;
