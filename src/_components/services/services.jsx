import './services.css';

export function Services() {

    return (<>
        <div id={'funcionalidades'} className='services'>
            <p className='title'>Funções</p>
            <div className='services-bubble'>
                <div className='service'>
                    <div className='logo'><img alt='Cloud Function Icon' src='/cloud-icon.svg' /></div>
                    <div className='infos'>
                        <p className='title'>Nuvem</p>
                        <p className='description'>Todos os seus arquivos, prazos e controle na nuvem, para acesso aonde estiver.</p>
                    </div>
                </div>
                <div className='service'>
                    <div className='logo'><img alt='Users Function Icon' src='/users-icon.svg' /></div>
                    <div className='infos'>
                        <p className='title'>Usuários</p>
                        <p className='description'>Controle de usuários e perfil com acesso à sua empresa, para limitar o acesso a funcionalidades mais críticas.</p>
                    </div>
                </div>
                <div className='service'>
                    <div className='logo'><img alt='Notification Function Icon' src='/notify-icon.svg' /></div>
                    <div className='infos'>
                        <p className='title'>Alertas</p>
                        <p className='description'>Alertas para realização e entrega de documentos de acordo com o prazo de cada um.</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}