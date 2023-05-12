import { Send } from 'lucide-react'
import React from 'react'

const Form = () => {
    return (
        <form data-aos="fade-up-left" className="card_form" action="https://formsubmit.co/nata.codedev@gmail.com" method="POST">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="insira seu nome" required />

            <label htmlFor="phone">Número</label>
            <input type="text" id="phone" name="phone" placeholder="insira seu número" required />

            <label htmlFor="email" >Email</label>
            <input type="email" id="email" name="email" placeholder="insira seu email" required />

            <label htmlFor="message">Mensage</label>
            <textarea name="message" id="message" cols={30} rows={5} placeholder="Olá conte um pouco sobre sua ideia" />

            <button type="submit">
                <Send size={15} />
                Enviar
            </button>

            <input type="hidden" name="_subject" value="Novo Contato!" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
        </form>
    )
}

export default Form