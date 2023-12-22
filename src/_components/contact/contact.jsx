import { Button } from '../button/button';
import { Input } from '../input/input';
import './contact.css';

export function Contact() {

    return (<>
        <div id='contato' className='contact-wrap'>
            <div className='contact-content'>
                <p className='title'>Contato</p>
                <form action="https://formspree.io/f/xgejwrkd" method="POST">
                    <label>Seu Email</label>
                    <Input type="email" name="email" placeholder="example@example.com" required />
                    <label>Sua Mensagem</label>
                    <Input textarea rows={15} name="message" placeholder="Sua mensagem aqui..." required />
                    <Button title={'Enviar'} />
                </form>
            </div>
        </div>
    </>);
}