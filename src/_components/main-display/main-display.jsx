import { Button } from '../button/button';
import './main-display.css';

export function MainDisplay() {

    return (<>
        <div className='main-display-wrap'>
            <div className='main-display-content'>
                <p className='pre-title'>Conheça a solução em português, em nuvem e gratuíto para</p>
                <p className='title'>Gerenciador de Documentos e Prazos</p>
                <div className='options'>
                    <Button title={'Conhecer as funções'} href={'#funcionalidades'} />
                    <Button title={'Usar o App'} href={'https://l.timerdoc.com.br/19Q15'} />
                </div>
            </div>
        </div>
    </>);
}