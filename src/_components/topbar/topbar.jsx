import './topbar.css';

export function Topbar() {

    return (<>
        <div className='topbar'>
            <img alt='App Logo' src='/TD-FULL-V1-FIT-WO-BG.png' />
            <div className='links'>
                <p><a href='#funcionalidades'>Funções</a></p>
                <p><a href='#sobre'>Sobre</a></p>
                <p><a href='#time'>Time</a></p>
                <p><a href='#contato'>Contato</a></p>
            </div>
        </div>
    </>);
}