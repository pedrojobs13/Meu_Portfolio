import React, { useRef, useState } from "react";
import style from './style.module.scss';
import emailjs from '@emailjs/browser';

export default function Contato() {

    const [contact, setContact] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const form = useRef<any>(null)

    function handleNewFormInvalid(e: React.InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('esse campo é obrigatório')
    }

    function handleNewFormInvalidText(e: React.InvalidEvent<HTMLInputElement>) {
        e.target.setCustomValidity('esse campo é obrigatório')
    }
    function handleChangleText(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
        e.target.setCustomValidity('')
    }
    function handleChangleTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('');
        setContact(e.target.value)
    }

    function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs.sendForm('service_twnchve', 'template_l9thbp2', form.current, 'y1Jzjxmx9cTHXHTGx')
            .then((response) => {
                console.log(response.status);
                setEmail('')
                setName('')
                setContact('')
            }, (err) => {
                console.log("Erro: ", err)
            })
    }

    return (

        <div id='contato'>
            <div className={style.title}>
                <h6>Entre em Contato</h6>
            </div>
            <section className={style.Container}>

                <div className={style.contact_info_container}>
                    <div className={style.single_info_box}>
                        <h6>Endereço</h6>
                        <p>Alegre, Espiríto Santo</p>
                    </div>
                    <div className={style.single_info_box}>
                        <h6>E-mail</h6>
                        <p>pedro.lg.oliveira@edu.ufes.br</p>
                    </div>
                </div>

                <form className={style.formContainer} ref={form} onSubmit={sendEmail}>
                    <div className={style.form_input}>
                        <input
                            type='text'
                            placeholder="Seu nome"
                            onInvalid={handleNewFormInvalidText}
                            onChange={handleChangleText}
                            required
                            value={name}
                            name="from_name"
                        />
                    </div>
                    <div className={style.form_input}>
                        <input
                            type='email'
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={handleChangeEmail}
                            required
                            name="email"
                        />
                    </div>
                    <div className={style.form_input}>
                        <textarea
                            placeholder="deixe um comentário"
                            required
                            onInvalid={handleNewFormInvalid}
                            onChange={handleChangleTextarea}
                            value={contact}
                            name="message"
                        />
                    </div>
                    <footer>
                        <button type="submit"
                            className={style.btn_submit}
                            disabled={contact.length == 0}
                        >
                            Enviar
                        </button>
                    </footer>
                </form>
            </section>
        </div>
    )
}